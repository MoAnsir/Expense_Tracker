import { Row, Button } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Styles from "../App.module.scss";

function AddExpense({ setExpenses, expenses }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const date = new Date();

  const handleAddExpense = (e) => {
    e.preventDefault();
    if ((description, amount, type)) {
      setExpenses((prev) => [
        ...prev,
        {
          id: uuidv4(),
          date: date,
          desc: description,
          amount,
          type: type,
        },
      ]);
    }
    setDescription("");
    setAmount("");
    setType("");
  };

  return (
    <Row className={`${Styles.fl50} mb-5`} data-testid="add-expense">
      <h2 className="p-2">Add Expense</h2>
      <input
        className="p-2 mb-2"
        type="text"
        placeholder="Expense description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="p-2 mb-2"
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label className="mb-2" htmlFor="expense">
        Type of expense:
      </label>
      <select
        name="expense"
        id="expense"
        className="p-2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="select">Please Select</option>
        <option value="mortgage">Mortgage</option>
        <option value="insurance">Insurance</option>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="utilities">Utilities</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>
      <Button
        name="add_expense"
        className="my-2"
        onClick={(e) => handleAddExpense(e)}
      >
        Add Expense
      </Button>
    </Row>
  );
}

export default AddExpense;
