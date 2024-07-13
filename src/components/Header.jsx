import SearchBar from "./Search-Bar";
import Categories from "./Categories";
import FixedBottomNavigation from "./Bottom-Nav";

export default function Header() {
  return (
    <div className="fixed w-full top-0 z-20">
      <SearchBar />
      {/* <Categories /> */}
      {/* <FixedBottomNavigation /> */}
    </div>
  );
}
