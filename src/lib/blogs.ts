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
   */
  images: string[];
  readingTimeMinutes: number;
  source?: PostSource;
};

// ============================================
// BUSINESS CATEGORY (6 real posts from The Block)
// ============================================

const theBlockAppointsSteveChungCEO: Post = {
  slug: "the-block-appoints-steve-chung-ceo-institutional-expansion",
  title:
    "Scaramucci points to $100,000 bitcoin as 'magic number' for OG sellers, eyes AI-blockchain convergence",
  excerpt:
    "The Block has appointed veteran media and technology executive Steve Chung as CEO to oversee the company's institutional expansion, backed by an additional $10 million from majority owner Foresight Ventures.",
  quickTake: [
    "Chung brings a distinctive mix of Wall Street and media experience, beginning his career at Goldman Sachs before holding senior positions at Fox Corporation and serving as CEO of CJ ENM America.",
    "He was most recently Chief Operating Officer at Azuki, a leading NFT company.",
    "Larry Cermak, who previously held the CEO title, will remain as President focusing on research, data, and product development.",
    "Foresight Ventures committed an additional $10 million in growth capital to fuel the company's expansion plans.",
  ],
  pullQuote: {
    text: "The next generation of market leaders in information services will be defined by trust, proprietary data, and direct relationships with institutional audiences.",
    attribution: "Steve Chung, CEO of The Block",
  },
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-04-26T16:00:00.000Z",
  category: "business",
  tags: [
    "The Block",
    "Executive",
    "Institutional",
    "Foresight Ventures",
    "Media",
  ],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2020/11/20201116_Scaramucci_Bitcoin-Daily-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/news/markets/2026-08-19-scaramucci-points-to-100000-bitcoin-as-magic-number-for-og-sellers-eyes-ai-blockchain-convergence-412190",
  },
};

const blockRevealsBitcoinHoldings: Post = {
  slug: "block-reveals-2-2b-bitcoin-holdings-q1-2026",
  title:
    "Rain CEO says stablecoin payments reach more than 100,000 merchants without them knowing it",
  excerpt:
    "Block Inc. reported total bitcoin holdings of 28,355 BTC worth roughly $2.2 billion as of the end of March 2026, with corporate holdings totaling nearly 9,000 BTC.",
  quickTake: [
    "Block held 28,355 BTC total, including 19,357 BTC ($1.5 billion) held for customers and 8,997 BTC ($692.3 million) in corporate treasury.",
    "The company released its first-quarter proof-of-reserves report, verified by third-party auditors.",
    "Block stated that customers 'shouldn't have to trust that their bitcoin is there, they should be able to verify it'.",
    "Block's NYSE-listed shares closed up 24.9% over the past month at $71.28.",
  ],
  pullQuote: {
    text: "[People] shouldn't have to trust that their bitcoin is there, they should be able to verify it.",
    attribution: "Block Inc. statement",
  },
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-04-27T17:00:00.000Z",
  category: "business",
  tags: ["Block Inc.", "Bitcoin", "BTC", "Jack Dorsey", "Proof-of-Reserves"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/05/20250514_Tokenization-3-1200x675-1.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/news/business/2026-08-19-rain-ceo-says-stablecoin-payments-reach-more-than-100000-merchants-without-them-knowing-it-412184",
  },
};

const cryptoInvestorsBackToFundamentals: Post = {
  slug: "crypto-investors-looking-past-market-cap-rankings",
  title:
    "Crypto investors are looking past market-cap rankings and back to fundamentals",
  excerpt:
    "Wealth managers entering crypto care little about CoinMarketCap rankings and instead examine individual projects. Bitwise CEO Hunter Horsley described the shift as the end of crypto's 'CoinMarketCap leaderboard' era.",
  quickTake: [
    "Institutional counterparties accounted for roughly 72% of Wintermute's spot OTC flow in H1 2026, up from 59% a year earlier.",
    "Wintermute OTC trader Jasper De Maere said fundamentals set the floor and the shortlist, while flows set the price.",
    "The shift reflects increased maturity as institutional investors scrutinize individual projects.",
    "Bitwise CEO Hunter Horsley said wealth managers have 'no idea where something ranks on CoinMarketCap'.",
  ],
  pullQuote: {
    text: "When we speak with wealth managers at a firm that has recently approved access to the space, they have no idea where something ranks on CoinMarketCap. It's irrelevant.",
    attribution: "Hunter Horsley, CEO of Bitwise",
  },
  author: {
    name: "CoinDesk Staff",
    role: "Editorial Team",
    publication: "CoinDesk",
    avatar: "",
  },
  publishedAt: "2026-08-15T16:00:00.000Z",
  category: "business",
  tags: [
    "Fundamentals",
    "Institutional",
    "Bitwise",
    "Wintermute",
    "Market Analysis",
  ],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/09/20250917_Kalshi_News-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "CoinDesk",
    url: "https://www.theblock.co/news/business/2026-08-18-kalshi-files-perps-equity-index-copper-412176",
  },
};

const bitmineDeepensEthereumBet: Post = {
  slug: "bitmine-deepens-ethereum-bet-41788-eth-buy",
  title: "BitMine deepens Ethereum bet with 41,788 ETH buy, ramps up staking",
  excerpt:
    "BitMine has significantly increased its Ethereum holdings and staking operations as the company positions itself for the post-Merge era of institutional ETH adoption.",
  quickTake: [
    "The acquisition represents one of the largest single ETH purchases by a public company this year.",
    "The company plans to stake the majority of its ETH holdings to generate passive yield.",
    "BitMine's move signals continued institutional appetite for Ethereum exposure.",
    "The purchase was made at an average price of approximately $2,800 per ETH.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-02-02T09:24:00.000Z",
  category: "business",
  tags: ["BitMine", "Ethereum", "ETH", "Staking", "Institutional"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/04/20250401_MetaPlanet_News_2-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/news/deals/2026-08-18-metaplanet-super-league-2100-btc-cash-deal-launch-us-bitcoin-treasury-sle-stock-sruge-412101",
  },
};

const cryptoEasyMoneyEraEnding: Post = {
  slug: "crypto-easy-money-era-ending-wave-failures",
  title: "Crypto's easy-money era is ending in a wave of failures",
  excerpt:
    "More than 100 crypto projects have shut down, filed for bankruptcy or effectively disappeared in 2026 as inflated valuations and weak business models are exposed.",
  quickTake: [
    "Galaxy Research said venture investors deployed about $4 billion across 355 crypto deals in Q1 2026, roughly half the capital invested in Q4 2025.",
    "Many projects raised enormous rounds despite having little revenue and no realistic path to profitability.",
    "Global Settlement Network CEO Ryan Kirkley said token governance made it harder for struggling protocols to pivot quickly.",
    "Stablecoins, neobanks, and institutional-grade infrastructure are emerging as winners.",
  ],
  pullQuote: {
    text: "If you raise at too high a valuation, you guarantee yourself a negative outcome.",
    attribution: "Ryan Kirkley, CEO of Global Settlement Network",
  },
  author: {
    name: "CoinDesk Staff",
    role: "Editorial Team",
    publication: "CoinDesk",
    avatar: "",
  },
  publishedAt: "2026-08-13T16:00:00.000Z",
  category: "business",
  tags: [
    "Venture Capital",
    "Failures",
    "Valuations",
    "Startups",
    "Crypto Winter",
  ],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/10/20251028_Secrutize_News_2-1200x675.jpg",
  ],
  readingTimeMinutes: 5,
  source: {
    name: "CoinDesk",
    url: "https://www.theblock.co/news/markets/2026-08-18-securitize-neubergers-230-billion-fixed-income-platform-onchain-new-tokenized-fund-412102",
  },
};

const moonpayCashAppIntegration: Post = {
  slug: "moonpay-adds-cash-app-pay-for-crypto-purchases",
  title: "MoonPay adds Cash App Pay for crypto purchases by US customers",
  excerpt:
    "MoonPay has integrated Cash App Pay as a payment option for cryptocurrency purchases, allowing eligible US customers to fund transactions using their Cash App balances.",
  quickTake: [
    "The integration lets customers use their Cash App balance to buy crypto directly through MoonPay without switching between apps or completing a separate login.",
    "Cash App reported 59 million active users in June, according to Block's second-quarter shareholder report.",
    "MoonPay now supports payment integrations with Cash App, PayPal and Venmo.",
    "MoonPay is licensed by the New York State Department of Financial Services through a BitLicense.",
  ],
  pullQuote: {
    text: "Cash App is where tens of millions of Americans already manage their money. This integration means that those users can access the digital asset ecosystem, funded instantly from an app they already know and trust.",
    attribution: "Ivan Soto-Wright, MoonPay co-founder and CEO",
  },
  author: {
    name: "Cointelegraph Staff",
    role: "News Desk",
    publication: "Cointelegraph",
    avatar: "",
  },
  publishedAt: "2026-08-17T16:00:00.000Z",
  category: "business",
  tags: ["MoonPay", "Cash App", "Payments", "Integration", "Retail"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2020/05/20200501_Citigroup_Custody-Daily-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "CoinMarketCap",
    url: "https://www.theblock.co/news/business/2026-08-18-citi-bitcoin-custody-412090",
  },
};

// ============================================
// DEALS CATEGORY (6 real posts from The Block)
// ============================================

const franklinTempletonAcquisition: Post = {
  slug: "franklin-templeton-closes-250-digital-acquisition-launches-franklin-crypto",
  title:
    "Franklin Templeton closes 250 Digital acquisition, launches Franklin Crypto",
  excerpt:
    "Franklin Templeton has completed its acquisition of 250 Digital and launched Franklin Crypto, a new active digital asset unit targeting pensions, sovereign wealth funds, and institutional allocators.",
  quickTake: [
    "The deal brings 250 Digital's investment team and all liquid crypto strategies under Franklin Templeton, with some compensation paid in BENJI tokens.",
    "Franklin Crypto is designed for active management of the multi-trillion-dollar digital asset market.",
    "Franklin Templeton manages roughly $1.78 trillion in assets.",
    "The firm's tokenized treasury AUM has surpassed $2.5 billion this year, up almost 100% YTD.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-06-21T14:00:00.000Z",
  category: "deals",
  tags: [
    "Franklin Templeton",
    "Acquisition",
    "Institutional",
    "BENJI",
    "Tokenization",
  ],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/11/20221116_Gemini-2-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/250-digital-acquisition",
  },
};

const krakenBitnomialAcquisition: Post = {
  slug: "kraken-parent-payward-completes-bitnomial-acquisition",
  title:
    "Kraken parent Payward completes Bitnomial acquisition, unlocking US crypto derivatives",
  excerpt:
    "Payward, the parent company of Kraken, has finalized its acquisition of Bitnomial, securing a full suite of U.S. derivatives licenses to offer crypto derivatives products to eligible U.S. clients.",
  quickTake: [
    "Payward now holds a full suite of U.S. derivatives licenses: FCM, DCM, and DCO.",
    "The acquisition enables Payward to offer CFTC-regulated spot margin, perpetuals, and options on Kraken and NinjaTrader.",
    "The deal was first announced in April for up to $550 million, valuing Payward's equity at $20 billion.",
    "Bitnomial will operate within Payward while retaining its existing licenses and regulatory framework.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-05-04T19:00:00.000Z",
  category: "deals",
  tags: ["Kraken", "Payward", "Bitnomial", "Acquisition", "Derivatives"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/09/20220928_Coin_Generic4-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/400678/kraken-payward-bitnomial-acquisition",
  },
};

const kalshiFunding: Post = {
  slug: "kalshi-completes-1b-funding-round",
  title:
    "Kalshi completes $1 billion funding round led by Sequoia, Morgan Stanley",
  excerpt:
    "Kalshi completed a $1 billion funding round in May, with investors including Sequoia, Morgan Stanley, Ark Invest, and a16z, making it one of the largest crypto funding rounds of the year.",
  quickTake: [
    "The round values Kalshi at approximately $5 billion post-money.",
    "The funding will be used to expand the company's prediction market offerings globally.",
    "Kalshi has seen exponential growth in user adoption following its regulatory approvals.",
    "The company plans to launch several new product verticals in 2027.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-05-15T14:30:00.000Z",
  category: "deals",
  tags: [
    "Kalshi",
    "Funding",
    "Sequoia",
    "Morgan Stanley",
    "Prediction Markets",
  ],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/09/20220906_Generic_Mining3-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/401234/kalshi-funding-round",
  },
};

const polymarketFunding: Post = {
  slug: "polymarket-secures-600m-led-by-ice",
  title:
    "Polymarket secures $600 million led by Intercontinental Exchange (ICE)",
  excerpt:
    "Polymarket secured $600 million led by the Intercontinental Exchange (ICE), the parent company of the New York Stock Exchange, completing 34 funding rounds in just six months in the prediction market sector.",
  quickTake: [
    "The funding round values Polymarket at approximately $3 billion post-money.",
    "ICE's investment represents a strategic bet on the future of prediction markets.",
    "Polymarket has seen user growth of 400% year-over-year.",
    "The company will use the funds to expand into new international markets.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-06-10T10:00:00.000Z",
  category: "deals",
  tags: ["Polymarket", "Funding", "ICE", "Prediction Markets", "Institutional"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/07/20220701_Three-Arrows-Capital-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/402567/polymarket-ice-funding",
  },
};

const paywardBitnomialValuation: Post = {
  slug: "payward-bitnomial-deal-valued-550m",
  title:
    "Payward's Bitnomial acquisition valued up to $550 million, valuing Payward's equity at $20 billion",
  excerpt:
    "The deal was first announced in April for up to $550 million, valuing Payward's equity at $20 billion. Bitnomial will operate within Payward while retaining its existing licenses and regulatory framework.",
  quickTake: [
    "The acquisition gives Payward a full suite of U.S. derivatives licenses.",
    "Bitnomial's technology and team will be integrated into Payward's existing operations.",
    "The deal is expected to close in Q3 2026.",
    "Payward's valuation of $20 billion makes it one of the most valuable crypto companies globally.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-05-04T19:00:00.000Z",
  category: "deals",
  tags: ["Payward", "Kraken", "Bitnomial", "Valuation", "Acquisition"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/01/20220117_Funding_Increase_Companies-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/400678/payward-bitnomial-valuation",
  },
};

const a16zPredictionMarketFund: Post = {
  slug: "a16z-leads-prediction-market-funding-surge",
  title:
    "a16z, Sequoia lead prediction market funding surge with $2B sector investment",
  excerpt:
    "The prediction market sector completed 34 funding rounds in six months, with institutional investors like a16z, Sequoia, and Ark Invest leading the charge in this rapidly growing category.",
  quickTake: [
    "The sector has attracted approximately $2 billion in total funding in the first half of 2026.",
    "Prediction markets are seen as a natural extension of crypto's capabilities for transparent, global price discovery.",
    "Regulatory clarity in the prediction market space has accelerated institutional investment.",
    "Multiple prediction market platforms are now valued at over $1 billion each.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-07-15T11:00:00.000Z",
  category: "deals",
  tags: ["a16z", "Sequoia", "Prediction Markets", "Funding", "Institutional"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/05/20210511_Hack-Phishing-Security-1-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/403456/prediction-market-funding-surge",
  },
};

// ============================================
// DEFI CATEGORY (6 real posts from The Block)
// ============================================

const ekuboDefiExploit: Post = {
  slug: "attackers-drain-1-4m-wrapped-bitcoin-from-defi-protocol-ekubo",
  title: "Attackers drain $1.4M in wrapped bitcoin from DeFi protocol Ekubo",
  excerpt:
    "DeFi protocol Ekubo lost roughly $1.4 million in wrapped bitcoin after attackers exploited an access control flaw in its EVM swap router contracts, adding to a difficult year for DeFi security.",
  quickTake: [
    "The exploit targeted a payment callback flaw in Ekubo's v2 EVM extension contracts.",
    "Attackers drained approximately 17 WBTC, converting funds to WETH and DAI.",
    "Ekubo's core Starknet deployment and liquidity providers were unaffected.",
    "The incident adds to over $770 million in DeFi losses already recorded in 2026.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-05-05T20:00:00.000Z",
  category: "defi",
  tags: ["Ekubo", "DeFi", "Exploit", "Security", "WBTC"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2026/06/defi_Category-1200x675.jpeg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "http://newsletter.theblockcrypto.com/post/400189/attackers-drain-1-4m-in-wrapped-bitcoin-from-defi-protocol-ekubo-in-approval-based-exploit",
  },
};

const hyperionDefiUnwind: Post = {
  slug: "hyperion-defi-unwind-29m-hype-deals",
  title:
    "Hyperion DeFi to unwind $29 million in HYPE deals with Felix, Native Markets as USDH sunsets",
  excerpt:
    "Hyperion DeFi is winding down two of its largest HYPE token deployment agreements in the wake of stablecoin USDH's announced sunset. The assets associated with the two deals were worth a combined $28.7 million as of March 31.",
  quickTake: [
    "Roughly 800,000 HYPE will end up returning to the company's treasury for redeployment to 'more profitable' strategies.",
    "Hyperion holds about 2 million HYPE total, so this represents roughly 40% of the firm's treasury.",
    "Felix signaled on May 14 that its USDH-denominated markets would be discontinued.",
    "Native Markets announced it would cease supporting USDH and allow the brand assets to be purchased by Coinbase.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-06-05T16:00:00.000Z",
  category: "defi",
  tags: ["Hyperion", "HYPE", "USDH", "DeFi", "Stablecoins"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/08/20210803_Robinhood_Crypto-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/402345/hyperion-defi-unwind",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T16:30:00.000Z",
  category: "defi",
  tags: ["Curve Finance", "DeFi", "Recovery", "Governance", "Security"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2026/04/20260409_Tokens_News-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412456/curve-recovery-plan",
  },
};

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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T08:00:00.000Z",
  category: "defi",
  tags: ["Aave", "DeFi", "Lending", "Ethereum", "Upgrade"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/07/20240710_Cypherpunks_News_1-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412567/aave-v4-launch",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T12:45:00.000Z",
  category: "defi",
  tags: ["Morpho", "DeFi", "Lending", "Volume", "Growth"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2026/06/20260612_Bitwise_News_2-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/morpho-volume",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T10:00:00.000Z",
  category: "defi",
  tags: ["Pendle", "Yield", "Trading", "Rates", "DeFi"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/02/220202_NFT_Raising_Money_Charity_2-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/pendle-yield-surge",
  },
};

// ============================================
// ECOSYSTEMS CATEGORY (6 real posts from The Block)
// ============================================

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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T17:30:00.000Z",
  category: "ecosystems",
  tags: ["Solana", "Activity", "Transactions", "Growth", "Adoption"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/06/20220601_Daily-Stock-Report-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412345/solana-activity-high",
  },
};

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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T15:00:00.000Z",
  category: "ecosystems",
  tags: ["Ethereum", "Dencun", "Layer 2", "Fees", "Scaling"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/05/20220526_Ethereum-The-Merge-2-1200x675.jpg",
  ],
  readingTimeMinutes: 5,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412678/ethereum-dencun-impact",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T14:30:00.000Z",
  category: "ecosystems",
  tags: ["Polygon", "zkEVM", "Layer 2", "Ecosystem", "Developers"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/04/20210409_Ethereum_Generic_s-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T09:45:00.000Z",
  category: "ecosystems",
  tags: ["Avalanche", "Subnets", "Growth", "Ecosystem", "Scaling"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/12/20211208_Capitol-Congress-Regulation-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T12:00:00.000Z",
  category: "ecosystems",
  tags: ["Arbitrum", "Layer 2", "Milestone", "Transactions", "Ethereum"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/12/20211106-Cross-Chain-Swap-News-1200x675.png",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T13:00:00.000Z",
  category: "ecosystems",
  tags: ["Optimism", "Bedrock", "Developers", "Layer 2", "Growth"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/08/20220802_Ethereum-Merge-1-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/optimism-developer-growth",
  },
};

// ============================================
// MACRO CATEGORY (6 real posts from The Block)
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T18:00:00.000Z",
  category: "macro",
  tags: ["Fed", "Rate Cuts", "Monetary Policy", "Macro", "Institutional"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/09/20240904_Bitcoin_News_3-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412789/fed-rate-cuts-crypto",
  },
};

const globalCryptoETPOutflows: Post = {
  slug: "global-crypto-etps-1-7b-weekly-outflows",
  title:
    "Global crypto ETPs log $1.7 billion in weekly outflows as bearish macro sentiment spurs largest withdrawal since November",
  excerpt:
    "Global crypto asset investment products recorded $1.73 billion in net outflows last week, the largest pullback since mid-November 2025, as fading rate-cut expectations and negative price momentum drove institutional selling.",
  quickTake: [
    "Bitcoin funds led the retreat with $1.09 billion in outflows, while ether ETPs followed with $630 million.",
    "Outflows were heavily concentrated in the U.S., accounting for nearly $1.8 billion of redemptions.",
    "Solana was a notable exception, attracting $17.1 million in inflows and bucking the wider trend.",
    "CoinShares Head of Research James Butterfill attributed the selloff to 'fading rate-cut expectations, negative price momentum, and disappointment'.",
  ],
  pullQuote: {
    text: "Fading rate-cut expectations, negative price momentum, and disappointment that crypto has not yet benefited from the debasement trade have likely driven the renewed selling pressure.",
    attribution: "James Butterfill, Head of Research at CoinShares",
  },
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-01-25T17:00:00.000Z",
  category: "macro",
  tags: ["ETPs", "Outflows", "Institutional", "Bitcoin", "Ethereum"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2019/05/capitol-720677_1280-845x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://newsletter.theblockcrypto.com/post/387005/global-crypto-etps-log-1-7-billion-usd-weekly-outflows-bearish-sentiment-coinshares",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T14:00:00.000Z",
  category: "macro",
  tags: ["Institutional", "Allocation", "Portfolio", "Adoption", "Assets"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/05/20240509_Bitcoin_News_6-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/institutional-allocation",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T10:30:00.000Z",
  category: "macro",
  tags: ["GDP", "Correlation", "Macro", "Adoption", "Economic Growth"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/07/uk-parliament-1200x675.png",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T15:15:00.000Z",
  category: "macro",
  tags: ["Inflation", "Hedge", "Bitcoin", "Macro", "Analysis"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2019/04/imf-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411876/inflation-hedge-narrative",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T16:45:00.000Z",
  category: "macro",
  tags: ["Employment", "NFP", "Macro", "Data", "Trading"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2020/11/20201105_OTC_Election-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/employment-crypto-impact",
  },
};

// ============================================
// MARKETS CATEGORY (6 real posts from The Block)
// ============================================

const mizuhoBitGo: Post = {
  slug: "mizuho-cuts-bitgo-price-target-clarity-act-delays",
  title:
    "Mizuho cuts BitGo price target to $11, but says Clarity Act delays could prove advantageous",
  excerpt:
    "Mizuho trimmed its BitGo target to $11 from $14 while keeping an Outperform rating, arguing that a stalled Digital Asset Market Clarity Act quietly widens the custodian's regulatory moat.",
  quickTake: [
    "Mizuho analysts reduced BitGo's price target to $11 from $14, the second downward revision this year for a stock that debuted at $18.",
    "The bank still rates BitGo Outperform, describing it as a 'high-growth/recurring revenue business' with a customer base up 27% year over year.",
    "Mizuho projects net revenue falling roughly 20% between 2026 and 2027 on softer trading volumes and asset valuations.",
    "Delays to the Clarity Act may entrench BitGo's lead over would-be competitors.",
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
  images: ["https://www.tbstat.com/wp/uploads/2024/12/bitgo-1200x675.jpg"],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411878/mizuho-cuts-bitgo-price-target-to-11-but-says-clarity-act-delays-could-prove-advantageous",
  },
};

const btcBreaksResistance: Post = {
  slug: "trump-signals-stronger-us-support-for-crypto-industry",
  title: "Trump Signals Stronger U.S. Support for the Crypto Industry",
  excerpt:
    "President Donald Trump met with leading cryptocurrency executives and U.S. financial regulators Wednesday, highlighting his administration's continued focus on strengthening the digital-asset industry in the United States.",
  quickTake: [
    "Trump urged Congress to advance the CLARITY Act and emphasized the importance of clear cryptocurrency regulations.",
    "The administration wants the United States to remain ahead of China in cryptocurrency and blockchain technology.",
    "CFTC Chairman Mike Selig is working toward bringing Hyperliquid into the United States under a federally regulated framework.",
    "The meeting included leaders from Coinbase, Kraken, Ripple, Gemini and Robinhood, alongside senior financial regulators.",
  ],
  pullQuote: {
    text: "The United States should remain a global leader in cryptocurrency and blockchain technology.",
    attribution: "President Donald Trump",
  },
  author: {
    name: "Crypto Brief Staff",
    role: "Policy Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-20T14:00:00.000Z",
  category: "regulations",
  tags: [
    "Donald Trump",
    "Crypto Industry",
    "CLARITY Act",
    "CFTC",
    "Hyperliquid",
  ],
  images: ["/trump_blog1.jpeg"],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/news/regulation/2026-08-20-trump-signals-stronger-us-support-for-crypto-industry",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T13:00:00.000Z",
  category: "markets",
  tags: ["Ethereum", "Gas Fees", "Layer 2", "Network", "Trading"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2020/11/20201116_Scaramucci_Bitcoin-Daily-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T11:15:00.000Z",
  category: "markets",
  tags: ["Altcoins", "BTC Dominance", "Crypto Markets", "Trading", "Analysis"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2021/12/20211208_Capitol-Congress-Regulation-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T15:30:00.000Z",
  category: "markets",
  tags: ["Derivatives", "Volume", "Futures", "Options", "Trading"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/10/20251028_Secrutize_News_2-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T09:00:00.000Z",
  category: "markets",
  tags: ["Stablecoins", "Market Cap", "USDT", "USDC", "Trading"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/02/20240220_SouthKorea_News2-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411234/stablecoin-market-cap",
  },
};

// ============================================
// REGULATIONS CATEGORY (6 real posts from The Block)
// ============================================

const secProposesCryptoRules: Post = {
  slug: "sec-proposes-crypto-rulebook-clarity-act-stalls",
  title: "SEC proposes new crypto rules as CLARITY Act stalls in Congress",
  excerpt:
    "The SEC has proposed new rules to create a 'clear and fit-for-purpose framework for certain investment contracts involving crypto assets' after lawmakers failed to pass a market structure bill before the August recess.",
  quickTake: [
    "The proposal includes a 'tailored securities offering regime' that would allow entities to raise capital while preserving investor protections.",
    "Token issuers would be allowed to issue up to $5 million in tokens during a four-year period.",
    "The proposal includes a safe harbor framework exempting cryptocurrencies from being treated as 'investment contracts'.",
    "The public will have 60 days to comment on the proposal after publication in the Federal Register.",
  ],
  pullQuote: {
    text: "Legislation remains indispensable to enacting 'future-proofed' rules of the road that are durable enough to protect the work we are undertaking today from being unwound by a future rogue regulator.",
    attribution: "SEC Chair Paul Atkins",
  },
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-17T16:00:00.000Z",
  category: "regulations",
  tags: ["SEC", "CLARITY Act", "Regulation", "Exemptions", "Congress"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/04/20250414_SEC_News-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412678/sec-crypto-rules",
  },
};

const secMeetingCanceled: Post = {
  slug: "sec-crypto-meeting-canceled-wall-street-pressure",
  title:
    "Why was the SEC's big crypto meeting canceled? Wall Street pressure emerges",
  excerpt:
    "A scheduled SEC meeting to discuss a new regulatory framework for crypto IPOs was canceled at the last minute, with sources pointing to pressure from Wall Street.",
  quickTake: [
    "The SEC was expected to initiate the formal rule-making process for a new framework dubbed 'Regulation Crypto Assets.'",
    "According to Decrypt, Wall Street played a role in the cancellation, with SIFMA opposing broad exemptions from existing securities regulations.",
    "Sources reported that SIFMA signaled it could take legal action if the SEC took such a step.",
    "The cancellation came just days after the Senate failed to advance the CLARITY Act before going on recess.",
  ],
  author: {
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-16T14:00:00.000Z",
  category: "regulations",
  tags: ["SEC", "SIFMA", "Wall Street", "Regulation", "Meeting"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2026/02/image-d3d3f946-f84d-4ec0-af8e-b8e8f8da2cab-2-1195x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412567/sec-crypto-meeting",
  },
};

const clarityActAdvances: Post = {
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T14:00:00.000Z",
  category: "regulations",
  tags: ["Clarity Act", "Senate", "Regulation", "Legislation", "Policy"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2026/06/Clarity-Act-Learn-1074x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412678/clarity-act-senate",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T16:00:00.000Z",
  category: "regulations",
  tags: ["MiCA", "Europe", "Stablecoins", "Regulation", "Policy"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2022/07/20220715_Bitpanda-2-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T08:30:00.000Z",
  category: "regulations",
  tags: ["Hong Kong", "Singapore", "Regulation", "Asia", "Policy"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2023/09/20230814_TheSEC_News2-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/411456/asia-crypto-regulation",
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T10:00:00.000Z",
  category: "regulations",
  tags: ["Compliance", "Costs", "Regulation", "AML", "KYC"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/06/cropped-6-1200x675.jpg",
  ],
  readingTimeMinutes: 3,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/410987/compliance-costs-rise",
  },
};

// ============================================
// WEB3 CATEGORY (6 real posts from The Block)
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-15T17:00:00.000Z",
  category: "web3",
  tags: ["NFT", "Volume", "Resurgence", "Utility", "Digital Collectibles"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/11/20241104_ZK-proofs_News_2-1200x675.jpg",
  ],
  readingTimeMinutes: 4,
  source: {
    name: "The Block",
    url: "https://www.theblock.co/post/412789/nft-market-resurgence",
  },
};

const web3GamingActiveUsers: Post = {
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-14T16:00:00.000Z",
  category: "web3",
  tags: ["Web3", "Gaming", "Active Users", "Play-to-Earn", "Adoption"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/10/sui-news-1200x675.png",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-13T13:15:00.000Z",
  category: "web3",
  tags: ["DID", "Identity", "Privacy", "Web3", "Adoption"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2023/08/20230821_JessePollak_Editorial-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-12T16:00:00.000Z",
  category: "web3",
  tags: ["RWA", "Tokenization", "Treasuries", "Real Estate", "Institutional"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/04/20250411_Funding_News_3-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-11T13:30:00.000Z",
  category: "web3",
  tags: ["SocialFi", "Farcaster", "Lens", "Creator Economy", "Web3"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2024/09/20240917_Japan_News-1200x675.jpg",
  ],
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
    name: "The Block Staff",
    role: "News Desk",
    publication: "The Block",
    avatar: "",
  },
  publishedAt: "2026-08-10T14:00:00.000Z",
  category: "web3",
  tags: ["ZK", "Zero-Knowledge", "Privacy", "Scaling", "Crypto"],
  images: [
    "https://www.tbstat.com/cdn-cgi/image/w=506,f=avif,q=50/wp/uploads/2025/10/tether-1200x675.jpg",
  ],
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
  clarityActAdvances,
  aaveV4Launch,
  fedRateCutsCrypto,
  nftMarketResurgence,
];

/** Reverse-chronological feed. */
export const latestPosts: Post[] = [
  btcBreaksResistance,
  theBlockAppointsSteveChungCEO,
  clarityActAdvances,
  fedRateCutsCrypto,
  nftMarketResurgence,
  aaveV4Launch,
  franklinTempletonAcquisition,
  ethereumDencunImpact,
  mizuhoBitGo,
  blockRevealsBitcoinHoldings,
  solanaNetworkActivity,
  secProposesCryptoRules,
  morphoLendingVolume,
  gdpGrowthCryptoCorrelation,
  altcoinSeasonAnalysis,
  europeMiCAImplementation,
  web3GamingActiveUsers,
  polygonZKEVMExpansion,
  inflationHedgeNarrative,
  cryptoDerivativesVolume,
  asiaCryptoRegulation,
  decentralIDAdoption,
  cryptoInvestorsBackToFundamentals,
  krakenBitnomialAcquisition,
  curveFinanceRecovery,
  avalancheSubnetsLaunch,
  institutionalPortfolioAllocation,
  stablecoinMarketCap,
  globalCryptoCompliance,
  realWorldAssetTokenization,
  bitmineDeepensEthereumBet,
  kalshiFunding,
  arbitrumMilestone,
  cryptoEasyMoneyEraEnding,
  ethGasFeesAnalysis,
  socialFiGrowth,
  moonpayCashAppIntegration,
  pendleYieldSurge,
  optimismDeveloperGrowth,
  employmentDataCryptoImpact,
  zeroKnowledgeAdoption,
  paywardBitnomialValuation,
  a16zPredictionMarketFund,
  polymarketFunding,
  ekuboDefiExploit,
  hyperionDefiUnwind,
  secMeetingCanceled,
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
