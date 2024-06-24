import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between bg-[#65666b] text-[wheat] items-center px-[15px]  lg:px-[100px] py-[15px]">
      <Link to="/" className="text-3xl mb-2 lg:mb-0">
        3al Moda
      </Link>
      <div className="flex flex-1 w-full md:ml-[30px] lg:ml-[100px] relative items-center">
        <input
          className="w-[90%]  p-[15px] rounded-lg focus:outline-none	text-[15px] text-[black]"
          type="text"
          placeholder="Search here"
        />
        <i className=" cursor-pointer absolute text-xl text-[#65666b] -translate-y-2/4 right-[95px] top-2/4">
          <FaSearch />
        </i>
        <i className="text-[40px] ml-[30px] cursor-pointer">
          <IoCartOutline />
        </i>
      </div>
    </div>
  );
}
