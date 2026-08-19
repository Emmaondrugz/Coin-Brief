import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Ticker from "@/components/ticker";
import Trending from "@/components/trending";
import { allPosts, formatPostDate } from "@/lib/blogs";
import { getBlogContent } from "@/lib/blog_content";

type BlogPageProps = {
  searchParams: Promise<{
    slug?: string | string[];
  }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const post = allPosts.find((item) => item.slug === slug) ?? allPosts[0];
  const content = getBlogContent(post?.slug ?? "");

  if (!post) {
    return null;
  }

  return (
    <div className="h-fit w-full bg-white inter">
      <Ticker />
      <Header />

      {/* Main content */}
      <div className="relative h-[70vh] w-full overflow-hidden border-b border-gray-200 px-4 lg:h-[80vh]">
        <div
          className="
            relative mx-auto flex h-full w-full max-w-350
            flex-col items-start justify-end overflow-hidden
            border-x border-gray-200
            px-4 py-6
            sm:px-6 sm:py-10
          "
        >
          <Image
            src={post.images[0] || "/noise.avif"}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/65 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[url(/noise.avif)] bg-repeat opacity-20 mix-blend-overlay" />

          <div className="relative z-10 w-full text-white sm:max-w-170">
            <div className="text-sm text-white/70">
              <a href="/News" className="hover:text-white">
                News
              </a>{" "}
              / Blog
            </div>

            <h1 className="mt-5 text-3xl leading-[115%] lora sm:text-4xl">
              {post.title}
            </h1>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-icon lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-white/70">
                  {post.author.role}
                  {post.author.publication
                    ? `, ${post.author.publication}`
                    : ""}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wide text-white/70">
              <span>
                {formatPostDate(post.publishedAt)} ·{" "}
                {new Date(post.publishedAt).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  timeZone: "UTC",
                })}{" "}
                UTC
              </span>
              <span>{post.source?.name ?? "The Block"}</span>
              <span>{post.category}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-350 border-x border-gray-200 px-4 pb-20 sm:px-6 sm:pb-32">
        <section className="min-h-80 min-w-0 flex-1 border-t border-gray-200 py-10 sm:py-14">
          <h2 className="text-2xl lora sm:text-3xl">Blog Details</h2>
          <article className="mt-8 space-y-6 text-base leading-8 text-gray-700">
            {content?.paragraphs.map((paragraph, index) => (
              <p key={`${content.id}-${index}`}>{paragraph}</p>
            ))}
          </article>
        </section>
        <aside className="hidden w-120 shrink-0 border-t border-gray-200 pt-10 lg:ml-10 lg:block sm:pt-14">
          <Trending />
        </aside>
      </main>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}
