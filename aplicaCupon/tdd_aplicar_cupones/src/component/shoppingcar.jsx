import React from "react";

const ShoppingCar = ({ onAddNumber, onAddCoupon }) => {
  return (
    <>
      <h2>Shopping Car</h2>
      <input type="text" placeholder="Enter a number" />
      <button onClick={onAddNumber}>Add number</button>
      <input type="text" placeholder="Enter a cupon" />
      <button onClick={onAddCoupon}>Add a cupon</button>
    </>
  );
};

export default ShoppingCar;
