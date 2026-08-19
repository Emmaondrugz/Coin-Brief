import Header from "@/components/header";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Category from "@/components/category";
import Latest from "@/components/Latest";
import Trending from "@/components/trending";
import Footer from "@/components/footer";
import Events from "@/components/events";

export default function Home() {
  return (
    <div className="flex flex-col inter w-full flex-1 bg-white">
      {/*
        Ticker and header pin together as one unit. They share a wrapper rather
        than each being sticky, which would let the header slide up underneath
        the ticker. bg-white matters too — neither sets its own background, so
        without it the page content would scroll through them.
      */}
      <div className="sticky top-0 z-50 bg-white">
        <Ticker />
        <Header />
      </div>
      <Hero />
      <Latest />
      <Category />
      {/* Trending Now — mobile only, sits below the posts list */}
      <div className="lg:hidden relative w-full border-b px-4 border-gray-200 overflow-hidden">
        <div
          className="relative w-full flex flex-col items-start max-w-350
        sm:pt-10 sm:pb-6 border-gray-200 mx-auto border-x p-4 sm:px-6"
        >
          <Trending />
        </div>
      </div>

      <div className="w-full bg-black">
        <Footer />
      </div>
    </div>
  );
}
