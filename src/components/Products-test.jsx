import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";

export default function GetProductsTest() {
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
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={product.title}
                className=""
                image={product.image}
              />
              <CardContent className="bg-[#1e1e1e]">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-white text-[20px]"
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" className="text-[#929292] ">
                  Price: ${product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
