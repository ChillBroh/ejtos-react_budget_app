import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  return (
    <div>
      <select className="alert alert-success">
        <option>Currency $ Dollar</option>
        <option>Currency £ Pound</option>
        <option>Currency € Euro</option>
        <option>Currency ₹ Ruppee</option>
      </select>
    </div>
  );
};
export default Budget;
