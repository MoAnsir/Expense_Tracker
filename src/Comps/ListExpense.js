import { Row, Col, Button } from "react-bootstrap";
import EditModal from "./EditModal";
import { useState } from "react";
import Styles from "./ListExpense.module.scss";

function ListExpense({ setExpenses, expenses }) {
    // If these is only the initial expense then do "No expenses to show"
    //  If there are more than 2 then show from index 1 and onwards.
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState("");

    const handleDelete = (expenseId) => {
        const filterDelete = expenses.filter(function (value) {
            return value.id !== expenseId;
        });
        setExpenses(filterDelete);
    };

    const handleEditClick = (expenseId) => {
        const filterEdit = expenses.filter(function (value) {
            return value.id === expenseId;
        });
        setShowModal(true);
        setModalData(filterEdit);
    };

    return (
        <Row>
            <Col className="p-0 m-0">
                <h2>Current Expenses</h2>
                <ul className="p-0 m-0">
                    {expenses.length
                        ? expenses.map((expense, index) => (
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
                                  <Button
                                      className="ms-4"
                                      onClick={() =>
                                          handleEditClick(expense.id)
                                      }
                                  >
                                      Edit
                                  </Button>
                                  {modalData ? (
                                      <EditModal
                                          showModal={showModal}
                                          setShowModal={setShowModal}
                                          editExpense={modalData}
                                          globalExpenses={expenses}
                                          index={index}
                                      />
                                  ) : null}
                              </li>
                          ))
                        : "No Expenses"}
                </ul>
            </Col>
        </Row>
    );
}

export default ListExpense;
