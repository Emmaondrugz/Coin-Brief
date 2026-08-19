"use client";

import Image from "next/image";
import Link from "next/link";
import Trending from "./trending";
import { latestPosts, formatPostDate } from "@/lib/blogs";

export default function Latest() {
  // Get the 6 most recent posts from the latestPosts array
  const posts = latestPosts.slice(0, 6).map((post) => ({
    title: post.title,
    category: post.category.charAt(0).toUpperCase() + post.category.slice(1),
    date: formatPostDate(post.publishedAt),
    image: post.images[0] || "/images/placeholder.jpg",
    slug: post.slug,
  }));

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
                <Link
                  key={i}
                  href={`/Blog?slug=${encodeURIComponent(post.slug)}`}
                  className="group flex flex-col gap-3"
                >
                  <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder.jpg";
                      }}
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
                </Link>
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
