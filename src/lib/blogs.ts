/**
 * Blog content library.
 *
 * Single source of truth for editorial content: the post shape, the category
 * list, and the curated collections the homepage reads from (`trendingPosts`,
 * `latestPosts`). Components should import from here rather than hardcoding
 * article data.
 */

import { mizuhoBitGo } from "./hero_blog";

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

// ============================================
// BUSINESS CATEGORY (6 posts)
// ============================================

const coinbaseEarnings: Post = {
  slug: "coinbase-q2-earnings-beat-estimates",
  title: "Coinbase beats Q2 earnings estimates on institutional growth",
  excerpt:
    "Coinbase reported Q2 revenue of $1.6 billion, exceeding analyst expectations of $1.4 billion, driven by a surge in institutional trading volume and staking revenue.",
  quickTake: [
    "Revenue rose 34% year-over-year to $1.6 billion, beating the $1.4 billion consensus estimate.",
    "Institutional trading volume accounted for 72% of total volume, up from 65% in Q1.",
    "Staking revenue grew 45% quarter-over-quarter to $287 million.",
    "The company reported net income of $412 million, or $1.65 per share, compared to $285 million in Q1.",
  ],
  pullQuote: {
    text: "Our institutional business is firing on all cylinders as traditional finance continues to embrace crypto infrastructure.",
    attribution: "Brian Armstrong, CEO of Coinbase",
  },
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T14:30:00.000Z",
  category: "business",
  tags: ["Coinbase", "Earnings", "Institutional", "Revenue", "Crypto Exchange"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412456/coinbase-q2-earnings",
  },
};

const galaxyDigitalExpansion: Post = {
  slug: "galaxy-digital-expands-europe-presence",
  title: "Galaxy Digital expands European presence with London office",
  excerpt:
    "Galaxy Digital has opened a new office in London as part of its strategic expansion across Europe, aiming to capture growing institutional demand.",
  quickTake: [
    "The new London office will serve as Galaxy's European headquarters, complementing existing operations in New York and Hong Kong.",
    "The firm has hired 35 new employees in the region across trading, investment banking, and asset management.",
    "Galaxy reported a 28% increase in European client assets over the past six months.",
    "The expansion comes as the UK government signals a more crypto-friendly regulatory stance.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Europe Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T09:15:00.000Z",
  category: "business",
  tags: ["Galaxy Digital", "Europe", "Expansion", "Institutional", "London"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412234/galaxy-digital-london-office",
  },
};

const fidelityCryptoFunds: Post = {
  slug: "fidelity-sees-3b-inflows-crypto-funds",
  title: "Fidelity sees $3 billion in inflows to crypto funds in July",
  excerpt:
    "Fidelity's crypto investment products attracted $3 billion in net inflows during July, marking the firm's best month since launching its Bitcoin ETF.",
  quickTake: [
    "Year-to-date inflows to Fidelity's crypto products now exceed $12 billion.",
    "The Wise Origin Bitcoin Fund accounted for 65% of total inflows.",
    "Fidelity's Ethereum Index Fund saw a 40% increase in assets under management.",
    "Institutional clients represented 78% of total inflows, according to internal data.",
  ],
  pullQuote: {
    text: "We're seeing a fundamental shift in how institutions view digital assets as a portfolio allocation.",
    attribution: "Jurrien Timmer, Director of Global Macro at Fidelity",
  },
  author: {
    name: "Jessica Miller",
    role: "Asset Management Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T18:45:00.000Z",
  category: "business",
  tags: ["Fidelity", "ETF", "Inflows", "Institutional", "Asset Management"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411987/fidelity-inflows-july",
  },
};

const microsoftBlockchainPartnership: Post = {
  slug: "microsoft-partners-with-consensys-for-enterprise-blockchain",
  title:
    "Microsoft partners with Consensys for enterprise blockchain solutions",
  excerpt:
    "Microsoft and Consensys have announced a strategic partnership to deliver enterprise-grade blockchain solutions on Azure, targeting the financial services sector.",
  quickTake: [
    "The partnership will integrate Consensys' Quorum technology with Microsoft's Azure cloud infrastructure.",
    "Initial focus will be on tokenization of real-world assets and capital markets applications.",
    "Both companies have committed $150 million to joint development efforts over the next three years.",
    "The solution will support Ethereum, Polygon, and several other EVM-compatible chains.",
  ],
  author: {
    name: "David Park",
    role: "Enterprise Technology Editor",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T12:00:00.000Z",
  category: "business",
  tags: ["Microsoft", "Consensys", "Azure", "Enterprise", "Tokenization"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411567/microsoft-consensys-partnership",
  },
};

const bitgoIpoUpdate: Post = {
  slug: "bitgo-ipo-valuation-cuts-mizuho-analysts",
  title: "BitGo IPO valuation faces cuts as market adjusts",
  excerpt:
    "Analysts at Mizuho have reduced BitGo's price target to $11 from $14, marking the second downward revision for the crypto custodian's public debut.",
  quickTake: [
    "The revised target represents a 38% discount from BitGo's initial public offering price of $18.",
    "Trading volumes have declined 22% since the company's market debut in March.",
    "Despite the cuts, analysts maintained an Outperform rating on the stock.",
    "BitGo's customer base has grown 27% year-over-year, according to company filings.",
  ],
  pullQuote: {
    text: "The current market conditions don't reflect the fundamental strength of BitGo's custody business model.",
    attribution: "Mizuho analysts, in a research note",
  },
  author: {
    name: "RT Watson",
    role: "Senior Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T19:34:00.000Z",
  category: "business",
  tags: ["BitGo", "IPO", "Mizuho", "Custody", "Analyst Ratings"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411878/mizuho-cuts-bitgo-target",
  },
};

const goldmanSachsCryptoDesk: Post = {
  slug: "goldman-sachs-expands-crypto-derivatives-desk",
  title: "Goldman Sachs expands crypto derivatives desk amid client demand",
  excerpt:
    "Goldman Sachs is expanding its cryptocurrency derivatives desk to meet growing institutional demand for options and futures products.",
  quickTake: [
    "The bank has doubled its crypto trading staff to 45 professionals across New York, London, and Hong Kong.",
    "Trading volumes on Goldman's crypto derivatives desk have increased 180% year-to-date.",
    "The expansion includes new product offerings in Bitcoin, Ethereum, and Solana options.",
    "Goldman now offers 24/7 trading coverage to accommodate the always-on crypto market.",
  ],
  author: {
    name: "Emily Rodriguez",
    role: "Wall Street Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T15:20:00.000Z",
  category: "business",
  tags: ["Goldman Sachs", "Derivatives", "Institutional", "Trading", "Options"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/goldman-sachs-crypto-derivatives",
  },
};

// ============================================
// DEALS CATEGORY (6 posts)
// ============================================

const chainlinkAcquisition: Post = {
  slug: "chainlink-acquires-oracle-provider-for-800m",
  title: "Chainlink acquires oracle provider for $800 million",
  excerpt:
    "Chainlink Labs has announced the acquisition of a leading oracle infrastructure provider for $800 million in a cash and stock deal.",
  quickTake: [
    "The acquisition expands Chainlink's market share in the decentralized oracle space to approximately 65%.",
    "The deal includes 150 new employees and technology infrastructure across 12 countries.",
    "The combined entity will process an estimated $15 billion in smart contract value annually.",
    "The acquisition is expected to close in Q4 2026, pending regulatory approvals.",
  ],
  pullQuote: {
    text: "This acquisition accelerates our vision of connecting the world's data to blockchain networks.",
    attribution: "Sergey Nazarov, Co-founder of Chainlink",
  },
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T11:00:00.000Z",
  category: "deals",
  tags: ["Chainlink", "Oracle", "Acquisition", "M&A", "Data"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412512/chainlink-acquisition",
  },
};

const a16zDeFiFund: Post = {
  slug: "a16z-launches-2b-defi-fund",
  title: "a16z launches $2 billion DeFi-focused fund",
  excerpt:
    "Andreessen Horowitz has raised a $2 billion fund dedicated to decentralized finance investments, marking one of the largest venture funds in crypto.",
  quickTake: [
    "The fund is a16z's fourth dedicated crypto fund, bringing total crypto assets under management to $12.4 billion.",
    "The fund will focus on DeFi protocols, infrastructure, and Web3 applications.",
    "75% of the fund is allocated to equity investments, while 25% will be deployed in liquid tokens.",
    "The fund has already secured commitments from major institutional limited partners.",
  ],
  author: {
    name: "Jessica Miller",
    role: "Asset Management Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T13:30:00.000Z",
  category: "deals",
  tags: ["a16z", "Fundraising", "Venture Capital", "DeFi", "Investments"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412345/a16z-defi-fund",
  },
};

const stripeBridgeAcquisition: Post = {
  slug: "stripe-acquires-bridge-for-1b",
  title: "Stripe acquires Bridge for $1 billion in crypto payments push",
  excerpt:
    "Stripe has acquired Bridge, a leading stablecoin payments platform, for $1 billion as the payments giant deepens its crypto integration.",
  quickTake: [
    "The acquisition is Stripe's largest in its history and marks a major bet on cryptocurrency payments.",
    "Bridge's infrastructure processes over $5 billion in annual payment volume.",
    "Stripe plans to integrate Bridge's technology into its existing payments stack for global merchants.",
    "The deal includes Bridge's 200-person team and operations across 15 countries.",
  ],
  pullQuote: {
    text: "Crypto payments are the future of global commerce, and Bridge has built the best infrastructure for that future.",
    attribution: "Patrick Collison, CEO of Stripe",
  },
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T16:45:00.000Z",
  category: "deals",
  tags: ["Stripe", "Bridge", "Acquisition", "Payments", "Stablecoins"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/stripe-bridge-acquisition",
  },
};

const uniswapVentureRound: Post = {
  slug: "uniswap-raises-500m-venture-round",
  title: "Uniswap Labs raises $500 million in venture capital round",
  excerpt:
    "Uniswap Labs has raised $500 million in a Series D funding round led by Paradigm and Polychain Capital.",
  quickTake: [
    "The round values Uniswap Labs at $15 billion post-money.",
    "The funding will be used to develop Uniswap v5 and expand the team to 350 employees.",
    "New investors include Fidelity Investments and the Qatar Investment Authority.",
    "Uniswap's treasury now exceeds $3 billion in total assets under management.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T10:15:00.000Z",
  category: "deals",
  tags: ["Uniswap", "Funding", "Paradigm", "Polychain", "Venture"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411567/uniswap-series-d",
  },
};

const circleIPOPlans: Post = {
  slug: "circle-confirms-ipo-plans-for-2027",
  title: "Circle confirms IPO plans for 2027, hires banks",
  excerpt:
    "Circle, the issuer of the USDC stablecoin, has confirmed plans for an initial public offering in 2027 and has hired investment banks to lead the process.",
  quickTake: [
    "Circle has selected Goldman Sachs, Morgan Stanley, and JPMorgan Chase as lead underwriters.",
    "The IPO could value the company at over $25 billion, according to sources.",
    "Circle reported revenues of $2.8 billion in 2025, up 45% from the previous year.",
    "USDC circulation has grown to over $80 billion, second only to USDT.",
  ],
  author: {
    name: "Emily Rodriguez",
    role: "Wall Street Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T14:00:00.000Z",
  category: "deals",
  tags: ["Circle", "IPO", "USDC", "Stablecoins", "Public Offering"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/circle-ipo-2027",
  },
};

const panteraLiquidityFund: Post = {
  slug: "pantera-raises-350m-liquidity-fund",
  title: "Pantera Capital raises $350 million for crypto liquidity fund",
  excerpt:
    "Pantera Capital has raised $350 million for a new fund focused on providing liquidity to institutional crypto markets.",
  quickTake: [
    "The fund targets a 25% annual return through market-making and structured credit strategies.",
    "Pantera's total crypto assets under management now exceed $6.5 billion.",
    "The fund has already deployed 40% of its capital in Q3 2026.",
    "Limited partners include university endowments and pension funds.",
  ],
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T09:30:00.000Z",
  category: "deals",
  tags: ["Pantera Capital", "Liquidity", "Fundraising", "Institutional"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/pantera-liquidity-fund",
  },
};

// ============================================
// DEFI CATEGORY (6 posts)
// ============================================

const aaveV4Launch: Post = {
  slug: "aave-v4-launches-on-ethereum-mainnet",
  title: "Aave v4 launches on Ethereum mainnet with new features",
  excerpt:
    "Aave has deployed version 4 of its lending protocol on the Ethereum mainnet, introducing new features aimed at improving efficiency and reducing fees.",
  quickTake: [
    "The upgrade reduces gas costs by an average of 25% for protocol interactions.",
    "New features include dynamic interest rates and improved collateral management.",
    "Aave v4 has been in development for 18 months and includes community-driven proposals.",
    "Total value locked on Aave protocols across all chains now exceeds $15 billion.",
  ],
  pullQuote: {
    text: "Aave v4 represents a fundamental step forward in decentralized lending infrastructure.",
    attribution: "Stani Kulechov, Founder of Aave",
  },
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T08:00:00.000Z",
  category: "defi",
  tags: ["Aave", "DeFi", "Lending", "Ethereum", "Upgrade"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412567/aave-v4-launch",
  },
};

const curveFinanceRecovery: Post = {
  slug: "curve-finance-recovery-plan-approved",
  title: "Curve Finance recovery plan approved by token holders",
  excerpt:
    "Curve Finance token holders have approved a comprehensive recovery plan following the protocol's recent security incident.",
  quickTake: [
    "The plan includes a token buyback program valued at $100 million over 12 months.",
    "A new security committee has been established to oversee smart contract audits.",
    "The protocol has allocated $50 million for bug bounties and vulnerability research.",
    "Total value locked on Curve has recovered to $12 billion from a low of $8 billion.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T16:30:00.000Z",
  category: "defi",
  tags: ["Curve Finance", "DeFi", "Recovery", "Governance", "Security"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412456/curve-recovery-plan",
  },
};

const morphoLendingVolume: Post = {
  slug: "morpho-lending-volume-surpasses-1b",
  title: "Morpho lending volume surpasses $1 billion in monthly trades",
  excerpt:
    "Morpho, the DeFi lending protocol, has surpassed $1 billion in monthly lending volume for the first time.",
  quickTake: [
    "Monthly lending volume reached $1.2 billion in July, up 40% from June.",
    "The protocol's market share in the DeFi lending space has grown to 22%.",
    "Morpho now supports 15 different assets across Ethereum and Arbitrum.",
    "The protocol's revenue model generated $8 million in fees during the month.",
  ],
  author: {
    name: "Jessica Miller",
    role: "DeFi Analyst",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T12:45:00.000Z",
  category: "defi",
  tags: ["Morpho", "DeFi", "Lending", "Volume", "Growth"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/morpho-volume",
  },
};

const skyUSDSIntegration: Post = {
  slug: "sky-usds-integration-top-defi-protocols",
  title: "Sky's USDS stablecoin integrates with top DeFi protocols",
  excerpt:
    "Sky's USDS stablecoin has been integrated by Aave, Compound, and Uniswap, boosting its presence across decentralized finance.",
  quickTake: [
    "USDS now has over $5 billion in total value locked across its various integrations.",
    "The stablecoin offers a 5.5% annual yield through Sky's savings rate protocol.",
    "Aave and Compound have added USDS as a collateral asset on their platforms.",
    "Uniswap now features four USDS trading pairs with deep liquidity pools.",
  ],
  author: {
    name: "David Park",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T14:00:00.000Z",
  category: "defi",
  tags: ["Sky", "USDS", "Stablecoins", "DeFi", "Integration"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/usds-defi-integrations",
  },
};

const pendleYieldSurge: Post = {
  slug: "pendle-yield-trading-surges-300-percent",
  title: "Pendle yield trading surges 300% following rate cuts",
  excerpt:
    "Pendle, the yield trading protocol, has seen volumes surge 300% following recent interest rate cuts by the Federal Reserve.",
  quickTake: [
    "Weekly trading volumes on Pendle reached $2.4 billion in the past seven days.",
    "The protocol's native token PENDLE has rallied 65% in the same period.",
    "New fixed-rate yield products have attracted institutional interest.",
    "Pendle now holds a 28% market share of the yield trading sector.",
  ],
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T10:00:00.000Z",
  category: "defi",
  tags: ["Pendle", "Yield", "Trading", "Rates", "DeFi"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/pendle-yield-surge",
  },
};

const lidoStakingRewards: Post = {
  slug: "lido-rewards-double-to-500m",
  title: "Lido staking rewards double to $500 million in Q2",
  excerpt:
    "Lido, the largest liquid staking protocol, distributed $500 million in staking rewards to users in the second quarter of 2026.",
  quickTake: [
    "Total staked assets on Lido reached $35 billion, up from $28 billion in Q1.",
    "ETH staking represented 72% of total rewards, with SOL and DOT making up the remainder.",
    "The protocol processed over $2 billion in staking-related transactions.",
    "Lido's governance token LDO has outperformed the broader market by 45%.",
  ],
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T11:30:00.000Z",
  category: "defi",
  tags: ["Lido", "Staking", "Rewards", "ETH", "Liquid Staking"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/lido-rewards-q2",
  },
};

// ============================================
// ECOSYSTEMS CATEGORY (6 posts)
// ============================================

const ethereumDencunImpact: Post = {
  slug: "ethereum-dencun-upgrade-six-month-impact",
  title: "Ethereum Dencun upgrade: six months of lower fees and L2 growth",
  excerpt:
    "Six months after the Dencun upgrade, Ethereum has seen a dramatic reduction in fees and significant growth in Layer 2 adoption.",
  quickTake: [
    "Average transaction fees have dropped 80% since the Dencun upgrade in March.",
    "Layer 2 transaction volume has increased 340%, processing over 100 million transactions per month.",
    "Ethereum staking participation has grown to 32% of total supply.",
    "The upgrade has reduced the network's annualized inflation rate to 0.2%.",
  ],
  pullQuote: {
    text: "Dencun has delivered on its promise of making Ethereum more accessible and efficient.",
    attribution: "Vitalik Buterin, Co-founder of Ethereum",
  },
  author: {
    name: "David Park",
    role: "Technology Editor",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T15:00:00.000Z",
  category: "ecosystems",
  tags: ["Ethereum", "Dencun", "Layer 2", "Fees", "Scaling"],
  images: [],
  readingTimeMinutes: 5,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412678/ethereum-dencun-impact",
  },
};

const solanaNetworkActivity: Post = {
  slug: "solana-network-activity-hits-all-time-high",
  title: "Solana network activity hits all-time high in August",
  excerpt:
    "Solana's network activity has reached record levels with daily active addresses and transaction volumes surpassing all previous metrics.",
  quickTake: [
    "Daily active addresses exceeded 2.5 million, up 45% from the previous month.",
    "Transaction fees generated reached $12 million per day, the highest ever.",
    "Solana's development activity ranks first among all blockchain networks.",
    "The network's validator count has grown to 2,800 independent validators.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T17:30:00.000Z",
  category: "ecosystems",
  tags: ["Solana", "Activity", "Transactions", "Growth", "Adoption"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412345/solana-activity-high",
  },
};

const polygonZKEVMExpansion: Post = {
  slug: "polygon-zkevm-expands-layer-2-ecosystem",
  title: "Polygon zkEVM expands Layer 2 ecosystem with new partners",
  excerpt:
    "Polygon zkEVM has added 15 new projects to its ecosystem as the Layer 2 solution continues to gain traction among developers.",
  quickTake: [
    "The new projects span DeFi, gaming, and NFT verticals.",
    "Polygon zkEVM now hosts over 250 active applications.",
    "Total value locked on Polygon zkEVM has crossed $5 billion.",
    "Developer activity has grown 85% year-over-year on the zkEVM chain.",
  ],
  author: {
    name: "Alex Rivera",
    role: "Ecosystem Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T14:30:00.000Z",
  category: "ecosystems",
  tags: ["Polygon", "zkEVM", "Layer 2", "Ecosystem", "Developers"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/polygon-zkevm-expansion",
  },
};

const avalancheSubnetsLaunch: Post = {
  slug: "avalanche-subnets-see-parabolic-growth",
  title: "Avalanche subnets see parabolic growth with 50 new launches",
  excerpt:
    "Avalanche has seen a surge in subnet launches, with 50 new subnets deployed in the past 30 days.",
  quickTake: [
    "Total subnets on Avalanche now exceed 200, up from 150 in July.",
    "The subnets support applications across gaming, enterprise, and DeFi sectors.",
    "Daily transaction volume on Avalanche subnets increased 120%.",
    "Avalanche's native token AVAX has benefited from the increased network activity.",
  ],
  author: {
    name: "Jessica Miller",
    role: "DeFi Analyst",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T09:45:00.000Z",
  category: "ecosystems",
  tags: ["Avalanche", "Subnets", "Growth", "Ecosystem", "Scaling"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/avalanche-subnets",
  },
};

const arbitrumMilestone: Post = {
  slug: "arbitrum-milestone-100m-transactions",
  title: "Arbitrum reaches 100 million transactions since launch",
  excerpt:
    "Arbitrum, one of the largest Layer 2 networks, has processed over 100 million transactions since its mainnet launch in 2021.",
  quickTake: [
    "The network processes an average of 1.2 million transactions per day.",
    "Arbitrum accounts for 45% of all Layer 2 transaction volume.",
    "Total value locked on Arbitrum has surpassed $10 billion.",
    "The ecosystem now includes over 500 active decentralized applications.",
  ],
  author: {
    name: "David Park",
    role: "Technology Editor",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T12:00:00.000Z",
  category: "ecosystems",
  tags: ["Arbitrum", "Layer 2", "Milestone", "Transactions", "Ethereum"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/arbitrum-milestone",
  },
};

const optimismDeveloperGrowth: Post = {
  slug: "optimism-developer-activity-up-200-percent",
  title: "Optimism developer activity up 200% following Bedrock upgrade",
  excerpt:
    "Optimism has seen developer activity surge 200% following the Bedrock upgrade, positioning it as one of the fastest-growing Layer 2 networks.",
  quickTake: [
    "The Bedrock upgrade reduced transaction fees by 40% and improved finality times.",
    "Active developers on Optimism have grown to 2,500, up from 833 pre-upgrade.",
    "The network now processes 500,000 daily active addresses.",
    "Optimism's share of total Layer 2 value locked has grown to 28%.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T13:00:00.000Z",
  category: "ecosystems",
  tags: ["Optimism", "Bedrock", "Developers", "Layer 2", "Growth"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/optimism-developer-growth",
  },
};

// ============================================
// MACRO CATEGORY (6 posts)
// ============================================

const fedRateCutsCrypto: Post = {
  slug: "fed-rate-cuts-signal-new-phase-for-crypto",
  title: "Fed rate cuts signal new phase for crypto markets",
  excerpt:
    "The Federal Reserve's recent rate cuts have created a favorable environment for crypto markets, with analysts predicting increased capital flows.",
  quickTake: [
    "The Fed reduced rates by 50 basis points to a target range of 3.5% to 3.75%.",
    "Crypto markets have historically outperformed following rate cuts, with an average 45% return in the following 12 months.",
    "Institutional fund flows into crypto products increased 65% after the announcement.",
    "The yield curve is now indicating a normalization of monetary policy, benefiting risk assets.",
  ],
  pullQuote: {
    text: "Lower rates are a tailwind for all risk assets, and crypto is no exception.",
    attribution: "JPMorgan analysts, in a research note",
  },
  author: {
    name: "Emily Rodriguez",
    role: "Macro Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T18:00:00.000Z",
  category: "macro",
  tags: ["Fed", "Rate Cuts", "Monetary Policy", "Macro", "Institutional"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412789/fed-rate-cuts-crypto",
  },
};

const gdpGrowthCryptoCorrelation: Post = {
  slug: "gdp-growth-correlation-with-crypto-strengthens",
  title: "GDP growth correlation with crypto strengthens, data shows",
  excerpt:
    "New data shows a strengthening correlation between global GDP growth and cryptocurrency market performance, suggesting deeper integration.",
  quickTake: [
    "The correlation coefficient between GDP growth and crypto market cap has increased from 0.45 to 0.65 over the past two years.",
    "Emerging markets, particularly in Asia and Latin America, show the strongest correlations.",
    "Crypto adoption rates mirror GDP growth patterns in 15 of 20 major economies.",
    "Analysts suggest this correlation reflects crypto's maturation as an asset class.",
  ],
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T10:30:00.000Z",
  category: "macro",
  tags: ["GDP", "Correlation", "Macro", "Adoption", "Economic Growth"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412345/gdp-crypto-correlation",
  },
};

const inflationHedgeNarrative: Post = {
  slug: "crypto-inflation-hedge-narrative-shifts",
  title: "Crypto's inflation hedge narrative shifts amid new data",
  excerpt:
    "Recent data is reshaping the narrative around crypto as an inflation hedge as Bitcoin shows increasingly complex relationships with inflation metrics.",
  quickTake: [
    "Bitcoin's correlation with inflation expectations has fallen to 0.15 from 0.55 in 2024.",
    "Ethereum shows a stronger correlation with productivity metrics than inflation.",
    "Stablecoin adoption is now more closely tied to emerging market inflation rates.",
    "Analysts suggest crypto's inflation hedging properties vary significantly across assets.",
  ],
  author: {
    name: "David Park",
    role: "Macro Analyst",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T15:15:00.000Z",
  category: "macro",
  tags: ["Inflation", "Hedge", "Bitcoin", "Macro", "Analysis"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/inflation-hedge-narrative",
  },
};

const usDollarCryptoCorrelation: Post = {
  slug: "dollar-weakening-crypto-correlation-strengthens",
  title: "US dollar weakening strengthens correlation with crypto",
  excerpt:
    "The weakening US dollar has strengthened its correlation with cryptocurrency markets, particularly Bitcoin and Ethereum.",
  quickTake: [
    "The inverse correlation between the DXY and Bitcoin has reached -0.72.",
    "Ethereum shows a correlation of -0.65 with the DXY, up from -0.45 in January.",
    "The correlation is strongest among Asian trading sessions.",
    "Analysts predict continued dollar weakness could drive further crypto appreciation.",
  ],
  author: {
    name: "Emily Rodriguez",
    role: "Macro Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T11:30:00.000Z",
  category: "macro",
  tags: ["DXY", "Dollar", "Correlation", "Macro", "Currency"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/dollar-crypto-correlation",
  },
};

const institutionalPortfolioAllocation: Post = {
  slug: "institutional-crypto-allocation-doubles-to-8-percent",
  title: "Institutional crypto allocation doubles to 8% of portfolios",
  excerpt:
    "Institutional investors have doubled their average allocation to cryptocurrency to 8% of total portfolio assets.",
  quickTake: [
    "The allocation has increased from 4% in 2025 to 8% in Q3 2026.",
    "Hedge funds lead with an average allocation of 12%, followed by pension funds at 6%.",
    "The strongest growth is in European and Asian institutional markets.",
    "Allocations are expected to reach 12% by 2028 according to a survey of 200 institutions.",
  ],
  author: {
    name: "Jessica Miller",
    role: "Asset Management Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T14:00:00.000Z",
  category: "macro",
  tags: ["Institutional", "Allocation", "Portfolio", "Adoption", "Assets"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/institutional-allocation",
  },
};

const employmentDataCryptoImpact: Post = {
  slug: "employment-data-impact-on-crypto-markets",
  title: "Employment data shows surprising impact on crypto markets",
  excerpt:
    "Latest employment data is showing an unexpectedly strong correlation with cryptocurrency market movements, particularly in the 24 hours following releases.",
  quickTake: [
    "Crypto markets see average moves of 2.5% in the 24 hours following NFP releases.",
    "The correlation is strongest during non-US trading hours.",
    "Employment data volatility now rivals traditional macro events in importance for crypto traders.",
    "The effect is most pronounced on Bitcoin and Ethereum.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T16:45:00.000Z",
  category: "macro",
  tags: ["Employment", "NFP", "Macro", "Data", "Trading"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/employment-crypto-impact",
  },
};

// ============================================
// MARKETS CATEGORY (6 posts)
// ============================================

const btcBreaksResistance: Post = {
  slug: "bitcoin-breaks-resistance-above-150k",
  title: "Bitcoin breaks resistance, surges above $150,000",
  excerpt:
    "Bitcoin has surged above $150,000 for the first time, breaking through a key resistance level that has held for months.",
  quickTake: [
    "Bitcoin is up 12% in the past 24 hours, reaching a new all-time high of $152,400.",
    "The move was driven by institutional buying and favorable regulatory news.",
    "Open interest in Bitcoin derivatives has increased 25% following the breakout.",
    "Analysts see the next resistance level at $165,000.",
  ],
  pullQuote: {
    text: "The technical breakout confirms the strength of the ongoing bull market.",
    attribution: "Markets analyst, The Block",
  },
  author: {
    name: "Michael Thompson",
    role: "Markets Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T16:30:00.000Z",
  category: "markets",
  tags: ["Bitcoin", "Price", "ATH", "Breakout", "Trading"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412789/bitcoin-150k-breakout",
  },
};

const ethGasFeesAnalysis: Post = {
  slug: "ethereum-gas-fees-reach-6-month-low",
  title: "Ethereum gas fees reach 6-month low after L2 migration",
  excerpt:
    "Ethereum gas fees have fallen to their lowest level in six months as activity migrates to Layer 2 solutions.",
  quickTake: [
    "Average gas fees have dropped to 8 gwei, down 75% from peak in February.",
    "Ethereum Layer 2 networks now process 2x more transactions than the mainnet.",
    "Reduced fees have made Ethereum more accessible for retail users.",
    "Network utilization is at 18%, down from 35% in Q1 2026.",
  ],
  author: {
    name: "David Park",
    role: "Technology Editor",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T13:00:00.000Z",
  category: "markets",
  tags: ["Ethereum", "Gas Fees", "Layer 2", "Network", "Trading"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412345/ethereum-gas-fees-low",
  },
};

const altcoinSeasonAnalysis: Post = {
  slug: "altcoin-season-begins-btc-dominance-falls",
  title: "Altcoin season begins as Bitcoin dominance falls below 45%",
  excerpt:
    "Analysts are calling a new altcoin season as Bitcoin dominance drops below 45% for the first time since 2024.",
  quickTake: [
    "Bitcoin dominance has fallen to 43.5%, down from 52% in June.",
    "Top altcoins have outperformed Bitcoin by an average of 35% in the past month.",
    "Ethereum, Solana, and Cardano lead the charge with double-digit gains.",
    "Altcoin market capitalization has increased to $1.2 trillion, up 28%.",
  ],
  author: {
    name: "Jessica Miller",
    role: "DeFi Analyst",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T11:15:00.000Z",
  category: "markets",
  tags: ["Altcoins", "BTC Dominance", "Crypto Markets", "Trading", "Analysis"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/altcoin-season",
  },
};

const cryptoDerivativesVolume: Post = {
  slug: "crypto-derivatives-volume-hits-200b-daily",
  title: "Crypto derivatives volume hits $200 billion daily average",
  excerpt:
    "The crypto derivatives market has reached a new milestone, with daily trading volumes averaging $200 billion.",
  quickTake: [
    "Volume has increased 45% year-over-year, driven by institutional participation.",
    "Options trading now accounts for 30% of total derivatives volume.",
    "Bitcoin futures lead with $80 billion in daily volume.",
    "The growth is attributed to increased sophistication in crypto derivatives products.",
  ],
  author: {
    name: "Emily Rodriguez",
    role: "Wall Street Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T15:30:00.000Z",
  category: "markets",
  tags: ["Derivatives", "Volume", "Futures", "Options", "Trading"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/derivatives-volume-milestone",
  },
};

const stablecoinMarketCap: Post = {
  slug: "stablecoin-market-cap-surpasses-300b",
  title: "Stablecoin market cap surpasses $300 billion for first time",
  excerpt:
    "The total market capitalization of stablecoins has surpassed $300 billion, reflecting growing demand for digital dollars.",
  quickTake: [
    "USDT leads with $120 billion market cap, up 15% year-over-year.",
    "USDC ranks second at $85 billion, showing 25% growth in 2026.",
    "New stablecoin entrants have captured 25% of the market.",
    "Trading volume for stablecoins accounts for 65% of all crypto trading volume.",
  ],
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T09:00:00.000Z",
  category: "markets",
  tags: ["Stablecoins", "Market Cap", "USDT", "USDC", "Trading"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/stablecoin-market-cap",
  },
};

const cryptoEthereumETFFlows: Post = {
  slug: "crypto-etf-flows-hit-record-5b-weekly",
  title: "Crypto ETF flows hit record $5 billion in weekly inflows",
  excerpt:
    "Global crypto exchange-traded funds have recorded a record $5 billion in weekly net inflows.",
  quickTake: [
    "US-listed ETFs accounted for 65% of total inflows at $3.25 billion.",
    "Bitcoin ETFs led with $3.5 billion in net inflows.",
    "Ethereum ETFs have seen $1.2 billion in inflows, a new weekly record.",
    "International ETFs in Europe and Asia contributed $1.5 billion.",
  ],
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T12:15:00.000Z",
  category: "markets",
  tags: ["ETF", "Inflows", "Bitcoin ETF", "Ethereum ETF", "Institutional"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/etf-flows-record",
  },
};

// ============================================
// REGULATIONS CATEGORY (6 posts)
// ============================================

const clarityActUpdate: Post = {
  slug: "clarity-act-advances-in-senate-committee",
  title: "Digital Asset Market Clarity Act advances in Senate committee",
  excerpt:
    "The Digital Asset Market Clarity Act has advanced through the Senate Banking Committee, bringing it closer to a full Senate vote.",
  quickTake: [
    "The bill passed the committee with a bipartisan vote of 14-12.",
    "The legislation establishes a comprehensive regulatory framework for digital assets.",
    "The crypto industry has praised the bill while consumer advocates express concerns.",
    "A full Senate vote is expected in September, with House consideration to follow.",
  ],
  pullQuote: {
    text: "This bill provides the regulatory clarity that the crypto industry desperately needs.",
    attribution: "Senator Cynthia Lummis, Co-sponsor of the bill",
  },
  author: {
    name: "Michael Thompson",
    role: "Regulatory Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T14:00:00.000Z",
  category: "regulations",
  tags: ["Clarity Act", "Senate", "Regulation", "Legislation", "Policy"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412678/clarity-act-senate",
  },
};

const secStakingRules: Post = {
  slug: "sec-proposes-new-staking-rules",
  title: "SEC proposes new staking rules for proof-of-stake networks",
  excerpt:
    "The Securities and Exchange Commission has proposed new rules governing staking in proof-of-stake blockchain networks.",
  quickTake: [
    "The rules require enhanced disclosure for staking services and protocols.",
    "Staking providers must register as investment advisers under the proposal.",
    "The regulations aim to address investor protection concerns in the staking market.",
    "The comment period is open for 90 days, with final rules expected in 2027.",
  ],
  author: {
    name: "Emily Rodriguez",
    role: "Wall Street Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T19:00:00.000Z",
  category: "regulations",
  tags: ["SEC", "Staking", "Regulation", "Proof-of-Stake", "Policy"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412456/sec-staking-rules",
  },
};

const europeMiCAImplementation: Post = {
  slug: "europe-mica-implementation-enters-phase-2",
  title: "Europe's MiCA implementation enters Phase 2 for stablecoins",
  excerpt:
    "The European Union's Markets in Crypto Assets regulation has entered its second phase, focusing specifically on stablecoin oversight.",
  quickTake: [
    "Phase 2 of MiCA introduces stricter requirements for stablecoin reserves and transparency.",
    "Issuers must maintain reserves at a 1:1 ratio with fiat currencies.",
    "The regulations require quarterly audits of stablecoin reserve holdings.",
    "Non-compliant stablecoin issuers could face fines of up to 10% of annual revenue.",
  ],
  author: {
    name: "Sarah Chen",
    role: "Senior Financial Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T16:00:00.000Z",
  category: "regulations",
  tags: ["MiCA", "Europe", "Stablecoins", "Regulation", "Policy"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/mica-phase-2",
  },
};

const asiaCryptoRegulation: Post = {
  slug: "asia-crypto-regulatory-framework-hk-singapore",
  title: "Hong Kong and Singapore unveil unified crypto regulatory framework",
  excerpt:
    "Hong Kong and Singapore have jointly unveiled a unified regulatory framework for digital assets, signaling a new era of cooperation.",
  quickTake: [
    "The framework establishes common licensing requirements for crypto exchanges.",
    "Both jurisdictions have committed to mutual recognition of licenses.",
    "The framework includes consumer protection and anti-money laundering provisions.",
    "The initiative could serve as a model for other Asian jurisdictions.",
  ],
  author: {
    name: "Jessica Miller",
    role: "Asia Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T08:30:00.000Z",
  category: "regulations",
  tags: ["Hong Kong", "Singapore", "Regulation", "Asia", "Policy"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/asia-crypto-regulation",
  },
};

const fincenCryptoReporting: Post = {
  slug: "fincen-proposes-crypto-reporting-requirements",
  title: "FinCEN proposes new crypto reporting requirements for businesses",
  excerpt:
    "The Financial Crimes Enforcement Network has proposed new reporting requirements for crypto businesses handling transactions over $10,000.",
  quickTake: [
    "The proposal aligns crypto reporting with traditional banking requirements.",
    "Businesses must report transactions exceeding $10,000 within 15 days.",
    "The regulations aim to address money laundering concerns in the crypto ecosystem.",
    "The crypto industry has raised privacy concerns regarding the proposal.",
  ],
  author: {
    name: "David Park",
    role: "Policy Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T18:30:00.000Z",
  category: "regulations",
  tags: ["FinCEN", "Reporting", "AML", "Regulation", "Policy"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/fincen-reporting-proposal",
  },
};

const globalCryptoCompliance: Post = {
  slug: "global-crypto-compliance-costs-rise-30-percent",
  title: "Global crypto compliance costs rise 30% amid regulatory push",
  excerpt:
    "Crypto businesses worldwide are facing 30% higher compliance costs as regulatory requirements continue to expand.",
  quickTake: [
    "Average annual compliance costs have reached $2.5 million per crypto business.",
    "The increase is driven by the expansion of AML/KYC requirements across jurisdictions.",
    "Smaller crypto businesses are disproportionately affected by the cost increases.",
    "The industry is consolidating as larger firms can absorb compliance costs more easily.",
  ],
  author: {
    name: "Alex Rivera",
    role: "Compliance Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T10:00:00.000Z",
  category: "regulations",
  tags: ["Compliance", "Costs", "Regulation", "AML", "KYC"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/compliance-costs-rise",
  },
};

// ============================================
// WEB3 CATEGORY (6 posts)
// ============================================

const nftMarketResurgence: Post = {
  slug: "nft-market-sees-resurgence-with-1b-monthly-volume",
  title: "NFT market sees resurgence with $1 billion monthly volume",
  excerpt:
    "The NFT market has bounced back with $1 billion in monthly trading volume, the highest level since 2024.",
  quickTake: [
    "Volume has increased 65% from the previous month, driven by new utility-focused collections.",
    "Average NFT prices have risen 40% across all categories.",
    "New use cases in ticketing and real estate are driving adoption.",
    "The resurgence has attracted 200,000 new wallets to the NFT ecosystem.",
  ],
  pullQuote: {
    text: "The second wave of NFTs is about utility, not speculation.",
    attribution: "Market analyst, The Block",
  },
  author: {
    name: "David Park",
    role: "Web3 Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T17:00:00.000Z",
  category: "web3",
  tags: ["NFT", "Volume", "Resurgence", "Utility", "Digital Collectibles"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412789/nft-market-resurgence",
  },
};

const gamificationWeb3Gaming: Post = {
  slug: "web3-gaming-active-users-doubles-to-5m",
  title: "Web3 gaming active users doubles to 5 million",
  excerpt:
    "Monthly active users in Web3 gaming have doubled to 5 million, signaling a significant shift in the gaming industry.",
  quickTake: [
    "User growth is concentrated in play-to-earn models that have adapted to sustainable economies.",
    "Top games see 500,000 daily active users on average.",
    "Web3 games have generated $250 million in revenue in July, up 80% from June.",
    "The gaming sector now accounts for 15% of all blockchain activity.",
  ],
  author: {
    name: "Michael Thompson",
    role: "Gaming Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T16:00:00.000Z",
  category: "web3",
  tags: ["Web3", "Gaming", "Active Users", "Play-to-Earn", "Adoption"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412456/web3-gaming-users",
  },
};

const decentralIDAdoption: Post = {
  slug: "decentralized-identity-adoption-surges-300-percent",
  title: "Decentralized identity adoption surges 300%",
  excerpt:
    "The adoption of decentralized identity solutions has surged 300% in 2026, driven by privacy concerns and new use cases.",
  quickTake: [
    "Over 45 million users now have decentralized identities (DIDs), up from 15 million in 2025.",
    "Enterprise adoption has tripled, with 500 companies now supporting DID standards.",
    "Government applications in Finland and Estonia are piloting DID for citizen services.",
    "The market for decentralized identity is projected to reach $5 billion by 2028.",
  ],
  author: {
    name: "Sarah Chen",
    role: "Identity Technology Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T13:15:00.000Z",
  category: "web3",
  tags: ["DID", "Identity", "Privacy", "Web3", "Adoption"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/decentralized-identity",
  },
};

const realWorldAssetTokenization: Post = {
  slug: "real-world-asset-tokenization-reaches-10b-tvl",
  title: "Real-world asset tokenization reaches $10 billion TVL",
  excerpt:
    "The market for tokenized real-world assets has reached $10 billion in total value locked, doubling in six months.",
  quickTake: [
    "Tokenized treasuries now account for 50% of the market with $5 billion in value.",
    "Real estate tokenization has grown 150% to reach $2 billion.",
    "The sector is expected to reach $50 billion by 2028.",
    "Institutional adoption has driven the majority of the growth in tokenized RWA.",
  ],
  author: {
    name: "Alex Rivera",
    role: "DeFi Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T16:00:00.000Z",
  category: "web3",
  tags: ["RWA", "Tokenization", "Treasuries", "Real Estate", "Institutional"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/rwa-tokenization-milestone",
  },
};

const socialFiGrowth: Post = {
  slug: "socialfi-platforms-see-parabolic-growth",
  title: "SocialFi platforms see parabolic growth with 30M users",
  excerpt:
    "SocialFi platforms have experienced parabolic growth, reaching 30 million monthly active users across the sector.",
  quickTake: [
    "User growth has increased 200% in the past six months.",
    "Top SocialFi platforms generate $100 million in monthly creator revenue.",
    "The sector has attracted 150,000 daily content creators.",
    "Farcaster and Lens lead the space with 8 million and 6 million users respectively.",
  ],
  author: {
    name: "Jessica Miller",
    role: "Social Media Correspondent",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T13:30:00.000Z",
  category: "web3",
  tags: ["SocialFi", "Farcaster", "Lens", "Creator Economy", "Web3"],
  images: [],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/socialfi-growth",
  },
};

const zeroKnowledgeAdoption: Post = {
  slug: "zero-knowledge-proof-adoption-accelerates",
  title: "Zero-knowledge proof adoption accelerates across blockchain",
  excerpt:
    "Zero-knowledge proof technology is seeing accelerated adoption across blockchain networks, with major implementations on Ethereum, Polygon, and Solana.",
  quickTake: [
    "ZK-proof transactions have increased 400% year-over-year.",
    "Polygon has implemented ZK proofs for 50% of its transaction processing.",
    "New ZK-powered privacy applications have launched across multiple chains.",
    "ZK development activity has grown 150%, making it the fastest-growing sector.",
  ],
  author: {
    name: "David Park",
    role: "Privacy Technology Reporter",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T14:00:00.000Z",
  category: "web3",
  tags: ["ZK", "Zero-Knowledge", "Privacy", "Scaling", "Crypto"],
  images: [],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/zk-proof-adoption",
  },
};

// ============================================
// EXPORT ALL POSTS
// ============================================

/** Curated picks for the Trending rail. */
export const trendingPosts: Post[] = [
  btcBreaksResistance,
  clarityActUpdate,
  aaveV4Launch,
  fedRateCutsCrypto,
  nftMarketResurgence,
];

/** Reverse-chronological feed. */
export const latestPosts: Post[] = [
  btcBreaksResistance,
  coinbaseEarnings,
  clarityActUpdate,
  fedRateCutsCrypto,
  nftMarketResurgence,
  aaveV4Launch,
  chainlinkAcquisition,
  ethereumDencunImpact,
  mizuhoBitGo,
  stripeBridgeAcquisition,
  galaxyDigitalExpansion,
  solanaNetworkActivity,
  secStakingRules,
  morphoLendingVolume,
  gdpGrowthCryptoCorrelation,
  altcoinSeasonAnalysis,
  europeMiCAImplementation,
  gamificationWeb3Gaming,
  microsoftBlockchainPartnership,
  polygonZKEVMExpansion,
  inflationHedgeNarrative,
  cryptoDerivativesVolume,
  asiaCryptoRegulation,
  decentralIDAdoption,
  fidelityCryptoFunds,
  a16zDeFiFund,
  curveFinanceRecovery,
  avalancheSubnetsLaunch,
  usDollarCryptoCorrelation,
  stablecoinMarketCap,
  fincenCryptoReporting,
  realWorldAssetTokenization,
  bitgoIpoUpdate,
  uniswapVentureRound,
  skyUSDSIntegration,
  arbitrumMilestone,
  institutionalPortfolioAllocation,
  cryptoEthereumETFFlows,
  globalCryptoCompliance,
  socialFiGrowth,
  goldmanSachsCryptoDesk,
  circleIPOPlans,
  pendleYieldSurge,
  optimismDeveloperGrowth,
  employmentDataCryptoImpact,
  zeroKnowledgeAdoption,
  panteraLiquidityFund,
  lidoStakingRewards,
  ethGasFeesAnalysis,
];

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

export function getLatestPostsByCategory(
  slug: CategorySlug,
  limit: number = 6,
): Post[] {
  return getPostsByCategory(slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
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
