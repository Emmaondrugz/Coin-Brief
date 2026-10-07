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
type LessonExpansions = [string, string, string, string];

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

const lessonExpansions: Record<string, LessonExpansions> = {
  "stablecoin-reserve-requirements-explained": [
    "The reserve is distinct from the issuer's operating budget and is meant to provide assets that can be sold or transferred to satisfy valid redemption requests. Users should also check who is eligible to redeem directly, since retail holders may rely on an exchange or another intermediary.",
    "Depending on the jurisdiction, requirements may also specify who can issue a stablecoin, how reserve assets must be held and how quickly disclosures must be published. These details matter in practice because a headline backing ratio alone does not explain whether assets are accessible when users need them.",
    "A point-in-time attestation should be read with its date and scope in mind; it may not describe balances before or after that snapshot. An audit can test more processes, but readers should still review qualifications and understand that independent review is evidence, not a promise of repayment.",
    "Short maturities and readily marketable instruments can make it easier to raise cash without selling into stressed markets. Concentration in one custodian, bank or asset type can still create a single point of failure, so reserve quality includes diversification and operational access as well as asset labels.",
  ],
  "stablecoins-and-cross-border-payments": [
    "The sender first converts local money into a token through a regulated provider or exchange, then transfers it to a wallet controlled by the recipient or a payment partner. The recipient may hold the token or sell it for local currency, and each handoff can add fees or processing time.",
    "A shared ledger can make the payment status visible to both sides and reduce reliance on correspondent-bank schedules. Businesses still need to confirm the recipient address, manage conversion rates and maintain records that connect an onchain transfer to the relevant invoice or payroll obligation.",
    "A mistaken address or compromised wallet can make recovery difficult, so payment procedures should include test transfers and independent verification for larger amounts. Local partners may also lack enough liquidity at the required time, meaning a fast blockchain confirmation does not guarantee immediate cash availability.",
    "Rules can cover money transmission, custody, consumer protection, sanctions screening and tax reporting, and those obligations vary by role and location. Before launching a corridor, a business should map each provider's responsibilities and confirm that the intended users and tokens are permitted.",
  ],
  "what-is-kucoin": [
    "In an order book, buyers submit bids and sellers submit asks, with trades matching when their prices meet. KuCoin acts as an intermediary for account access and execution, so customers should distinguish the convenience of a hosted exchange from direct control of assets in a personal wallet.",
    "The displayed trading fee is only one part of the total cost: spreads, slippage, funding rates and withdrawal charges can affect the final result. Compare the fee schedule for the exact product and region, and remember that frequent trading can magnify small costs over time.",
    "Earning programs may involve lending, staking, lockups or protocol exposure, each with different terms and possible loss scenarios. Read how rewards are generated, whether withdrawals can be delayed and who controls the underlying assets before treating a quoted yield as predictable income.",
    "Use a unique password, multi-factor authentication and withdrawal allowlists where available, and verify the destination network before sending funds. These measures reduce common account risks but cannot prevent an exchange outage, a service restriction or losses caused by volatile assets and leveraged positions.",
  ],
  "what-is-a-digital-commodity": [
    "Assessing this model involves looking at how the network is governed, how tokens are issued and whether users can transact without relying on one sponsor. These characteristics are relevant context, but no single technical feature automatically decides how an asset is treated under a particular law.",
    "Legal analysis looks at the economic reality of an offer and the promises made to buyers, not just the name attached to a token. A project may change over time, so facts about fundraising, ongoing development and the role of promoters can influence how regulators assess a transaction.",
    "A product can touch both agencies' responsibilities: a token might be treated as a commodity in one context while a related investment contract or derivative falls under other rules. The exact activity, product structure and statutory authority all matter when determining which requirements apply.",
    "Statements by regulators and court decisions can help explain current interpretations, but they may be limited to specific facts. Businesses should monitor changes and seek qualified legal advice rather than assuming that a token's treatment in one sale, venue or country applies everywhere.",
  ],
  "how-asset-managers-are-investing-in-crypto": [
    "Each route has a different balance of convenience, fees, tracking, counterparty exposure and control over underlying assets. A listed fund can simplify reporting for clients, while direct holdings or private vehicles may offer different operational features that require additional custody and oversight.",
    "Before allocating, an investment committee typically evaluates liquidity, historical drawdowns, market structure and how the asset fits a portfolio's objectives. Familiarity with a product's benchmark and custody arrangements can help institutions set position limits and explain risks to clients.",
    "Controls can specify who approves trades, how private keys or fund shares are safeguarded and when exposures are reviewed. Managers also plan for market gaps, exchange failures and valuation challenges, since crypto can trade continuously while traditional investment committees operate on set schedules.",
    "New product formats may widen access, but their growth depends on reliable service providers, suitable regulation and evidence of sustained client interest. Managers are likely to compare operational benefits against added complexity before moving from familiar exchange-traded products into more customized structures.",
  ],
  "sec-vs-cftc-who-regulates-crypto": [
    "The legal question often turns on the rights conveyed and the way an asset was offered, rather than on the technology used to issue it. Disclosure rules aim to give investors material information, while enforcement can address conduct that regulators believe violates securities law.",
    "The CFTC's derivatives oversight includes requirements for registered intermediaries and trading venues, as well as market-integrity rules. A digital asset's use in a futures contract does not by itself settle the regulatory treatment of every spot transaction involving that asset.",
    "Courts and regulators may weigh different facts, including how a token is distributed, marketed and used. As a network becomes more independent, some facts may change, but that does not guarantee a particular legal result or remove requirements that apply to specific transactions.",
    "Legislation could replace some uncertainty with explicit definitions, registration categories and supervisory responsibilities. The final effect would depend on the enacted text, implementation rules and transition periods, so market participants need to track proposals without treating drafts as current law.",
  ],
  "what-are-real-world-assets-rwas": [
    "For example, a tokenized Treasury product depends on the legal fund or note behind it, not only the token contract. The blockchain record can make transfers easier to coordinate, but ownership rights still come from the governing documents and applicable law.",
    "Different asset classes have different challenges: property can be hard to divide and value, while private credit depends on borrower repayment and enforcement. Clear title, dependable pricing and a workable transfer process help determine whether a token can represent an asset in a useful way.",
    "The chain of responsibility should be documented from asset purchase through custody, issuance, transfer and redemption. If one provider fails, investors need to know which party can access the underlying asset and what legal process supports their claim.",
    "Fractional units can lower entry sizes, but they do not necessarily create a liquid secondary market or remove investor eligibility limits. Smart contracts may automate transfers, yet legal agreements and service providers remain essential to resolve errors and enforce rights.",
  ],
  "what-is-coinbases-x402-protocol": [
    "In a typical exchange, a server can respond that payment is required and include machine-readable instructions for completing it. After payment is verified, the server can deliver the requested content or service, letting the payment step fit into an ordinary web request.",
    "An agent can be authorized with a spending limit and a set of permitted services, then make small payments without asking a person to approve every request. Strong safeguards are still needed so a compromised agent cannot spend beyond its intended budget.",
    "A developer might charge for a single data lookup, an image-generation request or a short period of compute rather than require an account and monthly plan. These models are most useful when payment costs and confirmation delays remain small relative to the value delivered.",
    "Systems must handle failed requests, duplicate payments, refunds and disputes in ways users can understand. Merchants also need to verify settlement safely and account for volatility, compliance and transaction fees before relying on the protocol for production revenue.",
  ],
  "what-happens-when-bitcoin-reaches-21-million-supply": [
    "Halvings reduce new issuance at set block intervals, making the pace of new supply increasingly small over time. Nodes independently enforce the limit, so an attempted block that creates more than the permitted reward is rejected by the network.",
    "Fees are paid by users competing to include transactions in blocks, and their level can vary with demand for onchain space. A durable fee market would need enough activity and willingness to pay to compensate miners as subsidy revenue declines.",
    "Lost keys can make coins practically inaccessible, while long-term holders may choose not to sell at current prices. Estimates of liquid supply are therefore uncertain and do not change the consensus rules that determine how many bitcoin can be issued.",
    "Investors should distinguish a predictable supply schedule from a forecast about market value. Adoption and demand can change, and network security relies on miners remaining economically motivated, so both sides of the market deserve attention.",
  ],
  "what-is-the-bitcoin-lightning-network-and-how-does-it-work": [
    "A channel is funded with an onchain transaction and participants exchange signed balance updates as payments occur. Only the latest valid state needs to be settled when the channel closes, which lets users make multiple payments without placing each one in a separate Bitcoin block.",
    "Payments can pass through a route of channels without each intermediary learning the full payment details. Conditional settlement lets funds move only when the required secret is revealed before a timeout, reducing the chance that a routing participant can keep a payment without forwarding it.",
    "These properties can make small purchases and repeated transfers more practical, especially when users already have channel liquidity available. Actual costs depend on the route, channel policies and network conditions, so speed and low fees are benefits rather than guarantees.",
    "A receiver needs inbound liquidity and a sender needs outbound capacity along a usable route. Wallets can manage some complexity automatically, but users should understand backup and recovery options because losing channel state or access can complicate recovery of funds.",
  ],
  "what-is-zksync-and-how-does-it-work": [
    "During busy periods, transactions compete for scarce block space, raising fees and making small transfers less economical. Layer 2 systems aim to increase throughput while preserving a connection to Ethereum, though they introduce their own components and operational assumptions.",
    "A validity proof demonstrates that state changes follow defined rules without requiring Ethereum to execute every transaction again. The system still must publish enough data for users to reconstruct or verify state, and proof generation and verification must work reliably.",
    "The user experience depends on how funds enter and leave the network and how transaction ordering is managed. Bridge operators, sequencers and upgrade keys may hold important powers, so documentation about these roles is as relevant as the rollup's proof technology.",
    "Progress can be assessed by looking at who can sequence transactions, submit proofs, upgrade contracts and respond to emergencies. A roadmap is not the same as a distributed system; users should evaluate current controls and realistic failure scenarios.",
  ],
  "what-is-polymarket": [
    "Shares are commonly priced between zero and one unit of settlement value, so a price near one can imply that traders see an outcome as more likely. That price is shaped by available liquidity and trading incentives, and should not be interpreted as an objective probability.",
    "Participants may trade against a pool or one another, and market depth affects how much a trade moves the price. News can shift expectations quickly, while thin liquidity may make displayed odds hard to realize for larger orders.",
    "Prediction-market rules differ across countries and can depend on event types, user location and product structure. Platform restrictions may change in response to legal requirements, so users should check current eligibility and avoid assuming global availability.",
    "Resolution criteria explain what evidence determines the final result and when trading ends. Users should consider how disputes are handled, how the oracle reports outcomes and whether enough liquidity exists to exit before settlement.",
  ],
  "what-is-a-decentralized-autonomous-organizations-dao": [
    "A DAO can use onchain proposals to authorize treasury transfers or protocol changes, while many day-to-day decisions still happen through working groups and public discussion. Its practical structure is therefore a mix of software rules and human coordination.",
    "Some systems use one-token-one-vote, while others use delegation, time locks or specialized councils. These mechanisms can make participation easier, but they do not automatically prevent concentrated influence or ensure that voters have enough information.",
    "Treasury proposals should include budgets, milestones, responsible contributors and a way to report results. Separating routine spending from high-impact protocol changes can help members understand the risks and avoid approving broad, hard-to-reverse authority.",
    "Emergency controls can limit damage during an exploit, but they may also concentrate power in a small group. Good governance documents when those powers can be used, how actions are reviewed and how normal decision-making resumes afterward.",
  ],
  "what-are-the-different-nft-marketplaces": [
    "The marketplace usually coordinates listings and transactions, while ownership is recorded by a token on a blockchain. Owning the token does not always mean owning the artwork's copyright or receiving every off-platform right associated with the item.",
    "A general marketplace may offer broad discovery and liquidity, while a curated or specialized venue can offer stronger context for a particular audience. Listings and royalties may work differently across platforms, so creators and collectors should compare how each venue handles them.",
    "A token can have a high sale price in the past but no current buyers, and marketplace activity can vary sharply by collection. Buyers should factor in network fees and price uncertainty and avoid spending money they cannot afford to lose.",
    "Check that the collection address matches an official source and inspect the exact wallet permissions requested during a purchase. Revoke approvals that are no longer needed, and treat unsolicited links or lookalike collections as potential scams.",
  ],
  "how-to-interact-with-metaverses": [
    "Before joining, check device requirements, account settings and whether the experience is open to the public or requires an invitation. Clear community rules and moderation tools can make a meaningful difference to whether an environment feels safe and welcoming.",
    "A wallet-based item may be portable only if another platform supports the same token standard and chooses to recognize it. If access depends on a platform account, users may have a license to use an item rather than independent control over it.",
    "Creators can earn from events, experiences or digital goods, but revenue depends on audience demand and platform rules. Virtual currencies and items may be illiquid, and their use within a world does not imply that they can be exchanged reliably for money.",
    "Use separate wallets for experimentation, keep recovery phrases private and review every signature prompt. Interoperability also requires agreement on identity, moderation and rights, so technical compatibility alone cannot ensure that assets or avatars will work in another world.",
  ],
  "how-does-tether-make-money": [
    "When customers redeem tokens, the corresponding reserve assets may need to be converted into cash and returned through the issuer's process. Treasury yields change with interest rates and reserve composition, so income from this source can rise or fall over time.",
    "Fees can depend on transaction size, account eligibility and current issuer terms, while secured lending introduces borrower and collateral risks. Gains on other assets can fluctuate and should not be confused with recurring income from high-quality liquid reserves.",
    "Bank deposits may qualify for protections that do not apply to a privately issued stablecoin, and the redemption process is not identical to withdrawing a bank balance. The token's usability and legal rights depend on issuer terms and the user's ability to access official redemption channels.",
    "Review who prepared a disclosure, which assets and liabilities it covers and how often it is updated. Users should also consider custody arrangements and redemption limitations, since a profitable business can still face liquidity or operational stress.",
  ],
};

export const courseContentBySlug: Record<string, CourseContent> =
  Object.fromEntries(
    courses.map((course) => [
      course.slug,
      {
        id: course.id,
        lessons: lessonSeeds[course.slug].map(
          ([title, first, second], index) => ({
            title,
            content: [first, second, lessonExpansions[course.slug][index]],
          }),
        ),
      },
    ]),
  );

export function getCourseContent(slug: string): CourseContent | undefined {
  return courseContentBySlug[slug];
}
