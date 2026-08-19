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
  source?: PostSource;
};

export const mizuhoBitGo: Post = {
  slug: "mizuho-cuts-bitgo-price-target-clarity-act-delays",
  title: "Mizuho cuts BitGo price target to $11",
  excerpt:
    "Mizuho trimmed its BitGo target to $11 from $14 while keeping an Outperform rating, arguing that a stalled Digital Asset Market Clarity Act quietly widens the custodian's regulatory moat.",
  quickTake: [
    "Mizuho analysts reduced BitGo's price target to $11 from $14, the second downward revision this year for a stock that debuted at $18.",
    'The bank still rates BitGo Outperform, describing it as a "high-growth/recurring revenue business" with a customer base up 27% year over year.',
    "Mizuho projects net revenue falling roughly 20% between 2026 and 2027 on softer trading volumes and asset valuations.",
    "Because BitGo already operates the first federally chartered digital asset trust bank owned by a public company, delays to the Clarity Act may entrench its lead over would-be competitors.",
  ],
  pullQuote: {
    text: "Every quarter the framework stays unsettled, the charter and compliance headstart compounds and the bar for new entrants rises.",
    attribution: "Mizuho analysts, in a research note to clients",
  },
  author: {
    name: "RT Watson",
    role: "Senior Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T19:34:00.000Z",
  category: "markets",
  tags: ["BitGo", "Mizuho", "Clarity Act", "Analyst ratings", "Custody"],
  // Placeholder — add lead artwork and any inline figures here.
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411878/mizuho-cuts-bitgo-price-target-to-11-but-says-clarity-act-delays-could-prove-advantageous",
  },
};

/** Curated picks for the Trending rail. */
export const trendingPosts: Post[] = [mizuhoBitGo];

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
