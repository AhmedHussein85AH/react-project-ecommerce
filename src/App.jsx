import React, { useState } from "react";
import AllRoutes from "./allroutes/AllRoutes";
import { useNavigate } from "react-router-dom";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const { productItems } = FlashDealsData;
  const { shopItems } = ShopData;
  const { allProductsData } = AllProductsData;
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
      toast.success("Item quantity increased");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Item added to cart");
    }
  };
  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Are you sure you want to remove this item from the cart?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Item removed from cart");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Item quantity decreased");
    }
  };
  const checkOut = (cartItems) => {
  
    const loggedIn = true;

    if (loggedIn) {
      if (cartItems.length <= 0) {
        toast.error("Add an item in the cart to checkout");
      } else {
        const confirmOrder = window.confirm(
          "Are you sure you want to order all these products?"
        );

        if (confirmOrder) {
          setCartItems([]);
          toast.success("Order placed, Thanks!!");
        }
      }
    } else {
      toast("You must login first!", {
        icon: "🤯",
      });
      navigate("/login", { replace: true });
    }
  };

  const removeFromCart = (product) => {
    const shouldRemove = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );

    if (shouldRemove) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      toast.success("Item removed from cart");
    }
  };

  return (
    <>
      <Toaster />
      <AllRoutes
        removeFromCart={removeFromCart}
        productItems={productItems}
        cartItems={cartItems}
        addToCart={addToCart}
        shopItems={shopItems}
        deleteFromCart={deleteFromCart}
        checkOut={checkOut}
        allProductsData={allProductsData}
      />
    </>
  );
}

export default App;
