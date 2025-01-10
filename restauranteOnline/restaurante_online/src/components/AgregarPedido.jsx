import React, { useState } from "react";

const AgregarPedido = () => {
  const [clientName, setClientName] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = () => {
    setIsSubmitting(true);
    setConfirmationMessage("Order sent to kitchen");
    setTimeout(() => {
      console.log("Pedido enviado:", { clientName, orderDetails });
      setIsSubmitting(false);
      setConfirmationMessage("");
    }, 2000);
  };

  const isFormValid = clientName.trim() && orderDetails.trim();

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
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </>
  );
};

export default AgregarPedido;
