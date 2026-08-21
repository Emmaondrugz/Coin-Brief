export type CourseDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: CourseDifficulty;
  publishedAt: string;
  author: string;
  category: string;
  image: string;
  sourceUrl: string;
};

export const courses: Course[] = [
  {
    id: "stablecoin-reserve-requirements",
    slug: "stablecoin-reserve-requirements-explained",
    title: "Stablecoin Reserve Requirements Explained",
    description:
      "How U.S. and E.U. rules govern the assets backing stablecoins.",
    difficulty: "Intermediate",
    publishedAt: "2026-07-30T22:31:00.000Z",
    author: "The Block Research",
    category: "Stablecoins",
    image:
      "https://www.tbstat.com/wp/uploads/2023/08/20230817_LearnCategory_Custody-1-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/410234/stablecoin-reserve-requirements-explained",
  },
  {
    id: "stablecoin-cross-border-payments",
    slug: "stablecoins-and-cross-border-payments",
    title:
      "Stablecoins and Cross-Border Payments: How Digital Dollars Move Across Borders",
    description:
      "Learn how stablecoins move value internationally and where the risks remain.",
    difficulty: "Beginner",
    publishedAt: "2026-07-30T21:53:00.000Z",
    author: "The Block Research",
    category: "Stablecoins",
    image:
      "https://www.tbstat.com/wp/uploads/2025/05/20250514_Tokenization-3-1200x675-1.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/410227/stablecoins-and-cross-border-payments",
  },
  {
    id: "kucoin",
    slug: "what-is-kucoin",
    title: "What Is KuCoin?",
    description:
      "A guide to KuCoin's exchange, fees, products, services and security model.",
    difficulty: "Beginner",
    publishedAt: "2026-07-28T01:14:00.000Z",
    author: "The Block Research",
    category: "Companies",
    image:
      "https://www.tbstat.com/wp/uploads/2026/07/Kucoin-Learn-1200x675.jpg",
    sourceUrl: "https://www.theblock.co/learn/409571/what-is-kucoin",
  },
  {
    id: "digital-commodity",
    slug: "what-is-a-digital-commodity",
    title: "What Is a Digital Commodity?",
    description:
      "Understand how digital commodities differ from securities and traditional commodities.",
    difficulty: "Beginner",
    publishedAt: "2026-07-27T21:55:00.000Z",
    author: "The Block Research",
    category: "Markets",
    image:
      "https://www.tbstat.com/wp/uploads/2026/07/Digital-Commodity-1074x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/409682/what-is-a-digital-commodity",
  },
  {
    id: "asset-managers-crypto",
    slug: "how-asset-managers-are-investing-in-crypto",
    title: "How Asset Managers Are Investing in Crypto",
    description:
      "Explore the regulated products, custody systems and strategies used by major allocators.",
    difficulty: "Intermediate",
    publishedAt: "2026-07-14T21:55:00.000Z",
    author: "The Block Research",
    category: "Markets",
    image:
      "https://www.tbstat.com/wp/uploads/2026/07/Asset-Managers-Learn-1074x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/408181/how-asset-managers-are-investing-in-crypto",
  },
  {
    id: "sec-vs-cftc",
    slug: "sec-vs-cftc-who-regulates-crypto",
    title: "SEC vs CFTC: Who Regulates Crypto?",
    description:
      "Learn how the SEC and CFTC divide oversight of digital assets and derivatives.",
    difficulty: "Beginner",
    publishedAt: "2026-07-16T23:49:00.000Z",
    author: "The Block Research",
    category: "Regulation",
    image:
      "https://www.tbstat.com/wp/uploads/2025/04/20250414_SEC_News_3-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/408729/sec-vs-cftc-who-regulates-crypto",
  },
  {
    id: "real-world-assets",
    slug: "what-are-real-world-assets-rwas",
    title: "What are Real-World Assets (RWAs)?",
    description:
      "Discover how traditional assets are represented and traded on blockchain networks.",
    difficulty: "Beginner",
    publishedAt: "2026-05-18T01:36:00.000Z",
    author: "The Block Research",
    category: "DeFi",
    image:
      "https://www.tbstat.com/wp/uploads/2026/05/20260513_RWAs_Learn-1-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/401094/what-are-real-world-assets-rwas",
  },
  {
    id: "coinbase-x402",
    slug: "what-is-coinbases-x402-protocol",
    title: "What is Coinbase's x402 protocol?",
    description:
      "A guide to Coinbase's web-native stablecoin payments standard for AI agents.",
    difficulty: "Beginner",
    publishedAt: "2026-03-03T21:59:00.000Z",
    author: "The Block Research",
    category: "DeFi",
    image: "https://www.tbstat.com/wp/uploads/2026/03/x402-Learn-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/391983/what-is-coinbases-x402-protocol",
  },
  {
    id: "bitcoin-21-million",
    slug: "what-happens-when-bitcoin-reaches-21-million-supply",
    title: "What Happens When Bitcoin Reaches 21 Million Supply?",
    description:
      "Learn how Bitcoin's fixed supply affects miners, scarcity and future incentives.",
    difficulty: "Intermediate",
    publishedAt: "2026-06-19T02:36:00.000Z",
    author: "The Block Research",
    category: "Layer 1",
    image:
      "https://www.tbstat.com/wp/uploads/2025/09/bitcoin-altcoin-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/405386/what-happens-when-bitcoin-reaches-21-million-supply",
  },
  {
    id: "bitcoin-lightning",
    slug: "what-is-the-bitcoin-lightning-network-and-how-does-it-work",
    title: "What is the Bitcoin Lightning Network and how does it work?",
    description:
      "Understand how Bitcoin payment channels improve speed, cost and scalability.",
    difficulty: "Beginner",
    publishedAt: "2024-06-18T08:49:00.000Z",
    author: "Jordan Leech",
    category: "Layer 2",
    image:
      "https://www.tbstat.com/wp/uploads/2023/09/20230901_LightningNetwork_News-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/298670/what-is-the-bitcoin-lightning-network-and-how-does-it-work",
  },
  {
    id: "zksync",
    slug: "what-is-zksync-and-how-does-it-work",
    title: "What is Ethereum Layer 2 network ZKsync and how does it work?",
    description:
      "Learn how ZK-rollups help Ethereum scale and reduce transaction fees.",
    difficulty: "Advanced",
    publishedAt: "2024-06-13T14:06:00.000Z",
    author: "Tim Copeland",
    category: "Layer 2",
    image:
      "https://www.tbstat.com/wp/uploads/2022/10/20221006_zkSync-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/286330/what-is-zksync-and-how-does-it-work",
  },
  {
    id: "polymarket",
    slug: "what-is-polymarket",
    title: "What is Polymarket?",
    description:
      "An introduction to blockchain-based prediction markets and event contracts.",
    difficulty: "Beginner",
    publishedAt: "2024-08-14T05:31:00.000Z",
    author: "Jordan Leech",
    category: "Fundraising",
    image:
      "https://www.tbstat.com/wp/uploads/2024/06/polymarket-news-editorial-1200x675.jpg",
    sourceUrl: "https://www.theblock.co/learn/311074/what-is-polymarket",
  },
  {
    id: "dao",
    slug: "what-is-a-decentralized-autonomous-organizations-dao",
    title: "What is a decentralized autonomous organization (DAO)?",
    description:
      "Learn how smart contracts and governance tokens coordinate decentralized organizations.",
    difficulty: "Beginner",
    publishedAt: "2024-05-29T14:35:00.000Z",
    author: "MK Manoylov",
    category: "Governance",
    image:
      "https://www.tbstat.com/wp/uploads/2022/12/20221220_DAO-Governance-2-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/286323/what-is-a-decentralized-autonomous-organizations-dao",
  },
  {
    id: "nft-marketplaces",
    slug: "what-are-the-different-nft-marketplaces",
    title: "What are the different NFT marketplaces?",
    description:
      "Compare universal, art-focused and niche NFT marketplaces and their trade-offs.",
    difficulty: "Advanced",
    publishedAt: "2023-10-26T06:40:00.000Z",
    author: "RT Watson",
    category: "NFTs",
    image:
      "https://www.tbstat.com/wp/uploads/2022/01/220114_NFT_Generic4-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/251482/what-are-the-different-nft-marketplaces",
  },
  {
    id: "metaverses",
    slug: "how-to-interact-with-metaverses",
    title: "How to interact with metaverses",
    description:
      "A beginner-friendly guide to entering, navigating and participating in metaverse worlds.",
    difficulty: "Beginner",
    publishedAt: "2023-10-26T10:58:00.000Z",
    author: "The Block Research",
    category: "Metaverse",
    image:
      "https://www.tbstat.com/wp/uploads/2023/01/20230106_Metaverse_News-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/251474/how-to-interact-with-metaverses",
  },
  {
    id: "tether-business-model",
    slug: "how-does-tether-make-money",
    title:
      "How Does Tether Make Money? Understanding the Business Model Behind USDT",
    description:
      "Understand how Tether earns revenue from the reserves backing USDT.",
    difficulty: "Intermediate",
    publishedAt: "2026-06-22T03:05:00.000Z",
    author: "The Block Research",
    category: "Companies",
    image:
      "https://www.tbstat.com/wp/uploads/2020/05/20200518_Tether-Research-1200x675.jpg",
    sourceUrl:
      "https://www.theblock.co/learn/405498/how-does-tether-make-money",
  },
];

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);
