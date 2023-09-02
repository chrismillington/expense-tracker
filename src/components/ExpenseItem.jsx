import "./ExpenseItem.css";

function ExpenseItem() {
  const ExpenseDate = new Date(2021, 2, 28);
  const ExpenseTitle = "Manicure Llama";
  const ExpenseAmount = 348.99;

  return (
    <div className="expense-item">
      <p>{ExpenseDate.toISOString()}</p>
      <div className="expense-item__description">
        <h2>{ExpenseTitle}</h2>
        <div className="expense-item__price">£{ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
