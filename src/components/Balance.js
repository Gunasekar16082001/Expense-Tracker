import React from "react";
import "../App.css";

const Balance = ({ balance }) => {
  return (
    <div className="balance-container">
      <p>Balance: {balance} Rupies</p>
    </div>
  );
};

export default Balance;
