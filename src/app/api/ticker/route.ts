import { tickerAssets, type TickerQuote } from "@/config/ticker";

/**
 * Seconds between upstream price refreshes.
 *
 * This is the ceiling on how live the ticker can be, and the floor on how
 * politely we treat CoinGecko: at 20s we make at most 3 upstream calls a
 * minute no matter how many readers or tabs are open. Their keyless tier
 * throttles hard, and a throttled key means an empty ticker — so this is
 * deliberately conservative. See the API-key note below to go faster.
 */
export const revalidate = 20;

const CACHE_TTL_MS = revalidate * 1000;

const ENDPOINT = "https://api.coingecko.com/api/v3/simple/price";

/** Shape of the CoinGecko `simple/price` response for our query. */
type SimplePriceResponse = Record<
  string,
  { usd?: number; usd_24h_change?: number } | undefined
>;

type CacheEntry = {
  quotes: TickerQuote[];
  updatedAt: number;
};

/**
 * Last good prices, held in module scope.
 *
 * `next dev` doesn't apply the `revalidate` fetch cache the way a production
 * build does, so without this every poll from every open tab hit CoinGecko
 * directly and tripped their rate limit within minutes. This cache is what
 * actually bounds upstream traffic in development, and it doubles as the
 * fallback that keeps prices on screen when a refresh fails.
 */
let cache: CacheEntry | null = null;

function toQuotes(payload: SimplePriceResponse): TickerQuote[] {
  // Drop any asset the upstream didn't price rather than rendering a NaN.
  return tickerAssets.flatMap((asset) => {
    const entry = payload[asset.id];
    if (typeof entry?.usd !== "number") return [];

    return [
      {
        symbol: asset.symbol,
        price: entry.usd,
        change24h: entry.usd_24h_change ?? 0,
      },
    ];
  });
}

function serve(entry: CacheEntry, stale: boolean) {
  return Response.json(
    { quotes: entry.quotes, updatedAt: entry.updatedAt, stale },
    {
      headers: {
        // max-age=0 keeps browsers from holding onto a response — only shared
        // caches (CDN) get to reuse it, and only for one refresh window.
        "cache-control": `public, max-age=0, s-maxage=${revalidate}, stale-while-revalidate=${revalidate * 3}`,
      },
    },
  );
}

export async function GET() {
  if (cache && Date.now() - cache.updatedAt < CACHE_TTL_MS) {
    return serve(cache, false);
  }

  const ids = tickerAssets.map((asset) => asset.id).join(",");
  const url = `${ENDPOINT}?ids=${ids}&vs_currencies=usd&include_24hr_change=true`;

  // A free CoinGecko demo key raises the limit substantially. Optional — the
  // endpoint works without one, just with less headroom.
  const apiKey = process.env.COINGECKO_API_KEY;

  try {
    const upstream = await fetch(url, {
      headers: {
        accept: "application/json",
        ...(apiKey ? { "x-cg-demo-api-key": apiKey } : {}),
      },
      cache: "no-store",
    });

    if (!upstream.ok) {
      // 429 is the common one: rate limited. Keep showing the last known
      // prices rather than blanking the ticker over a transient throttle.
      if (cache) return serve(cache, true);

      return Response.json(
        {
          error:
            upstream.status === 429
              ? "Rate limited by CoinGecko"
              : `Upstream responded ${upstream.status}`,
        },
        { status: 502 },
      );
    }

    const quotes = toQuotes(await upstream.json());
    cache = { quotes, updatedAt: Date.now() };
    return serve(cache, false);
  } catch {
    if (cache) return serve(cache, true);
    return Response.json({ error: "Upstream unreachable" }, { status: 502 });
  }
}
