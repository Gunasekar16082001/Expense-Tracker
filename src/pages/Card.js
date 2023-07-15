import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Balance from "../components/Balance";
import Input from "../components/Input";
import TransactionHistory from "../components/TransactionHistory";
import Navbar from "./Navbar";
import "../App.css";

const Card = () => {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? parseInt(storedBalance) : 0;
  });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("balance", balance.toString());
  }, [balance]);

  const handleAddBalance = (amount, reason) => {
    const parsedAmount = parseInt(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      if (!reason) {
        toast.error("Please provide a reason for the transaction!");
        return;
      }

      const updatedBalance = balance + parsedAmount;
      setBalance(updatedBalance);

      const newTransaction = {
        date: new Date().toLocaleString(),
        amount: parsedAmount,
        type: "Add",
        reason: reason,
      };
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );

      toast.success("Balance added successfully!");
    }
  };

  const handleRemoveBalance = (amount, reason) => {
    const parsedAmount = parseInt(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0 && parsedAmount <= balance) {
      if (!reason) {
        toast.error("Please provide a reason for the transaction!");
        return;
      }

      const updatedBalance = balance - parsedAmount;
      setBalance(updatedBalance);

      const newTransaction = {
        date: new Date().toLocaleString(),
        amount: parsedAmount,
        type: "Remove",
        reason: reason,
      };
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem(
        "transactions",
        JSON.stringify(updatedTransactions)
      );

      toast.success("Balance removed successfully!");
    } else if (balance === 0) {
      toast.warn("Your balance is already zero.");
    } else {
      toast.error("Insufficient balance!");
    }
  };

  const handleRefreshTransactions = () => {
    setTransactions([]);
    localStorage.removeItem("transactions");
  };

  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Navbar handleRefreshTransactions={handleRefreshTransactions} />
      <div className="grid-container">
        <div className="card-container">
          <Balance balance={balance} />
          <Input
            handleAddBalance={handleAddBalance}
            handleRemoveBalance={handleRemoveBalance}
          />
        </div>
        <div className="card-container">
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Card;
