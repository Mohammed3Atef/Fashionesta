import FixedBottomNavigation from "./Bottom-Nav";
import Categories from "./Categories";
import ImgMediaCard from "./Products-test";
import SearchBar from "./Search-Bar";

export default function Header() {
  return (
    <div className="">
      <SearchBar />
      <Categories />
      <FixedBottomNavigation />
    </div>
  );
}
