import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function ListExpense({ expenses }) {
    return (
        <Row>
            <Col>
                <p>List Expense</p>
                <p>{expenses.id}</p>
            </Col>
        </Row>
    );
}

export default ListExpense;
