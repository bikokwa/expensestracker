import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const closeFormHandler = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onClose={closeFormHandler}
          onAddExpense={props.onAddExpense}
        />
      </div>
    );
  }

  const showExpenseFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      <button onClick={showExpenseFormHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
