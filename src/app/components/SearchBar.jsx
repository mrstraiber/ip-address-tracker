"use client";
import { useState } from "react";
import Image from "next/image";
export default function SearchBar() {
  const [userInput, setUserInput] = useState("");

  function handleSubnit(e) {
    e.preventDefault();
  }

  return (
    <div className="px-4 pt-10">
      <form className="flex flex-row justify-center" onSubmit={handleSubnit}>
        <input
          className="h-12 w-[400px] rounded-l-lg border bg-white px-5 shadow-sm focus:ring-black focus:outline-none md:w-120"
          type="text"
          placeholder="Search for any IP address"
          // value={userInput}
          onChange={(e) => {
            console.log(Number(e.target.value));
          }}
        />

        <button className="flex h-12 w-16 items-center justify-center rounded-r-lg rounded-tr rounded-br bg-black transition hover:cursor-pointer hover:bg-gray-600">
          <Image
            src="/assets/icon-arrow.svg"
            alt="icons arrow"
            width={14}
            height={14}
          />
        </button>
      </form>
    </div>
  );
}
