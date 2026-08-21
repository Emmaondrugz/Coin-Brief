"use client";

import { Fragment, useState } from "react";
import Sparkle from "@/components/icons/Sparkle";

const categories = ["Home", "News", "Learn"];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle mobile nav
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="relative z-50 w-full border-b px-4 border-gray-200">
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
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isMobileNavOpen}
          onClick={toggleMobileNav}
          className="flex h-12 w-12 flex-col items-end justify-center gap-1.5 pr-4 lg:hidden"
        >
          <span className="h-0.75 w-7 rounded-full bg-black" />
          <span className="h-0.75 w-7 rounded-full bg-black" />
        </button>
      </header>

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isMobileNavOpen}
        className={`fixed right-0 top-28 h-screen border-t border-gray-200 w-full bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full w-full overflow-hidden border-b border-gray-200 px-4 lg:h-[80vh]">
          <div
            className="
            relative mx-auto flex h-full w-full max-w-350
            flex-col items-start overflow-hidden
            border-x border-gray-200 px-3 py-5
          "
          >
            {/* Mobile nav content */}
            <div className="flex flex-col gap-6 w-full">
              {categories.map((category) => (
                <a
                  key={category}
                  href={category == "Home" ? "/" : `/${category}`}
                  className="text-2xl font-normal lora text-black hover:text-gray-600"
                  onClick={toggleMobileNav}
                >
                  {category}
                </a>
              ))}
              <button className="mt-4 w-full rounded-sm bg-black px-6 py-3.5 text-white">
                Subscribe
              </button>
            </div>
          </div>
          {/* Mobile nav content */}
          <div className="flex flex-col gap-6 p-8 pt-12">
            {categories.map((category) => (
              <a
                key={category}
                href={category == "Home" ? "/" : `/${category}`}
                className="text-2xl font-medium text-black hover:text-gray-600"
                onClick={toggleMobileNav}
              >
                {category}
              </a>
            ))}
            <button className="mt-4 w-fit rounded-sm bg-black px-6 py-3 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
