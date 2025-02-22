import { Routes, Route } from "react-router-dom";
import "../App.css";
import Cartpage from "../pages/cartpage/Cartpage";
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";
import Registrationpage from "../pages/registrationpage/Registrationpage";
import Allproductspage from "../pages/all-productspage/Allproductspage";
import Singleproductpage from "../pages/product-details/Singleproductpage";
import ErrorNotFound from "../components/ErrorNotFoundPage/ErrorNotFound";
import ScrollToTop from "../components/ScrollToTop";

const AllRoutes = ({
  productItems,
  cartItems,
  addToCart,
  shopItems,
  deleteFromCart,
  checkOut,
  removeFromCart,
  allProductsData,
}) => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              productItems={productItems}
              cartItems={cartItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cartpage
              cartItems={cartItems}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              checkOut={checkOut}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/login" element={<Loginpage cartItems={cartItems} />} />
        <Route
          path="/registration"
          element={<Registrationpage cartItems={cartItems} />}
        />
        <Route
          path="/all-products"
          element={
            <Allproductspage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/all-products/:id"
          element={
            <Singleproductpage
              cartItems={cartItems}
              allProductsData={allProductsData}
              addToCart={addToCart}
            />
          }
        />
        <Route path="*" element={<ErrorNotFound cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
