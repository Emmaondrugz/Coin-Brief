import Image from "next/image";

const categories = [
  {
    name: "Business",
    image: "/business.avif",
    description:
      "Insights, developments, and major stories shaping the business side of crypto.",
  },
  {
    name: "Deals",
    image: "/deals.avif",
    description:
      "Funding rounds, acquisitions, partnerships, and other major crypto deals.",
  },
  {
    name: "DeFi",
    image: "/defi.avif",
    description:
      "The latest developments across decentralized finance protocols",
  },
  {
    name: "Ecosystems",
    image: "/eco.avif",
    description:
      "News and developments across blockchain networks and its communities",
  },
  {
    name: "Macro",
    image: "/macro.avif",
    description:
      "How global economic trends, monetary policy, and markets affect crypto.",
  },
  {
    name: "Markets",
    image: "/markets.avif",
    description:
      "Crypto prices, trading activity, market movements, and emerging market trends.",
  },
  {
    name: "Regulations",
    image: "/regulatory.avif",
    description:
      "Updates on crypto laws, policies, regulators, and the legal landscape.",
  },
  {
    name: "Web3",
    image: "/web3.avif",
    description:
      "Stories covering Web3, NFTs, decentralized applications, and the future.",
  },
];

export default function Category() {
  return (
    <div className="relative w-full h-fit border-b px-4 border-gray-200 overflow-hidden">
      <div
        className="relative w-full flex flex-col items-start h-full max-w-350
        sm:pt-10 border-gray-200 mx-auto pb-20 sm:pb-32 border-x pl-4 py-4 sm:px-6"
      >
        {/* Heading */}
        <div className="flex w-full items-center gap-4 sm:pr-0 pr-4">
          <div className="whitespace-nowrap sm:text-4xl text-2xl lora">
            News By Category
          </div>

          <div className="h-px flex-1 bg-black" />
        </div>

        <div
          className="flex sm:grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
  gap-4 sm:gap-10 mt-10 overflow-x-auto sm:overflow-visible pl-10 pr-5 sm:mx-0 sm:px-0
  snap-x snap-mandatory sm:snap-none scrollbar-hide"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="overflow-hidden shrink-0 w-[85%] xs:w-[60%] sm:w-auto snap-start"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/100 mix-blend-saturation" /> */}

                {/* Read More Button */}
                <div className="absolute bottom-0 right-0 flex items-center gap-3 bg-white px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="py-4">
                <h3 className="text-2xl lora font-medium">{category.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
