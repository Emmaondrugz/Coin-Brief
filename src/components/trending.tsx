import Link from "next/link";
import { allPosts, formatPostDate } from "@/lib/blogs";

const trending = allPosts.slice(0, 6);

export default function Trending() {
  return (
    <div className="w-full px-3 flex flex-col">
      <div className="flex w-full mb-5 sm:mb-10 items-center gap-4">
        <div className="whitespace-nowrap text-2xl lora">Trending Now</div>
        <div className="h-px flex-1 bg-black" />
      </div>

      <div className="flex flex-col">
        {trending.map((item) => (
          <Link
            key={item.slug}
            href={`/Blog?slug=${encodeURIComponent(item.slug)}`}
            className="group flex flex-col pb-5 border-b border-gray-200 mt-5 first:mt-0 gap-2"
          >
            <div className="group-hover:underline">{item.title}</div>
            <div className="text-sm text-gray-700">
              {formatPostDate(item.publishedAt)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
