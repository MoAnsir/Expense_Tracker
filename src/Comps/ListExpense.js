import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Styles from "./ListExpense.module.scss";

function ListExpense({ expenses }) {
    console.log(
        "🚀 ~ file: ListExpense.js ~ line 5 ~ ListExpense ~ expenses",
        expenses.length
    );
    // If these is only the initial expense then do "No expenses to show"
    //  If there are more than 2 then show from index 1 and onwards.
    return (
        <Row>
            <Col>
                <h2>Current Expenses</h2>
                <ul>
                    {expenses.length > 1
                        ? expenses.map((expense) => (
                              <li key={expense.id}>
                                  <p>{expense.desc}</p>
                                  <p>{expense.amount}</p>
                                  <p>{expense.type}</p>
                              </li>
                          ))
                        : "No Expenses"}
                </ul>
            </Col>
        </Row>
    );
}

export default ListExpense;
