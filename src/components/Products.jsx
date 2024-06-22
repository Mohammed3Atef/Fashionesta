import React, { useEffect, useState } from "react";

export default function GetProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Extract the relevant information
        const productData = data.map((product) => ({
          title: product.title,
          image: product.image,
          price: product.price,
        }));
        setProducts(productData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-[15px] lg:px-[100px]">
      <div className="flex justify-between p-[15px]  shadow-[0px_4px_11px_0px_#00000045] mb-3.5 ">
        <h3>New Arrive</h3>
        <span>More!</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5  ">
        {products.map((product, index) => (
          <div
            key={index}
            className="  p-[15px] border-b border-black flex flex-col justify-between cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full h-auto object-cover block my-auto mx-0 transition-[0.3s] hover:scale-105	"
            />
            <div className=" ">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
