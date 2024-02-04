import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

//if every expenseitem are called they have there own useState, State is seperated
//it refresh only that component which have that hook declared
//use const when declare hook
//Whenever component function executed again if we assin nee value by cll function so new component called again  So new updated Title is fetched from React,which manages State for us
//At second time react does not Reinitialized the usestate it detect that this ios already initialized and now grab the latedt state x
//props can only be passed from parent to child we Can't skip intermediate components

//lift up state
//img-"C:\Users\91915\Pictures\Screenshots\Screenshot 2024-02-01 174954.png"
// it's not always that root app component to which you wanna lift your state up. instead, the goal is to lift up just as neccesary in your component tree until you have a component which has both access to the components that generates data as well as the compo. that needs data . that might be app compo. or also another

//Two Way binding
//Set state variable value as the input field value prop so now we can clear the state and enter empty stringm in it
//means for input we don't just listening to changes but we can pass a new value back into the input So we can chnage or reset our input programmatically.

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
