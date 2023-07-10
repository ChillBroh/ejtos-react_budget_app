import React, { useContext } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.cost}</td>
      <td>
        <BsPlusCircleFill
          onClick={(event) => increaseAllocation(props.name)}
          style={{ color: "green", fontSize: "30px" }}
        />
      </td>
      <td>
        <AiFillMinusCircle
          style={{ color: "red", fontSize: "30px" }}
          onClick={(event) => decreaseAllocation(props.name)}
        ></AiFillMinusCircle>
      </td>
      <td>
        <AiFillMinusCircle
          style={{ color: "red", fontSize: "30px" }}
          onClick={handleDeleteExpense}
        ></AiFillMinusCircle>
      </td>
    </tr>
  );
};
export default ExpenseItem;
