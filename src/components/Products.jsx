import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");

    let url = "https://api.easy-orders.net/api/v1/external-apps/products";
    if (category) {
      url = url + "?category_id=" + category;
    }
    fetch(url, {
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
        const productData = data.map((product) => ({
          name: product.name,
          thumb: product.thumb,
          price: product.price,
          id: product.id,
        }));
        setProducts(productData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error);
        setLoading(false);
      });
  }, [searchParams]);

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
        <Link to={`/Form`}>
          <button>Add Product</button>
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5  ">
        {products.map((product, index) => (
          <Link
            to={`/product/${product.id}`}
            key={index}
            className="  p-[15px] border-b  border-black flex flex-col justify-between cursor-pointer"
          >
            <div className="max-w-full h-auto  overflow-hidden block my-auto mx-0 	">
              <img
                src={product.thumb}
                alt={product.name}
                className="w-full	transition-[0.3s] hover:scale-105"
              />
            </div>

            <div className=" ">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
