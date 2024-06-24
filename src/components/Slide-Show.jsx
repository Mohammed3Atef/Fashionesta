import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategoriesSlider() {
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    bool: true,
  };
  return (
    <div className="slider-container w-full overflow-hidden px-[50px] bg-[#fff]">
      <div className="  text-xl mb-3.5 text-bold ">
        <h3>Categories</h3>
      </div>
      <Slider {...settings}>
        {categories.map((category) => {
          return (
            <Link to={`/?category=${category.id}`}>
              <div
                key={category.id}
                className=" text-center  rounded overflow-hidden max-w-[160px]"
              >
                <img
                  src={category.thumb}
                  alt={category.name}
                  className=" max-h-[160px] w-full  mb-2"
                />
                <h3 className="text-bold">{category.name}</h3>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
