export default function Categories() {
  const categories = [
    "Offers",
    "Shirt",
    "T-Shirt",
    "Sweatpants",
    "Chino Pants",
    "Jeans",
    "Hodi",
    "Jacket",
    "Pullover",
  ];
  return (
    <div className="shadow-[0px_4px_11px_0px_#00000045] px-[100px] hidden lg:block ">
      <ul className="flex justify-between items-center ">
        {categories.map((category) => {
          return (
            <li className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110">
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
