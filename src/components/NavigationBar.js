import React from "react";
import {Grid, Skeleton, Typography, Badge, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {Favorite as FavoriteIcon} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {ContextFunction} from "../UserContext";

const NavigationBar = () => {
  const {
    favouriteProducts,
    countTotalLikes,
    countTotalAmountProducts,
    totalPriceAllProducts,
    checkOutProducts,
  } = ContextFunction();

  return (
    <Grid container justifyContent="space-between"  >
      <Grid item>
       <Typography fontWeight={"light"} variant="body" sx={{marginRight: 3}}>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </Typography>

        <Typography fontWeight={"light"} variant="body" sx={{marginRight: 3}}>
          <Link component={RouterLink} to="searchfield">
            Search
          </Link>
        </Typography>
        <Typography fontWeight={"light"} variant="body" sx={{marginRight: 1}}>
          <Link component={RouterLink} to="products">
            Proucts
          </Link>
        </Typography>
        <Typography fontWeight={"light"} variant="body" sx={{marginLeft: 2}}>
          <Link component={RouterLink} to="favourites">
            Favourites
          </Link>
        </Typography>
        <Badge color="secondary" badgeContent={countTotalLikes}>
          {favouriteProducts.length ? (
            <FavoriteIcon style={{fill: "red"}} fontSize="small" />
          ) : (
            <FavoriteIcon style={{fill: "gray"}} fontSize="small" />
          )}
        </Badge>
        <Typography fontWeight={"light"} variant="body" sx={{marginLeft: 2}}>
          <Link component={RouterLink} to="checkout">
            CheckOut
          </Link>
        </Typography>
        <Badge color="secondary" badgeContent={countTotalAmountProducts}>
          <ShoppingCartIcon fontSize="small" />
        </Badge>
      </Grid>
      <Grid item>
        {checkOutProducts.length ? (
          <Skeleton
            sx={{position: "fixed", top: 0, right: 0}}
            elevation={3}
            width="10%"
            height={40}
            variant="rectangular"
          >
            Subtotal: ${totalPriceAllProducts.toFixed(2)}
          </Skeleton>
        ) : null}
      </Grid>
    </Grid>
  );
};
export default NavigationBar;