import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const productUrl =
    "https://api.easy-orders.net/api/v1/external-apps/products";
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${productUrl}/${productId}`, {
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
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="w-full mt-3">
      <h1 className="text-center text-bold text-3xl mb-8">{product.name}</h1>
      <div className="w-full p-[15px] border-b border-black flex flex justify-evenly items-center ">
        <img
          src={product.thumb}
          alt={product.name}
          className="max-w-[300px] h-auto object-cover block my-auto mx-0 transition-[0.3s] hover:scale-105"
        />
        <div className="max-w-[500px]">
          <p className="mb-3.5">{product.description}</p>
          <p>Price: ${product.price}</p>
          <button className="bg-green-600 text-white py-[14px] px-[30px] rounded mt-5 transition-[0.3s] hover:bg-green-500 hover:scale-105 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
