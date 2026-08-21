export default function Footer() {
  return (
    <div className="h-fit relative w-full text-white border-b px-4 border-gray-800 overflow-hidden">
      <div
        className="relative w-full flex justify-between flex-wrap gap-10 max-w-350
        pt-20 pb-10 sm:pb-32 border-gray-800 h-full mx-auto border-x p-4 sm:px-6"
      >
        {/* Left Section */}
        <div className="flex flex-col gap-5 sm:max-w-100 items-start">
          <div className="bg-white p-1 w-15 rounded-full">
            <img src="/logo.png" alt="Logo" />
          </div>

          <div>Subscribe to our newsletters and updates.</div>

          <div className="w-fit h-12">
            <div className="bg-[#1a1a1a] w-80 flex h-full rounded-full relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-full bg-transparent rounded-[inherit] pl-5 pr-1 py-2 placeholder:text-gray-400 placeholder:text-sm outline-0"
              />
              <div className="w-12 h-10 mt-1 mr-1 rounded-[inherit] bg-white flex items-center justify-center absolute right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            Your premier destination for crypto news and updates. Always first.
            Always exclusive.
          </div>

          <div className="text-sm text-gray-300">
            © 2026 Coin Brief. All rights reserved.
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-normal lora text-white text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/News" className="hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="/Learn" className="hover:text-white transition-colors">
                  Learn
                </a>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div className="flex flex-col gap-3">
            <h3 className="font-normal lora text-white text-sm uppercase tracking-wider">
              Blogs
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>
                <a href="/News" className="hover:text-white transition-colors">
                  Latest
                </a>
              </li>
              <li>
                <a href="/News" className="hover:text-white transition-colors">
                  Trending
                </a>
              </li>
              <li>
                <a href="/News" className="hover:text-white transition-colors">
                  web3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
