import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: $</span>{" "}
      <input
        type="number"
        defaultValue={budget}
        onChange={(e) => e.target.value}
      />
    </div>
  );
};
export default Budget;
