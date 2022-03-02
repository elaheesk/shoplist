import React from "react";
import { ContextFunction } from "./UserContext";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import CheckOut from "./pages/CheckOut";
import Product from "./pages/Product";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SearchField from "./pages/SearchField";

const App = () => {
  return (
    <Grid
      //sx={{ backgroundColor: "#f5f5f5" }}
      container
      direction="column"
      padding={2}
      spacing={3}
    >
      <Grid container direction="row" item>
        <NavigationBar />
      </Grid>
      <Grid item>
        <Routes>
          <Route path="products/:id" element={<Product />} />
          <Route path="products" element={<Products />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="searchfield" element={<SearchField />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Grid>
    </Grid>
  );
};
export default App;

