/**
 * Blog content library.
 *
 * Single source of truth for editorial content: the post shape, the category
 * list, and the curated collections the homepage reads from (`trendingPosts`,
 * `latestPosts`). Components should import from here rather than hardcoding
 * article data.
 */

export type Author = {
  name: string;
  /** Job title as it should be displayed under the byline. */
  role: string;
  /** Outlet or desk the author writes for. */
  publication?: string;
  /** Path under /public. Empty until we have real headshots. */
  avatar?: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
};

/**
 * Every category a post can belong to. `name` is what renders in the nav.
 */
export const categories = [
  {
    slug: "business",
    name: "Business",
    description:
      "Insights, developments, and major stories shaping the business side of crypto.",
  },
  {
    slug: "deals",
    name: "Deals",
    description:
      "Funding rounds, acquisitions, partnerships, and other major crypto deals.",
  },
  {
    slug: "defi",
    name: "DeFi",
    description:
      "The latest developments across decentralized finance protocols.",
  },
  {
    slug: "ecosystems",
    name: "Ecosystems",
    description:
      "News and developments across blockchain networks and its communities.",
  },
  {
    slug: "macro",
    name: "Macro",
    description:
      "How global economic trends, monetary policy, and markets affect crypto.",
  },
  {
    slug: "markets",
    name: "Markets",
    description:
      "Crypto prices, trading activity, market movements, and emerging market trends.",
  },
  {
    slug: "regulations",
    name: "Regulations",
    description:
      "Updates on crypto laws, policies, regulators, and the legal landscape.",
  },
  {
    slug: "web3",
    name: "Web3",
    description:
      "Stories covering Web3, NFTs, decentralized applications, and the future.",
  },
] as const satisfies readonly Category[];

export type CategorySlug = (typeof categories)[number]["slug"];

export type PullQuote = {
  text: string;
  /** Who said it — shown beneath the quote. */
  attribution: string;
};

export type PostSource = {
  name: string;
  url: string;
};

export type Post = {
  slug: string;
  title: string;
  /** One-sentence standfirst shown under the headline. */
  excerpt: string;
  /** Bulleted summary shown in the "Quick Take" box above the article body. */
  quickTake: string[];
  pullQuote?: PullQuote;
  author: Author;
  /** ISO 8601, UTC. */
  publishedAt: string;
  category: CategorySlug;
  tags: string[];
  /**
   * Paths under /public, first entry treated as the lead image.
   * Placeholder for now — fill in once artwork exists.
   */
  images: string[];
  readingTimeMinutes: number;
  content?: string[];
  source?: PostSource;
};

export const trumpDigitalAssetRegulations: Post = {
  slug: "trump-035-crypto-tax-deposit-rule-digital-asset-regulations",
  title: "Trump Introduces 0.35% Crypto Tax Deposit Rule...",
  excerpt:
    "President Donald Trump renewed his push for clearer cryptocurrency regulation while announcing a proposed 0.35% federal tax deposit requirement for qualifying cryptocurrency withdrawals.",
  quickTake: [
    "Qualifying cryptocurrency withdrawals would require a separate deposit equal to 0.35% of the applicable capital-gains amount.",
    "The deposit would be credited toward the taxpayer's federal capital-gains obligation rather than deducted from the cryptocurrency being withdrawn.",
    "Trump urged Congress to advance the CLARITY Act and discussed Hyperliquid and the CFTC.",
    "The proposed mechanism would create a new compliance step for exchanges, platforms, and investors.",
  ],
  pullQuote: {
    text: "Clearer rules for digital assets are essential to maintaining U.S. leadership in financial technology.",
    attribution: "Donald Trump, at the White House meeting",
  },
  author: {
    name: "Crypto Brief Staff",
    role: "White House Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-19T18:00:00.000Z",
  category: "regulations",
  tags: [
    "Donald Trump",
    "Crypto Tax",
    "CLARITY Act",
    "SEC",
    "CFTC",
    "Regulation",
  ],
  images: ["/trump_blog2.jpeg"],
  readingTimeMinutes: 8,
  content: [
    "President Donald Trump renewed his push for clearer cryptocurrency regulation during a White House meeting with cryptocurrency and technology leaders on August 19, 2026, while announcing a new 0.35% federal tax deposit requirement for qualifying cryptocurrency withdrawals.",
    "Under the new framework, eligible IPv4 cryptocurrency withdrawals would require a separate deposit equal to 0.35% of the applicable capital-gains amount. The deposit would be made separately from the cryptocurrency being withdrawn and credited toward the taxpayer’s federal capital-gains tax obligation.",
    "The mechanism is designed to separate the cryptocurrency withdrawal from its associated tax obligation. Rather than automatically deducting the amount from the cryptocurrency being withdrawn, taxpayers would be required to make the applicable deposit separately through the underlying cryptocurrency account before the withdrawal could be cleared under the new rules.",
    "The development comes as Trump urged Congress to advance the CLARITY Act, arguing that clearer rules for digital assets are essential to maintaining U.S. leadership in financial technology and preventing cryptocurrency innovation and businesses from moving overseas.",
    "The CLARITY Act has become a major focus for the cryptocurrency industry because it seeks to establish clearer regulatory boundaries for digital assets and crypto-related businesses. One of the industry’s longstanding concerns has been uncertainty over the respective roles of the Securities and Exchange Commission (SEC) and the Commodity Futures Trading Commission (CFTC).",
    "Greater regulatory clarity could make it easier for cryptocurrency exchanges, trading platforms and blockchain companies to determine which regulations apply to their activities. Supporters of the legislation argue that clearer rules could encourage investment, promote innovation and increase institutional participation in the U.S. digital-asset market.",
    "Trump also discussed developments involving Hyperliquid and the CFTC, highlighting the administration’s interest in bringing major digital-asset activity into a clearer U.S. regulatory framework.",
    "The White House meeting brought together representatives from major cryptocurrency and financial-technology companies, including Coinbase, Kraken, Ripple, Gemini and Robinhood, alongside senior U.S. financial regulators.",
    "The broader message from the meeting was consistent with Trump’s goal of establishing the United States as a leading destination for cryptocurrency and blockchain businesses. His administration has increasingly presented digital assets not simply as a regulatory issue, but as an area where the United States can compete for investment, technological development and financial innovation.",
    "For cryptocurrency investors, the new tax mechanism introduces an additional compliance requirement for qualifying cryptocurrency withdrawals. Exchanges and digital-asset platforms would need to account for the applicable 0.35% federal tax deposit, document the associated capital gains and ensure that the required deposit is completed separately from the cryptocurrency withdrawal.",
    "Investors should therefore closely monitor developments surrounding the CLARITY Act, the SEC, the CFTC and additional guidance on cryptocurrency taxation and withdrawal requirements.",
    "The White House meeting represents another significant development in Washington’s evolving approach to digital assets. By combining new tax-compliance requirements with broader regulatory reforms, the administration is seeking to reshape how digital assets are traded, withdrawn and taxed in the United States while strengthening the country’s position in the global cryptocurrency industry.",
  ],
  source: {
    name: "The Block",
    url: "https://www.theblock.co/news/regulation/2026-08-19-trump-crypto-tax-deposit-rule-digital-asset-regulations",
  },
};

/** Curated picks for the Trending rail. */
export const trendingPosts: Post[] = [trumpDigitalAssetRegulations];

/** Reverse-chronological feed. Empty until more stories are added. */
export const latestPosts: Post[] = [];

/** Every post the site knows about, de-duplicated across collections. */
export const allPosts: Post[] = [
  ...new Map(
    [...trendingPosts, ...latestPosts].map((post) => [post.slug, post]),
  ).values(),
];

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(slug: CategorySlug): Post[] {
  return allPosts.filter((post) => post.category === slug);
}

export function getCategory(slug: CategorySlug): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/** e.g. "August 14, 2026" — stable across server and client rendering. */
export function formatPostDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
