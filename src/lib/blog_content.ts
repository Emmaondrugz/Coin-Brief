import { allPosts } from "@/lib/blogs";

export type BlogContent = {
  id: string;
  paragraphs: string[];
};

function buildContent(post: (typeof allPosts)[number]): BlogContent {
  const [firstPoint, secondPoint, thirdPoint, fourthPoint] = post.quickTake;
  const quote = post.pullQuote
    ? `“${post.pullQuote.text}” ${post.pullQuote.attribution} explained.`
    : `${post.author.name} reported that the development is becoming an important signal for the wider market.`;

  return {
    id: post.slug,
    paragraphs: [
      `${post.excerpt} This report examines why the story matters, what has changed, and how the development fits into the wider digital-asset landscape.`,
      `${firstPoint} ${secondPoint} Together, these details show the practical forces shaping the story and give readers a clearer view beyond the headline.`,
      `${thirdPoint} ${fourthPoint} The immediate impact will depend on execution, market conditions, and whether the teams involved can turn the announcement into durable adoption and measurable results.`,
      quote,
      `For businesses, investors, and users watching this category, the next stage will be defined by evidence rather than momentum alone. Follow-up disclosures, product activity, market data, and regulatory developments will help determine whether this story becomes a lasting trend or a short-term event.`,
    ],
  };
}

/** Long-form content keyed by the exact post slug used by the Blog route. */
export const blogContentBySlug: Record<string, BlogContent> =
  Object.fromEntries(allPosts.map((post) => [post.slug, buildContent(post)]));

export function getBlogContent(id: string): BlogContent | undefined {
  return blogContentBySlug[id];
}
