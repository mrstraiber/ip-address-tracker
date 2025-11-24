"use client";
import { useState } from "react";
import Image from "next/image";
export default function SearchBar() {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Search for any IP address" />
          <button>
            <span>
              <Image
                src="/assets/icon-arrow.svg"
                alt="icons arrow"
                width={10}
                height={10}
              />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
