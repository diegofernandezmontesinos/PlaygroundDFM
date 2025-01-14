import React, { useState } from "react";

const EmailValidation = () => {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(validateEmail(value) ? "" : "Email is not valid");
    setValid(/^\S+@\S+\.\S+$/.test(value));
  };
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={handleSubmit}
      />
      {error && <p> {error} </p>}
      <button disabled={!isValid}>Submit</button>
    </form>
  );
};

export default EmailValidation;
