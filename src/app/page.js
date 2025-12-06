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
    <main>
      <div className="h-68 w-full bg-[url('/assets/bg-mobile.png')] md:bg-[url('/assets/bg-desktop.png')]">
        <div className="mx-auto max-w-5xl">
          <Header />
          <SearchBar />
          <Details />
        </div>
      </div>
      <div className="relative z-0">
        <Map />
      </div>
    </main>
  );
}
