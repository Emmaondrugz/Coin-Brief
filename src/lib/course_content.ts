import { courses } from "@/lib/courses";

export type CourseLesson = {
  title: string;
  content: string[];
};

export type CourseContent = {
  id: string;
  lessons: CourseLesson[];
};

type LessonSeed = [string, string, string];

const lessonSeeds: Record<string, LessonSeed[]> = {
  "stablecoin-reserve-requirements-explained": [
    [
      "What reserves do",
      "A stablecoin reserve is the pool of cash and cash-like assets intended to support tokens in circulation.",
      "Reserve quality matters because users need confidence that redemption can happen close to par, even during heavy withdrawal demand.",
    ],
    [
      "What regulators require",
      "Modern frameworks generally focus on one-to-one backing, liquid instruments, segregation from corporate funds and regular reporting.",
      "The rules are designed to reduce issuer insolvency risk and make it easier for users, auditors and regulators to evaluate the backing behind a token.",
    ],
    [
      "Attestations and audits",
      "An attestation checks reserve composition at a point in time, while an audit examines controls and financial reporting over a broader period.",
      "Neither process removes every risk, but both improve transparency when the provider clearly explains scope, timing and the identity of the reviewer.",
    ],
    [
      "Why reserve design matters",
      "A reserve invested in short-duration liquid assets can meet redemptions more reliably than one concentrated in volatile or illiquid holdings.",
      "Users should evaluate composition, custody, disclosure frequency and redemption terms rather than treating the word stable as a guarantee.",
    ],
  ],
  "stablecoins-and-cross-border-payments": [
    [
      "The payment flow",
      "A cross-border stablecoin payment usually has an on-ramp, an onchain transfer and an off-ramp into the recipient's local currency.",
      "The blockchain leg can settle quickly, but the surrounding conversion and compliance steps still determine the real cost and speed.",
    ],
    [
      "Why businesses use them",
      "Companies can move treasury funds, supplier payments and contractor payouts outside traditional banking cutoffs.",
      "The strongest use cases tend to be business-to-business transfers and internal treasury movement rather than small consumer remittances.",
    ],
    [
      "Where friction remains",
      "Stablecoin transfers are irreversible and recipients may face thin local liquidity or wide foreign-exchange spreads.",
      "Teams also need wallet screening, sanctions controls, accounting procedures and a clear method for reconciling token movements with fiat books.",
    ],
    [
      "Regulatory perimeter",
      "Issuers, exchanges, payment providers and off-ramps can each face different licensing duties.",
      "A payment rail is only useful when the participants can legally operate in both the sending and receiving jurisdictions.",
    ],
  ],
  "what-is-kucoin": [
    [
      "The exchange model",
      "KuCoin is a centralized exchange where users can trade digital assets through spot markets and, for eligible users, leveraged products.",
      "The platform combines order-book trading with conversion tools, account services and access to a broad selection of tokens.",
    ],
    [
      "Fees and products",
      "Users may encounter trading, funding, withdrawal, conversion and liquidation costs depending on the product they use.",
      "Fee tiers, token holdings and trading volume can change the rate, so users should review the current schedule before transacting.",
    ],
    [
      "Beyond trading",
      "KuCoin offers earning products, automated trading tools, payments, institutional services and a Web3 wallet.",
      "These products have different custody and market risks: a centralized account is not the same as a self-custodied wallet.",
    ],
    [
      "Access and security",
      "Account availability depends on location, local regulation and the specific KuCoin entity providing a service.",
      "KYC, two-factor authentication, withdrawal controls and careful network selection are practical safeguards, but they cannot eliminate platform or market risk.",
    ],
  ],
  "what-is-a-digital-commodity": [
    [
      "Definition",
      "A digital commodity is generally an onchain asset whose value comes from open-market supply and demand rather than the ongoing work of a central issuer.",
      "Fungibility, transferability and decentralization make an asset more comparable to a commodity than to a company share.",
    ],
    [
      "Commodity versus security",
      "A security usually represents an investment where buyers expect profit from the efforts of a company or promoter.",
      "The distinction affects disclosure, registration, venue access and which regulator has primary authority.",
    ],
    [
      "The U.S. agencies",
      "The SEC focuses on securities markets and investor protection, while the CFTC primarily regulates commodity derivatives.",
      "The spot-market boundary is more limited and is one reason proposed market-structure legislation remains important.",
    ],
    [
      "Examples and uncertainty",
      "Bitcoin is the clearest example of an asset commonly treated as a digital commodity, while other assets can require more nuanced analysis.",
      "Classification can depend on the asset, the transaction and the jurisdiction, so a label should not be treated as a universal legal conclusion.",
    ],
  ],
  "how-asset-managers-are-investing-in-crypto": [
    [
      "Regulated access",
      "Asset managers commonly use spot ETFs, digital-asset funds, tokenized funds and listed blockchain companies to provide exposure.",
      "These structures fit existing brokerage, retirement, custody and reporting systems more easily than direct wallet management.",
    ],
    [
      "Why institutions start with Bitcoin",
      "Bitcoin has the deepest liquidity, longest market history and clearest commodity framing among major crypto assets.",
      "Those characteristics make position sizing, execution, custody and investment-committee review easier than for newer tokens.",
    ],
    [
      "Risk controls",
      "Managers can limit exposure through small allocations, qualified custodians, diversification and written rebalancing rules.",
      "A regulated wrapper does not remove price volatility, technology failures, changing regulation or reputational risk.",
    ],
    [
      "The direction of travel",
      "Institutional products are expanding from single-asset funds toward tokenized funds, staking-enabled products and broader baskets.",
      "Adoption will depend on client demand, market performance, operational controls and the clarity of future legislation.",
    ],
  ],
  "sec-vs-cftc-who-regulates-crypto": [
    [
      "The SEC",
      "The Securities and Exchange Commission oversees securities markets, disclosure obligations and investor-protection rules.",
      "In crypto, its attention often centers on tokens or offerings that resemble investment contracts.",
    ],
    [
      "The CFTC",
      "The Commodity Futures Trading Commission regulates commodity futures, options and swaps, including major crypto derivatives.",
      "Its authority over spot commodities is narrower, mainly covering fraud and manipulation rather than comprehensive exchange supervision.",
    ],
    [
      "The classification problem",
      "A token can have both utility and investment characteristics, and its relationship to a founding team can change as a network matures.",
      "That evolution makes a single permanent label difficult and has pushed many disputes into enforcement actions and courts.",
    ],
    [
      "Why legislation matters",
      "A market-structure bill could define digital commodities, assign spot-market authority and create clearer paths for exchanges and issuers.",
      "Until a framework is enacted, companies must treat classification, registration and product approval as moving legal questions.",
    ],
  ],
  "what-are-real-world-assets-rwas": [
    [
      "What tokenization means",
      "Tokenization represents a traditional asset with a blockchain token that can be transferred under defined rules.",
      "The token does not erase the underlying legal, custody or valuation requirements; it changes how ownership and settlement are recorded.",
    ],
    [
      "Major RWA classes",
      "Stablecoins, Treasuries, private credit, equities, commodities and real estate can all be represented onchain.",
      "The most scalable categories tend to be assets with clear legal ownership, reliable pricing and straightforward custody.",
    ],
    [
      "The issuance chain",
      "An issuer or asset manager acquires the underlying asset, a custodian safeguards it and a platform creates the token.",
      "Investors need to understand the legal claim, redemption process, smart-contract permissions and the parties responsible for each layer.",
    ],
    [
      "Benefits and risks",
      "Tokenization can support fractional ownership, faster settlement, continuous markets and broader access.",
      "It also introduces smart-contract, custody, liquidity, legal and counterparty risks that remain even when the interface feels simple.",
    ],
  ],
  "what-is-coinbases-x402-protocol": [
    [
      "A payment-enabled web request",
      "The x402 protocol adds a payment request to an HTTP interaction so a user or software agent can pay before receiving a resource.",
      "The request can specify the token, amount, wallet destination and network, allowing settlement without a traditional card or subscription flow.",
    ],
    [
      "Why agents need it",
      "AI agents can call APIs, access data and purchase services, but traditional payment systems often require a human account holder.",
      "Stablecoin micropayments let an agent pay per request while keeping the transaction programmable and machine-readable.",
    ],
    [
      "Use cases",
      "Possible applications include pay-per-call APIs, metered content, compute access, data feeds and machine-to-machine marketplaces.",
      "The same mechanism can also support human users who prefer one-time payments over account creation or recurring subscriptions.",
    ],
    [
      "Open questions",
      "Adoption depends on wallet security, identity, refunds, network fees, fraud controls and merchant integration.",
      "A web-native payment standard is useful only when developers can implement it reliably and users understand what they are authorizing.",
    ],
  ],
  "what-happens-when-bitcoin-reaches-21-million-supply": [
    [
      "The supply rule",
      "Bitcoin's issuance schedule is encoded in the protocol and reduces the block reward through periodic halvings.",
      "The result is a predictable supply curve that approaches, but does not exceed, 21 million bitcoin.",
    ],
    [
      "Mining after issuance",
      "When block subsidies disappear, miners will rely on transaction fees as their primary source of revenue.",
      "The network can continue operating, but fee demand and mining economics will determine how much security the market can support.",
    ],
    [
      "Scarcity and availability",
      "Not every issued bitcoin is actively available: some coins may be lost, held by long-term owners or stored in institutional products.",
      "This difference between theoretical supply and liquid supply influences market liquidity without changing the protocol cap.",
    ],
    [
      "What investors should watch",
      "The cap can support a scarcity thesis, but it does not guarantee price appreciation.",
      "Demand, custody, regulation, network security, fee markets and competing assets will remain just as important as the fixed supply.",
    ],
  ],
  "what-is-the-bitcoin-lightning-network-and-how-does-it-work": [
    [
      "Payment channels",
      "Lightning moves many payments away from Bitcoin's base layer into channels that record only opening and closing states onchain.",
      "This reduces the amount of block space required for frequent, smaller payments.",
    ],
    [
      "Routing and security",
      "Channels can connect through intermediary nodes using conditional payment mechanisms such as hashed timelock contracts.",
      "Multisignature funding and revocation rules help prevent a participant from settling an outdated channel balance.",
    ],
    [
      "Benefits",
      "Lightning can improve speed, lower fees and support payments that would be impractical on the base layer.",
      "It can also provide a different privacy profile because individual routed payments do not all appear directly on Bitcoin's public chain.",
    ],
    [
      "Trade-offs",
      "Users still need liquidity, channel management and reliable node connectivity, while large routing nodes may create concentration concerns.",
      "Opening and closing channels also require normal Bitcoin transactions and fees.",
    ],
  ],
  "what-is-zksync-and-how-does-it-work": [
    [
      "Ethereum's scaling problem",
      "Ethereum prioritizes decentralized verification, but limited block space can make transactions expensive during high demand.",
      "Layer 2 networks process activity away from the base chain while using Ethereum as a settlement and security reference.",
    ],
    [
      "ZK-rollups",
      "ZKsync groups transactions and generates a proof that the batch was processed according to the protocol rules.",
      "Ethereum verifies the proof instead of replaying every transaction, reducing the data and computation required on the base layer.",
    ],
    [
      "The ecosystem",
      "Bridges move assets between Ethereum and Layer 2, while sequencers order activity and provers create validity proofs.",
      "Users should still evaluate bridge design, withdrawal timing, contract risk and the current degree of operational centralization.",
    ],
    [
      "Decentralization path",
      "A network can begin with concentrated sequencing or proving responsibilities and gradually distribute them.",
      "Tokens and governance may support that transition, but decentralization is a process that must be measured by actual control and fault tolerance.",
    ],
  ],
  "what-is-polymarket": [
    [
      "Prediction markets",
      "Polymarket lets users trade positions tied to outcomes of real-world events, with prices representing the market's implied probability.",
      "A winning position can settle at a fixed value while an incorrect position can expire worthless, creating a simple but risky payoff structure.",
    ],
    [
      "How markets work",
      "Creators define an event and outcomes, while participants provide liquidity and buy or sell shares as information changes.",
      "The price is not a guaranteed forecast; it reflects the current balance of money, information and incentives among participants.",
    ],
    [
      "History and regulation",
      "Blockchain settlement can make markets transparent and globally accessible, but it also raises questions about jurisdiction and permitted wagering.",
      "Polymarket's history shows how product growth can coexist with regulatory scrutiny and restrictions on who may trade.",
    ],
    [
      "Evaluating a market",
      "Users should review resolution rules, oracle design, liquidity, fees and the deadline before taking a position.",
      "A clear event definition is as important as the market price because ambiguous settlement criteria can create disputes.",
    ],
  ],
  "what-is-a-decentralized-autonomous-organizations-dao": [
    [
      "DAO foundations",
      "A DAO uses smart contracts, tokens and proposals to coordinate a group without relying on one central management team.",
      "The code defines some rules, but participants still need social processes for interpretation, communication and conflict resolution.",
    ],
    [
      "Governance tokens",
      "Tokens can grant voting power, proposal rights or economic participation in a protocol treasury.",
      "Token voting is not automatically democratic: concentration, delegation, voter apathy and low participation can heavily influence outcomes.",
    ],
    [
      "Treasuries and proposals",
      "A DAO may use its treasury to fund development, grants, liquidity programs or operating expenses.",
      "Good governance makes proposals specific, exposes trade-offs and gives voters enough time and information to evaluate execution risk.",
    ],
    [
      "Coordination risks",
      "Smart contracts can automate decisions, but bugs, rushed votes and unclear authority can still cause losses.",
      "The strongest DAOs combine transparent code with accountable contributors, security reviews and well-defined emergency procedures.",
    ],
  ],
  "what-are-the-different-nft-marketplaces": [
    [
      "NFT marketplaces",
      "NFT marketplaces are platforms where users list, discover, buy and sell unique blockchain tokens.",
      "The token may represent art, collectibles, game items, memberships, virtual property or another form of digital ownership.",
    ],
    [
      "Marketplace types",
      "Universal platforms support many categories, art marketplaces focus on curated works and niche venues specialize in areas such as gaming or sports.",
      "The right venue depends on the asset, the chain, the audience and the liquidity available for that collection.",
    ],
    [
      "Costs and liquidity",
      "Buyers need a compatible wallet and enough funds for the NFT price, network fees and any marketplace charges.",
      "High historical volume does not guarantee that a particular collection can be sold quickly at a favorable price.",
    ],
    [
      "Choosing a venue",
      "Compare custody, contract permissions, royalties, authentication, fee structure, user experience and marketplace reputation.",
      "Never assume a listing is genuine: verify the collection contract and be cautious of approval requests that grant broad wallet permissions.",
    ],
  ],
  "how-to-interact-with-metaverses": [
    [
      "Entering a metaverse",
      "A metaverse experience may be a game, social world, virtual venue or persistent digital environment accessed through a browser, app or headset.",
      "Users typically create an identity, choose an avatar and learn the rules of the world before interacting with other participants.",
    ],
    [
      "Wallets and ownership",
      "Some environments use wallets for assets, identity or access, while others keep accounts fully within a platform.",
      "Users should understand whether an item is actually transferable, where it is stored and what happens if the platform changes its rules.",
    ],
    [
      "Activities and economies",
      "Metaverse worlds can support social spaces, games, digital commerce, events and creator economies.",
      "Virtual assets may have utility inside one world without having meaningful value outside that environment.",
    ],
    [
      "Safety and interoperability",
      "Use strong account security, verify links and avoid signing transactions you do not understand.",
      "Interoperability is improving, but differences in standards, identity systems and platform permissions still limit movement between worlds.",
    ],
  ],
  "how-does-tether-make-money": [
    [
      "Reserve yield",
      "Tether receives value when USDT is issued and invests much of its reserve portfolio in short-duration instruments such as Treasury bills.",
      "The interest earned on those reserves is the central driver of the business model because holders generally do not receive that yield.",
    ],
    [
      "Additional income",
      "Tether can earn from issuance and redemption fees, secured lending and changes in the value of assets such as gold and Bitcoin.",
      "These sources are smaller or more variable than reserve interest and may introduce additional market or credit exposure.",
    ],
    [
      "Tether versus a bank",
      "Tether issues a token designed for redemption, while a traditional bank takes deposits, lends funds and operates within a deposit-insurance system.",
      "USDT holders should not assume that holding the token provides the same protections as a bank deposit.",
    ],
    [
      "Risk and transparency",
      "Profitability can strengthen an issuer's capital cushion, but it does not remove reserve, redemption, regulatory or operational risk.",
      "Users should review attestations, reserve composition, redemption access and jurisdictional restrictions before treating a stablecoin as cash-equivalent.",
    ],
  ],
};

export const courseContentBySlug: Record<string, CourseContent> =
  Object.fromEntries(
    courses.map((course) => [
      course.slug,
      {
        id: course.id,
        lessons: lessonSeeds[course.slug].map(([title, first, second]) => ({
          title,
          content: [first, second],
        })),
      },
    ]),
  );

export function getCourseContent(slug: string): CourseContent | undefined {
  return courseContentBySlug[slug];
}
