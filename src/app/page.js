"use client";

import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import Details from "./components/Details";
import GetUserInfo from "./api/GetUserInfo";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function Home() {
  const [errorInput, setErrorInput] = useState(false);
  const [errorIp, setErrorIp] = useState(false);
  const [isSubmited, setIsSubmited] = useState("");
  const [data, setData] = useState("");
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  // handle fetch data
  function handleFetchData(userInput) {
    // we hide the error message if it's in the UI
    setErrorInput(false);
    setErrorIp(false);
    // update the submited state that the form is succesfully submited to trigger the useEffect so it can fetch data from API
    setIsSubmited(userInput);
  }

  // fetch user info
  useEffect(() => {
    // as a default if the form is not submited yet return
    if (!isSubmited) return;

    async function LoadUser() {
      try {
        // fetch data
        const result = await GetUserInfo(isSubmited);

        // update the state with result
        setData(result);
        if (result?.error) setErrorIp(true);
      } catch (err) {
        // if theres an error we update the error state
        setServerErrorMessage(err.message);
      }
    }

    LoadUser();
  }, [isSubmited]);

  // if the ip format is invalide or dosen't exist we will display the error message
  function showErrorMessage() {
    setErrorInput(true);
  }

  // handle close message button
  function handleErrorCloseButton() {
    setErrorInput(false);
    setErrorIp(false);
    setServerErrorMessage("");
  }

  return (
    <main>
      <div className="h-68 w-full bg-[url('/assets/bg-mobile.png')] max-[340px]:h-74 md:bg-[url('/assets/bg-desktop.png')]">
        <div className="mx-auto max-w-5xl">
          <Header />
          <SearchBar handleFetchData={handleFetchData} showErrorMessage={showErrorMessage} />

          {/* if the user enter worng ip address format we will display a warning */}
          {errorInput && (
            <ErrorMessage handleErrorCloseButton={handleErrorCloseButton}>
              Invalid IP address. Please enter a valid IP address. (For example: 203.0.113.14)
            </ErrorMessage>
          )}

          {/* if the ip address format is correct BUT it's doesn't exist */}
          {errorIp && (
            <ErrorMessage handleErrorCloseButton={handleErrorCloseButton}>
              This IP [{isSubmited}], doesn t exist
            </ErrorMessage>
          )}

          {/* if the ip address format is correct BUT something happen during fetching data we will display that error to the user */}
          {serverErrorMessage && (
            <ErrorMessage handleErrorCloseButton={handleErrorCloseButton}>
              {serverErrorMessage}
            </ErrorMessage>
          )}

          <Details data={data} />
        </div>
      </div>
      <div className="relative z-0">
        <Map data={data} />
      </div>
    </main>
  );
}
