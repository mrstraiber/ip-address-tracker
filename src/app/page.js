import Details from "./components/Details";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="h-110 w-full bg-[url('/assets/bg-mobile.png')] md:bg-[url('/assets/bg-desktop.png')]">
        <Header />

        <main className="m-auto max-w-5xl">
          <SearchBar />
          <Details />
        </main>
      </div>
    </>
  );
}
