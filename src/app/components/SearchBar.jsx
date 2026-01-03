"use client";
import { useState } from "react";
import Image from "next/image";

export default function SearchBar({ handleFetchData, showErrorMessage }) {
  const [userInput, setUserInput] = useState("");

  // IP Address Format
  const ipFormat =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  function handleSubmit(e) {
    // prevent the app from re-loading
    e.preventDefault();

    // check if the user enter a valid ip address, and if it does we will fetch the data, otherwise we'll display the error message
    ipFormat.test(userInput) ? handleFetchData(userInput) : showErrorMessage();
  }

  function handleChange(e) {
    // store user input changes into a variable and remove extra space if exist
    const value = e.target.value.trim();

    // update the state
    setUserInput(value);
  }

  return (
    <div className="px-4 pt-10">
      <form className="flex flex-row justify-center" onSubmit={handleSubmit}>
        <input
          className="h-12 w-[400px] rounded-l-lg border bg-white px-5 shadow-sm focus:ring-black focus:outline-none md:w-120"
          type="text"
          placeholder="Search for any IP address"
          value={userInput}
          onChange={handleChange}
        />

        <button className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-r-lg rounded-tr rounded-br bg-black transition hover:cursor-pointer hover:bg-gray-600">
          <Image src="/assets/icon-arrow.svg" alt="icons arrow" width={14} height={14} />
        </button>
      </form>
    </div>
  );
}
