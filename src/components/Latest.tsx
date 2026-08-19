"use client";

import Image from "next/image";
import Trending from "./trending";

const posts = [
  {
    title:
      "Blockchain Association backs SEC's proposal to scrap outdated NMS rules, citing tokenization benefits",
    category: "Regulation",
    date: "Aug 18, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2023/09/20230814_TheSEC_News2-1200x675.jpg",
    url: "https://www.theblock.co/news/regulation/2026-08-18-blockchain-association-backs-secs-proposal-to-scrap-outdated-nms-rules-citing-tokenization-benefits-412069",
  },
  {
    title: "Kraken brings US stock trading to European Economic Area customers",
    category: "Business",
    date: "Aug 18, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2023/03/20230317_Kraken_Color-1200x675.jpg",
    url: "https://www.theblock.co/news/business/2026-08-18-kraken-us-stock-trading-europe-economic-area-412027",
  },
  {
    title:
      "Cathie Wood's Ark Invest scoops up $15 million in Block Inc shares as stock dips 3%",
    category: "Markets",
    date: "Aug 18, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2022/11/20221114_ArkInvest4-1200x675.jpg",
    url: "https://www.theblock.co/news/markets/2026-08-18-cathie-wood-ark-invest-15-million-block-inc-412060",
  },
  {
    title:
      "Ripple partners with South Korea's Jeonbuk Bank for cross-border payments",
    category: "Business",
    date: "Aug 18, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2026/01/20260108_Ripple_News_3-1200x675.jpg",
    url: "https://www.theblock.co/news/business/2026-08-18-ripple-south-korea-jeonbuk-bank-412049",
  },
  {
    title:
      "Upbit and Bithumb report 50% declines in H1 revenue, reflecting market contraction",
    category: "Markets",
    date: "Aug 18, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2024/02/20240220_SouthKorea_News2-1200x675.jpg",
    url: "https://www.theblock.co/news/markets/2026-08-18-upbit-bithumb-h1-decline-412034",
  },
  {
    title:
      "Robinhood Chain TVL surges 45% in August as tokenized RWAs lose ground",
    category: "Ecosystems",
    date: "Aug 17, 2026",
    image:
      "https://www.tbstat.com/wp/uploads/2021/08/20210803_Robinhood_Crypto-1200x675.jpg",
    url: "https://www.theblock.co/news/ecosystems/2026-08-17-robinhood-chain-tvl-surges-45-august-tokenized-rwas-lose-ground-411998",
  },
];

export default function Latest() {
  return (
    <div className="relative w-full border-b px-4 border-gray-200 overflow-hidden">
      <div
        className="relative w-full flex flex-col items-start max-w-350
        sm:pt-10 border-gray-200 pb-20 sm:pb-32 mx-auto border-x p-4 sm:px-6"
      >
        <div className="flex w-full gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Heading */}
            <div className="flex w-full mb-5 items-center gap-4">
              <div className="whitespace-nowrap sm:text-4xl text-2xl lora">
                Latest News
              </div>

              <div className="h-px flex-1 bg-black" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {post.category} • {post.date}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium leading-snug group-hover:underline">
                      {post.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Aside with sticky positioning — desktop only */}
          <div className="hidden lg:block w-120 shrink-0">
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
}
