export default function Categories() {
  const categories = [
    {
      CategoryName: "Offers",
      id: 1,
    },
    {
      CategoryName: "Shirt",
      id: 2,
    },
    {
      CategoryName: "T-Shirt",
      id: 3,
    },
    {
      CategoryName: "Sweatpants",
      id: 4,
    },
    {
      CategoryName: "Chino Pants",
      id: 5,
    },
    {
      CategoryName: "Jeans",
      id: 6,
    },
    {
      CategoryName: "Hodi",
      id: 7,
    },
    {
      CategoryName: "Jacket",
      id: 8,
    },
    {
      CategoryName: "Pullover",
      id: 9,
    },
  ];
  return (
    <div className="shadow-[0px_4px_11px_0px_#00000045] px-[100px] hidden lg:block ">
      <ul className="flex justify-between items-center ">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110"
            >
              {category.CategoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
