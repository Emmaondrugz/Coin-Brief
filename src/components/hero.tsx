import Image from "next/image";
import bitgoBlog from "../../public/bitgo_blog.png";
import Link from "next/link";
import { formatPostDate, getCategory, trendingPosts } from "@/lib/hero_blog";

export default function Hero() {
  const post = trendingPosts[0];
  const category = getCategory(post.category);

  return (
    <div className="relative w-full h-[70vh] lg:h-[80vh] border-b px-4 border-gray-200 overflow-hidden">
      <div
        className="relative w-full flex h-full items-end justify-between max-w-350 sm:py-6
      border-gray-200 mx-auto border-x p-4 sm:px-6"
      >
        <Image
          src={bitgoBlog}
          alt=""
          fill
          preload
          quality={100}
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="object-cover object-[70%_top] md:object-center"
        />

        {/* Darkens the left side so the headline stays readable over the photo. */}
        <div className="pointer-events-none block md:hidden absolute inset-0 bg-linear-to-t from-black via-black/70  to-transparent" />

        {/*
          Grain. noise.avif is a 256x256 tile, so it repeats at its native size
          rather than being stretched. `overlay` blending lets the photo's own
          light and dark show through instead of laying flat grey on top.
        */}
        <div className="pointer-events-none absolute inset-0 bg-[url(/noise.avif)] bg-repeat lg:opacity-20 opacity-0 mix-blend-overlay" />

        {/* Left-hand copy. Edit freely — data comes from src/lib/blog.ts. */}
        <div className="relative z-10 sm:max-w-170 w-full flex flex-col lg:items-start items-center text-white">
          <div className="w-full flex justify-start">
            {category && (
              <span className="inline-block border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-wide uppercase backdrop-blur-sm">
                {category.name}
              </span>
            )}
          </div>

          <h1 className="lora mt-5 leading-[110%] text-5xl sm:text-7xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/70">
            <span className="font-medium text-white">{post.author.name}</span>
            <span aria-hidden>·</span>
            <span>{post.author.role}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>

          <Link
            href={`/Blog?slug=${encodeURIComponent(post.slug)}`}
            className="group mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-3.5 bg-white text-black sm:max-w-70"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
