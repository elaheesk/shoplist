import React, { useState } from "react";
import { ContextFunction } from "../UserContext";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

const Product = () => {
  const { products } = ContextFunction();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await resp.json();

      const addNewProperties = { ...data, liked: false, amount: 0 };

      setProduct(addNewProperties);

      //setProduct(data);
      console.log(addNewProperties, "addNewPropertyOBJECT");
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    if (product) {
      const obj = products.find((prod) => prod?.id === product?.id);
      setProduct(obj);
    }
  }, [products]);
  console.log(product, "PRODUCT");
  return (
    <Grid item xs={2} sm={4} md={4}>
      {product && (
        <Grid item>
          <ProductCard product={product} />
        </Grid>
      )}
    </Grid>
  );
};
export default Product;
