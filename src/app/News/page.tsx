"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Header from "@/components/header";
import Ticker from "@/components/ticker";
import Footer from "@/components/footer";
import { allPosts, formatPostDate } from "@/lib/blogs";

const categoryOptions = [
  { label: "All", slug: null },
  { label: "Business", slug: "business" },
  { label: "Deals", slug: "deals" },
  { label: "DeFi", slug: "defi" },
  { label: "Ecosystems", slug: "ecosystems" },
  { label: "Macro", slug: "macro" },
  { label: "Markets", slug: "markets" },
  { label: "Regulations", slug: "regulations" },
  { label: "Web3", slug: "web3" },
] as const;

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");

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

  const selectedCategory = categoryOptions.find(
    (category) => category.label === activeCategory,
  );
  const posts = allPosts.filter(
    (post) =>
      !selectedCategory?.slug || post.category === selectedCategory.slug,
  );

  console.log(posts);

  return (
    <div className="h-fit w-full bg-white inter">
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
            sm:px-6 sm:pt-10
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
                scrollbar-none
              "
            >
              <div className="flex min-w-max items-center gap-2">
                {categoryOptions.map((category) => {
                  const isActive = activeCategory === category.label;

                  return (
                    <button
                      key={category.label}
                      ref={(element) => {
                        categoryRefs.current[category.label] = element;
                      }}
                      onClick={() => handleCategoryClick(category.label)}
                      className={`
                        relative shrink-0 cursor-pointer
                        whitespace-nowrap px-4 py-3
                        text-sm font-medium
                        transition-all duration-300
                      `}
                    >
                      {category.label}

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

        {/* News Post grid */}
        <div className="mx-auto w-full max-w-350 border-x border-gray-200 px-4 pb-20 sm:px-6 sm:pb-32">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={post.source?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 flex-col gap-3"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.images[0] || "/noise.avif"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {post.category} &bull; {formatPostDate(post.publishedAt)}
                  </span>
                  <h2 className="text-base font-medium leading-snug group-hover:underline sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}
