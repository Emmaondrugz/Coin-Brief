"use client";

const trending = [
  {
    title:
      "Blockchain Association backs SEC proposal to scrap outdated NMS rules",
    date: "August 18th, 2026",
    url: "https://www.theblock.co/news/regulation/2026-08-18-blockchain-association-backs-secs-proposal-to-scrap-outdated-nms-rules-citing-tokenization-benefits-412069",
  },
  {
    title:
      "Bitcoin dominance holds near 56.5% as market cap climbs past $2.28T",
    date: "August 18th, 2026",
    url: "#",
  },
  {
    title:
      "Fear & Greed Index climbs to 41 as panic eases across crypto markets",
    date: "August 18th, 2026",
    url: "#",
  },
  {
    title:
      "Kraken expands US stock trading access to European Economic Area customers",
    date: "August 18th, 2026",
    url: "https://www.theblock.co/news/business/2026-08-18-kraken-us-stock-trading-europe-economic-area-412027",
  },
  {
    title:
      "Ripple partners with Jeonbuk Bank on South Korea cross-border payments",
    date: "August 18th, 2026",
    url: "https://www.theblock.co/news/business/2026-08-18-ripple-south-korea-jeonbuk-bank-412049",
  },
  {
    title:
      "Robinhood Chain TVL climbs 45% in August as tokenized RWA share slips",
    date: "August 17th, 2026",
    url: "https://www.theblock.co/news/ecosystems/2026-08-17-robinhood-chain-tvl-surges-45-august-tokenized-rwas-lose-ground-411998",
  },
];

export default function Trending() {
  return (
    <div className="w-full px-3 flex flex-col">
      <div className="flex w-full mb-5 sm:mb-10 items-center gap-4">
        <div className="whitespace-nowrap text-2xl lora">Trending Now</div>
        <div className="h-px flex-1 bg-black" />
      </div>

      <div className="flex flex-col">
        {trending.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col pb-5 border-b border-gray-200 mt-5 first:mt-0 gap-2"
          >
            <div className="group-hover:underline">{item.title}</div>
            <div className="text-sm text-gray-700">{item.date}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
