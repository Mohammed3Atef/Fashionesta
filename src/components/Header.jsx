import SearchBar from "./Search-Bar";
import Categories from "./Categories";
import FixedBottomNavigation from "./Bottom-Nav";

export default function Header() {
  return (
    <div className="">
      <SearchBar />
      <Categories />
      <FixedBottomNavigation />
    </div>
  );
}
