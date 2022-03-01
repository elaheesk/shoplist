import React, { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [countTotalAmountProducts, setCountTotalAmountProducts] = useState(0);
  const [countTotalLikes, setCountTotalLikes] = useState(0);
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [totalPriceAllProducts, setTotalPriceAllProducts] = useState(0);
  const [checkOutProducts, setCheckOutProducts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      const addNewProperty = data.map((product) => {
        return { ...product, liked: false, amount: 0 };
      });
      setProducts(addNewProperty);

      console.log(addNewProperty);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const myFavouriteProducts = products.filter((product) => {
      if (product.liked === true) {
        return product;
      }
    });
    setFavouriteProducts(myFavouriteProducts);
  }, [products]);

  useEffect(() => {
    const mycheckoutProducts = products.filter((product) => {
      if (product.amount > 0) {
        return product;
      }
    });
    setCheckOutProducts(mycheckoutProducts);
  }, [products]);

  useEffect(() => {
    calculateTotal();
    calculateTotalLikes();
    calculatePriceAllProducts();
  });

  const likeProduct = (likedProd) => {
    const changePropertyValue = products.map((product) => {
      if (likedProd.id === product.id) {
        return { ...product, liked: !product.liked }; //här ändrar vi värdet till motsatsen av defaultvärdet av liked. om liked är true ändras det till motsatsen false, om liked är false ändras det till motstsen true. liked: !product.liked
      } else {
        return product;
      }
    });
    setProducts(changePropertyValue);
  };

  const calculateTotal = () => {
    const countTotalAmountProducts = products.reduce((total, product) => {
      return total + product.amount;
    }, 0);
    setCountTotalAmountProducts(countTotalAmountProducts);
  };

  const calculateTotalLikes = () => {
    const countTotalLikes = favouriteProducts.reduce((total, product) => {
      return total + product.liked;
    }, 0);
    setCountTotalLikes(countTotalLikes);
  };

  const calculatePriceAllProducts = () => {
    const totalPriceAllProducts = products.reduce((total, prod) => {
      return (total += prod.price * prod.amount);
    }, 0);

    setTotalPriceAllProducts(totalPriceAllProducts);
  };
  const subTotalSingleProduct = () => {
    const newPrice = products.map((prod) => {
      return prod.price * prod.amount;
    });
    calculatePriceAllProducts();
  };

  const increaseProductAmount = (increasedProd) => {
    const increasedAmountProducts = products.map((product) => {
      if (increasedProd.id === product.id) {
        return { ...product, amount: product.amount + 1 };
      } else {
        return product;
      }
    });
    setProducts(increasedAmountProducts);
    subTotalSingleProduct();

    calculateTotal();
    calculatePriceAllProducts();
  };

  const decreaseProductAmount = (decreasedProd) => {
    const decreasedAmountProducts = products.map((product) => {
      if (decreasedProd.id === product.id) {
        return { ...product, amount: product.amount - 1 };
      } else {
        return product;
      }
    });
    setProducts(decreasedAmountProducts);
    calculateTotal();
    calculatePriceAllProducts();
  };
  // const contextValues = {
  //   products,
  //   setProducts,
  //   increaseProductAmount,
  //   decreaseProductAmount
  // };
  return (
    <UserContext.Provider
      value={{
        products,
        setProducts,
        increaseProductAmount,
        decreaseProductAmount,
        countTotalAmountProducts,
        countTotalLikes,
        setCountTotalAmountProducts,
        totalPriceAllProducts,
        setTotalPriceAllProducts,
        likeProduct,
        favouriteProducts,
        setFavouriteProducts,
        checkOutProducts,
        setCheckOutProducts
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export const ContextFunction = () => {
  return useContext(UserContext);
};
export default UserContext;
