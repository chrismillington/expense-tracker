import "./ExpenseItem.css";

function ExpenseItem(props) {
  // No Longer needed as all in props
  // const ExpenseDate = new Date(2021, 2, 28);
  // const ExpenseTitle = "Manicure Llama";
  // const ExpenseAmount = 348.99;

  return (
    <div className="expense-item">
      <p>{props.date.toISOString()}</p>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
