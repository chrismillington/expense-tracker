import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filterInfoText, setFilterInfoText] = useState("2019,2021 & 2022");
  // if (selectedYear === "2019") setFilterInfoText("2020,2021 & 2022");
  // else if (selectedYear === "2020") setFilterInfoText("2019,2021 & 2022");
  // if (selectedYear === "2021") setFilterInfoText("2019,2020 & 2022");
  // else setFilterInfoText("2019,2020 & 2021"); <- Old Skool way

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2019") setFilterInfoText("2020,2021 & 2022");
    else if (selectedYear === "2020") setFilterInfoText("2019,2021 & 2022");
    if (selectedYear === "2021") setFilterInfoText("2019,2020 & 2022");
    else setFilterInfoText("2019,2020 & 2021");
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p>Data for years {filterInfoText} is hidden</p>
        <ExpenseItem
          pTitle={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          pTitle={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          pTitle={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          pTitle={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}
export default Expenses;
