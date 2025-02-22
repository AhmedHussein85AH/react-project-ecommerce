import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="huge-discounts background">
        <div className="container">
          <div className="heading">
            <img
              src="https://img.icons8.com/windows/32/fa314a/gift.png"
              alt="huge-discount-logo"
            />
            <h2>Huge Discounts</h2>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
