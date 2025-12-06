"use client";

import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import Details from "./components/Details";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="h-85 w-full bg-[url('/assets/bg-mobile.png')] md:bg-[url('/assets/bg-desktop.png')]">
        <Header />
        <main>
          <div className="mx-auto max-w-5xl">
            <SearchBar />
            <div className="relative z-10">
              <Details />
            </div>
          </div>
        </main>
      </div>
      <div className="relative z-0 mt-[-70px]">
        <Map />
      </div>
    </div>
  );
}
