import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  useState({
    enteredTitle: "",
  });

  const titleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
