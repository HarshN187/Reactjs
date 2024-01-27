//we have 2 alternative approach to pass data
//where we can pass whole object in expense item parameter and write props.expense.title
//and also use object destructuring in parameter we write function ExpenseItem({title,date,amount})

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
