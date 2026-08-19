"use client";

import { useRef, useState } from "react";
import Header from "@/components/header";
import Ticker from "@/components/ticker";

export default function News() {
  const categories = [
    "Business",
    "Deals",
    "DeFi",
    "Ecosystems",
    "Macro",
    "Markets",
    "Regulations",
    "Web3",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const categoryRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    const categoryElement = categoryRefs.current[category];
    const container = scrollContainerRef.current;

    if (categoryElement && container) {
      const containerRect = container.getBoundingClientRect();
      const categoryRect = categoryElement.getBoundingClientRect();

      // If the category is close to the left edge,
      // scroll slightly to the left
      if (categoryRect.left <= containerRect.left + 20) {
        container.scrollBy({
          left: -100,
          behavior: "smooth",
        });
      }

      // If the category is close to the right edge,
      // scroll slightly to the right
      else if (categoryRect.right >= containerRect.right - 20) {
        container.scrollBy({
          left: 100,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="h-screen w-full bg-white inter">
      <Ticker />
      <Header />

      {/* Main content */}
      <div className="relative h-full w-full overflow-hidden border-b border-gray-200 px-4">
        <div
          className="
            relative mx-auto flex h-full w-full max-w-350
            flex-col items-start overflow-hidden
            border-x border-gray-200
            px-4 py-4
            pb-20
            sm:px-6 sm:pt-10 sm:pb-32
          "
        >
          {/* Breadcrumb */}
          <div className="text-black">
            <span className="text-gray-700">Home</span> / News
          </div>

          <div className="mt-3 w-full sm:mt-5">
            {/* Page title */}
            <div className="text-2xl lora sm:text-6xl">
              Digital Assets Digest
            </div>

            {/* Categories */}
            <div
              ref={scrollContainerRef}
              className="
                mt-6 flex w-full
                overflow-x-auto
                border-b border-gray-200
                scroll-smooth
                md:mt-10
                [&::-webkit-scrollbar]:hidden
                [scrollbar-width:none]
              "
            >
              <div className="flex min-w-max items-center gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      ref={(element) => {
                        categoryRefs.current[category] = element;
                      }}
                      onClick={() => handleCategoryClick(category)}
                      className={`
                        relative shrink-0 cursor-pointer
                        whitespace-nowrap px-4 py-3
                        text-sm font-medium
                        transition-all duration-300
                      `}
                    >
                      {category}

                      {/* Active category indicator */}
                      <span
                        className={`
                          absolute bottom-0 left-0
                          h-0.5 w-full
                          bg-black
                          transition-all duration-300
                          ${isActive ? "scale-x-100" : "scale-x-0"}
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
