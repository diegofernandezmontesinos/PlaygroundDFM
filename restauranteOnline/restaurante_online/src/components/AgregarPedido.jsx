import React, { useState } from "react";

const AgregarPedido = () => {
  const [clientName, setClientName] = useState("");
  const [orderDetails, setOrderDetails] = useState("");

  return (
    <>
      <h1>Agregar Pedido</h1>
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <textarea
        placeholder="Order Details"
        value={orderDetails}
        onChange={(e) => setOrderDetails(e.target.value)}
      />
      <button type="submit" disabled={!(clientName && orderDetails)}>
        Submit
      </button>
    </>
  );
};

export default AgregarPedido;
