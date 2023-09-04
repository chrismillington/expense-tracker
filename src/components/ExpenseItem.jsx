import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

// Parameters broken down by Object destructuring
function ExpenseItem({ date, title, amount }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
