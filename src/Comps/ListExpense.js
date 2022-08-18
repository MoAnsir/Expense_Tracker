import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Styles from "./ListExpense.module.scss";

function ListExpense({ setExpenses, expenses }) {
    console.log(
        "🚀 ~ file: ListExpense.js ~ line 5 ~ ListExpense ~ expenses",
        expenses.length
    );
    // If these is only the initial expense then do "No expenses to show"
    //  If there are more than 2 then show from index 1 and onwards.

    const handleDelete = (expenseId) => {
        const filterDelete = expenses.filter(function (value) {
            return value.id !== expenseId;
        });
        setExpenses(filterDelete);
    };

    return (
        <Row>
            <Col className="p-0 m-0">
                <h2>Current Expenses</h2>
                <ul className="p-0 m-0">
                    {expenses.length
                        ? expenses.map((expense) => (
                              <li key={expense.id}>
                                  <Button
                                      className="me-4"
                                      onClick={() => handleDelete(expense.id)}
                                  >
                                      Delete
                                  </Button>
                                  <p className="d-inline">{expense.type}</p>
                                  <p className="d-inline mx-4">
                                      £{expense.amount}
                                  </p>
                                  <p className="d-inline">{expense.desc}</p>
                                  <Button className="ms-4">Edit</Button>
                              </li>
                          ))
                        : "No Expenses"}
                </ul>
            </Col>
        </Row>
    );
}

export default ListExpense;
