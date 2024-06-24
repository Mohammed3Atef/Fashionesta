import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.easy-orders.net/api/v1/external-apps/categories", {
      headers: {
        "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the relevant information
        const categoriesData = data.map((category) => ({
          name: category.name,
          thumb: category.thumb,
          id: category.id,
        }));
        setCategories(categoriesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="shadow-[0px_4px_11px_0px_#00000045] px-[100px] hidden lg:block ">
      <ul className="flex gap-10 items-center justify-center ">
        <Link to={`/`}>
          <li className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110">
            All
          </li>
        </Link>
        {categories.map((category) => {
          return (
            <Link to={`/?category=${category.id}`}>
              <li
                key={category.id}
                categoryId={category.id}
                className=" text-xl py-[15px] cursor-pointer transition-[0.3s] hover:border-b hover:border-[black] hover:scale-110"
              >
                {category.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
