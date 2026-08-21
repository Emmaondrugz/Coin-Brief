"use client";

import { Fragment, useState } from "react";
import Sparkle from "@/components/icons/Sparkle";

const categories = ["Home", "News", "Learn"];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
          onClick={() => setIsMobileNavOpen(true)}
          className="flex h-12 w-12 flex-col items-end justify-center gap-1.5 pr-4 lg:hidden"
        >
          <span className="h-0.75 w-7 rounded-full bg-black" />
          <span className="h-0.75 w-7 rounded-full bg-black" />
        </button>
      </header>

      <div
        aria-hidden={!isMobileNavOpen}
        onClick={() => setIsMobileNavOpen(false)}
        className={`fixed inset-0 bg-black/20 transition-opacity duration-300 lg:hidden ${
          isMobileNavOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!isMobileNavOpen}
        className={`fixed right-0 top-0 h-dvh w-[min(22rem,85vw)] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileNavOpen(false)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center"
        >
          <span className="absolute h-px w-6 rotate-45 bg-black" />
          <span className="absolute h-px w-6 -rotate-45 bg-black" />
        </button>
      </aside>
    </div>
  );
}
