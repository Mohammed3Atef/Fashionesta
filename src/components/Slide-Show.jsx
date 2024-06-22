import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategoriesSlider() {
  const Categories = [
    {
      category: "Sweatpants",
      imageUrl: "https://files.easy-orders.net/1714440092441332325.jpg",
      id: 1,
    },
    {
      category: "T-Shirt",
      imageUrl: "https://files.easy-orders.net/1712271926203762648.jpg",
      id: 2,
    },
    {
      category: "Chino Pants",
      imageUrl: "https://files.easy-orders.net/1702498816543921663.jpg",
      id: 3,
    },
    {
      category: "Shoes",
      imageUrl: "https://files.easy-orders.net/1715795524475163917.png",
      id: 4,
    },
    {
      category: "Jeans",
      imageUrl: "https://files.easy-orders.net/1714439721304437474.jpg",
      id: 5,
    },
    {
      category: "Shirt",
      imageUrl: "https://files.easy-orders.net/1716303135641164615.png",
      id: 6,
    },
    {
      category: "Hodi",
      imageUrl: "https://files.easy-orders.net/1702147201207128236.jpg",
      id: 7,
    },
    {
      category: "Jacket",
      imageUrl: "https://files.easy-orders.net/1704581391990909111.jpg",
      id: 8,
    },
    {
      category: "Pullover",
      imageUrl: "https://files.easy-orders.net/1708275507120778767.png",
      id: 9,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    bool: true,
  };
  return (
    <div className="slider-container w-full overflow-hidden px-[50px] bg-[#fff]">
      <div className="  text-xl mb-3.5 text-bold ">
        <h3>Categories</h3>
      </div>
      <Slider {...settings}>
        {Categories.map((category) => {
          return (
            <div
              key={category.id}
              className=" text-center  rounded overflow-hidden max-w-[160px]"
            >
              <img
                src={category.imageUrl}
                alt={category.category}
                className=" max-h-[160px] w-full  mb-2"
              />
              <h3 className="text-bold">{category.category}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
