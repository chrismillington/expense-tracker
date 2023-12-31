import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem({ date, pTitle, amount }) {
  const [title, setTitle] = useState(pTitle);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
