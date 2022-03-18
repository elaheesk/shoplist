import React from "react";
import ProductCard from "../components/ProductCard";
import { ContextFunction } from "../UserContext";
import {
  Grid,
  Select,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

const Products = () => {
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [categories, setCategories] = React.useState([
    "women's clothing",
    "men's clothing",
    "jewelery",
    "electronics",
  ]);

  const { products } = ContextFunction();

  React.useEffect(() => {
    if (inputValue) {
      const newProducts = products.filter((product) => {
        return inputValue === product.category;
      });
      setSelectedValue(newProducts);
    }
  }, [inputValue, products]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Typography component="h1" variant="h4" fontWeight="light" gutterBottom>
          Products
        </Typography>
      </Grid>
      <Grid item>
        <FormControl sx={{ width: 190 }}>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputValue}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="">All categories</MenuItem>
            {categories.map((cate, index) => (
              <MenuItem key={index} value={cate}>
                {cate}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Grid container>
          {selectedValue.length && inputValue !== ""
            ? selectedValue.map((selectedProduct, index) => (
                <Grid key={index} item marginRight={3} marginY={3}>
                  <ProductCard key={index} product={selectedProduct} />
                </Grid>
              ))
            : products.map((product, index) => (
                <Grid key={index} item marginRight={3} marginY={3}>
                  <ProductCard key={index} product={product} />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Products;
