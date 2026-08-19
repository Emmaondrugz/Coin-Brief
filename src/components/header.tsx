import { Fragment } from "react";
import Sparkle from "@/components/icons/Sparkle";

const categories = ["Home", "News", "Learn"];

export default function Header() {
  return (
    <div className="w-full border-b px-4 border-gray-200">
      <header
        className="w-full flex items-center justify-between max-w-350 py-3 sm:py-4 
      border-gray-200 mx-auto border-x px-1 md:px-4"
      >
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img src="/logo.png" alt="Coin Brief Logo" className="w-12" />
          <div className="sm:text-xl text-lg lora">Coin Brief</div>
        </div>

        {/* Categories */}
        <div className="lg:flex hidden items-center gap-5">
          {categories.map((category, index) => (
            <Fragment key={category}>
              {index > 0 && <Sparkle className="w-3 text-black" />}
              <a
                href={category == "Home" ? "/" : `/${category}`}
                className="text-black"
              >
                {category}
              </a>
            </Fragment>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="lg:flex hidden">
          <button className="w-fit h-fit rounded-sm bg-black text-white py-[1.7px] pb-1 pl-[1.5px] pr-0.5">
            <div className="h-9.5 rounded-xs px-2 gap-2 border-t border-gray-400 w-35 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]">
              Subscribe
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex w-12 h-12 pr-4 flex-col items-end justify-center gap-1.5">
          <div className="w-7 h-0.75 bg-black rounded-full"></div>
          <div className="w-7 h-0.75 bg-black rounded-full"></div>
        </div>
      </header>
    </div>
  );
}
