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

blogContentBySlug["trump-signals-stronger-us-support-for-crypto-industry"] = {
  id: "trump-signals-stronger-us-support-for-crypto-industry",
  paragraphs: [
    "President Donald Trump met with leading cryptocurrency executives and U.S. financial regulators Wednesday, highlighting his administration's continued focus on strengthening the digital-asset industry in the United States.",
    "One of the key topics was the CLARITY Act, which Trump urged Congress to advance. He emphasized that clearer cryptocurrency regulations are important for encouraging innovation and ensuring the U.S. remains ahead of China in the rapidly developing digital-asset sector.",
    "Trump also stressed that the United States should remain a global leader in cryptocurrency and blockchain technology, rather than allowing companies and innovation to move overseas because of regulatory uncertainty.",
    "Another notable development involved Hyperliquid. Trump said CFTC Chairman Mike Selig is working toward bringing the platform into the U.S. under a federally regulated framework, a move that could be significant for the broader decentralized-finance industry.",
    "The meeting included representatives from Coinbase, Kraken, Ripple, Gemini and Robinhood, alongside senior U.S. financial regulators. Their participation underscored the administration's effort to bring major industry voices into the regulatory conversation.",
    "For investors and businesses, stronger U.S. support could create a clearer path for exchanges, blockchain companies and decentralized-finance platforms to operate domestically. The next steps will depend on Congress, the CFTC, the SEC and the practical details of any new framework.",
  ],
};

export function getBlogContent(id: string): BlogContent | undefined {
  return blogContentBySlug[id];
}
