import React from "react";
import "../App.css";

const Navbar = ({ handleRefreshTransactions }) => {
  return (
    <div className="navbar">
      <h1>Expense Tracker</h1>
      <div className="navbar-buttons">
        <button onClick={handleRefreshTransactions}>Refresh all transaction</button>
      </div>
    </div>
  );
};

export default Navbar;
