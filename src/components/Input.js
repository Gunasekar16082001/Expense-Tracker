import React, { useState } from "react";
import "../App.css";

const Input = ({ handleAddBalance, handleRemoveBalance }) => {
  const [inputValue, setInputValue] = useState("");
  const [reasonValue, setReasonValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReasonValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    handleAddBalance(inputValue, reasonValue);
    setInputValue("");
    setReasonValue("");
  };

  const handleRemoveButtonClick = () => {
    handleRemoveBalance(inputValue, reasonValue);
    setInputValue("");
    setReasonValue("");
  };

  return (
    <div className="input-container">
      <form>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <input
            type="text"
            id="reason"
            value={reasonValue}
            onChange={handleReasonChange}
            placeholder="Enter reason"
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleAddButtonClick}>Add</button>
          <button type="button" onClick={handleRemoveButtonClick}>Remove</button>
        </div>
      </form>
    </div>
  );
};

export default Input;
