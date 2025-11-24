import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
// import GetUserInfo from "./api/routs";

export default function Home() {
  return (
    <div>
      <div className="h-110 w-full bg-[url('/assets/bg-mobile.png')]">
        <Header />
        <SearchBar />
      </div>
      {/* <GetUserInfo ip="199.232.154.5" /> */}
    </div>
  );
}
