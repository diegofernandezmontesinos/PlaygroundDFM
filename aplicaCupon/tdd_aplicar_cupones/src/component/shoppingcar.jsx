import React, { useState } from "react";

const ShoppingCar = ({ onAddNumber, onAddCoupon }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputCupon, setInputCupon] = useState("");

  const handleAddNumber = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      setItems((prev) => [...prev, value]);
      setTotal((prev) => prev + value);
    }

    setInputValue("");
  };

  const handleCupon = () => {
    if (inputCupon.endsWith("EUROSOFF")) {
      const fixedDiscount = parseFloat(inputCupon.replace("EUROSOFF", ""));
      if (!isNaN(fixedDiscount)) {
        setTotal(Math.max(0, total - fixedDiscount));
      }
    } else if (inputCupon.endsWith("%OFF")) {
      const percentageDiscount = parseFloat(inputCupon.replace("%OFF", ""));
      if (!isNaN(percentageDiscount)) {
        const discountAmount = (total * percentageDiscount) / 100;
        setTotal(Math.max(0, total - discountAmount));
      }
    }
    setInputCupon("");
  };

  return (
    <>
      <h2>Shopping Car</h2>
      <p>Total: €{total.toFixed(2)}</p>
      <input
        type="text"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add number</button>
      <input
        type="text"
        placeholder="Enter a cupon"
        value={inputCupon}
        onChange={(e) => setInputCupon(e.target.value)}
      />
      <button onClick={handleCupon}>Add a cupon</button>

      <ul>
        {items.map((item, index) => {
          <li key={index}>€ {item.toFixed(2)} </li>;
        })}
      </ul>
    </>
  );
};

export default ShoppingCar;
