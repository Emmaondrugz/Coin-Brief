/**
 * Assets shown in the live price ticker, in display order.
 *
 * `symbol` is the label rendered in the bar; `id` is the CoinGecko coin id
 * used to look the price up. Add or reorder entries here — the API route and
 * the ticker component both read from this list.
 */
export type TickerAsset = {
  symbol: string;
  id: string;
};

export const tickerAssets: readonly TickerAsset[] = [
  { symbol: "BTCUSD", id: "bitcoin" },
  { symbol: "ETHUSD", id: "ethereum" },
  { symbol: "BCHUSD", id: "bitcoin-cash" },
  { symbol: "LTCUSD", id: "litecoin" },
  { symbol: "XRPUSD", id: "ripple" },
  { symbol: "SOLUSD", id: "solana" },
  { symbol: "ADAUSD", id: "cardano" },
  { symbol: "DOGEUSD", id: "dogecoin" },
  { symbol: "DOTUSD", id: "polkadot" },
  { symbol: "LINKUSD", id: "chainlink" },
  { symbol: "AVAXUSD", id: "avalanche-2" },
  { symbol: "ATOMUSD", id: "cosmos" },
  { symbol: "UNIUSD", id: "uniswap" },
  { symbol: "XLMUSD", id: "stellar" },
  { symbol: "TRXUSD", id: "tron" },
  { symbol: "ETCUSD", id: "ethereum-classic" },
  { symbol: "FILUSD", id: "filecoin" },
  { symbol: "NEARUSD", id: "near" },
  { symbol: "APTUSD", id: "aptos" },
  { symbol: "ARBUSD", id: "arbitrum" },
] as const;

/** One asset's current price, as served by `/api/ticker`. */
export type TickerQuote = {
  symbol: string;
  price: number;
  /** 24h price change, as a percentage (e.g. 0.21 means +0.21%). */
  change24h: number;
};

export type TickerResponse = {
  quotes: TickerQuote[];
  updatedAt: number;
  /** True when the upstream refresh failed and these are the last good prices. */
  stale?: boolean;
};
