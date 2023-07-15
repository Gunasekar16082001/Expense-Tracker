import React from "react";
import "../App.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history-container">
      <h3>Transactions:</h3>
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-card">
          <p>Date: {transaction.date}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Type: {transaction.type}</p>
          {transaction.reason && <p>Reason: {transaction.reason}</p>}
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;