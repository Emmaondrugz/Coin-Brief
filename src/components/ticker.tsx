"use client";

import { useEffect, useState } from "react";
import type { TickerQuote, TickerResponse } from "@/config/ticker";

/**
 * How often to re-poll `/api/ticker`, in milliseconds.
 *
 * Keep this in step with `revalidate` in the route handler — polling faster
 * than the server refreshes just re-reads the same cached numbers.
 */
const REFRESH_MS = 20_000;

/** First retry delay after a failed refresh; doubles up to REFRESH_MS. */
const RETRY_MS = 3_000;

/**
 * Sub-dollar coins need more decimals to say anything useful, so XRP reads
 * $0.99971 while BTC reads $62,960.80.
 */
function formatPrice(price: number): string {
  const decimals = price < 1 ? { min: 2, max: 5 } : { min: 2, max: 2 };

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals.min,
    maximumFractionDigits: decimals.max,
  });
}

function formatChange(change: number): string {
  return `${change < 0 ? "-" : ""}${Math.abs(change).toFixed(2)}%`;
}

export default function Ticker() {
  const [quotes, setQuotes] = useState<TickerQuote[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;
    let failures = 0;

    async function load(): Promise<boolean> {
      try {
        // `no-store` matters: without it the browser's HTTP cache can keep
        // replaying one response and the prices sit frozen on screen.
        const res = await fetch("/api/ticker", {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!res.ok) return false;

        const data: TickerResponse = await res.json();
        if (cancelled || data.quotes.length === 0) return false;

        setQuotes(data.quotes);
        return true;
      } catch {
        // Network hiccup or an aborted in-flight request on unmount: keep the
        // last good prices on screen rather than blanking the bar.
        return false;
      }
    }

    async function tick() {
      if (cancelled) return;

      // Polling a backgrounded tab just burns rate limit; the visibility
      // listener below catches it up when the reader returns.
      const ok =
        document.visibilityState === "visible" ? await load() : true;
      if (cancelled) return;

      failures = ok ? 0 : failures + 1;

      // On failure, retry sooner than the normal cadence — an empty ticker is
      // worth chasing — but back off so a rate-limited upstream isn't hammered
      // into staying rate-limited.
      const delay = ok
        ? REFRESH_MS
        : Math.min(REFRESH_MS, RETRY_MS * 2 ** (failures - 1));

      timer = setTimeout(tick, delay);
    }

    tick();

    function onVisible() {
      if (document.visibilityState === "visible") load();
    }
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  // Nothing to show until real prices land — no bar, no placeholder row.
  if (!quotes) return null;

  // Each copy of the list is identical, so the second one is decorative
  // duplication that screen readers should skip.
  const list = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {quotes.map((quote) => (
        <div
          key={quote.symbol}
          className="mr-10 flex shrink-0 items-center gap-2"
        >
          <span className="text-neutral-500">{quote.symbol}</span>
          <span className="font-semibold text-black">
            {formatPrice(quote.price)}
          </span>
          <span
            className={
              quote.change24h < 0
                ? "text-xs text-[#b23b3b]"
                : "text-xs text-[#2f6f9f]"
            }
          >
            {formatChange(quote.change24h)}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full border-b border-gray-200 px-4">
      <div
        className="relative mx-auto w-full max-w-350 overflow-hidden border-x
        border-gray-200 bg-white py-2.5 text-sm tabular-nums"
      >
        <div
          className="flex w-max animate-[ticker-scroll_80s_linear_infinite]
          hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {list(false)}
          {list(true)}
        </div>

        {/*
          Fades the prices out at both edges instead of clipping them mid-digit.
          `to-white/0` rather than `to-transparent`: transparent is rgba(0,0,0,0),
          so fading white to it can push a grey cast through the middle of the
          ramp. Fading white to zero-alpha white stays clean.
          The animated track is transformed, which gives it a stacking context —
          z-10 keeps these above it rather than relying on DOM order.
        */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-white/0" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-white/0" />
      </div>
    </div>
  );
}
