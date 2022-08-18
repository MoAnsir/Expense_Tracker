import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function EditModal({
    showModal,
    setShowModal,
    editExpense,
    globalExpenses,
    index,
}) {
    const [itemDesc, setItemDesc] = useState("");
    const [itemAmount, setItemAmount] = useState("");
    const [itemType, setItemType] = useState("");

    const handleEditSave = () => {
        const filterEdit = editExpense.filter(function (value) {
            return value.id === editExpense[0].id;
        });

        filterEdit[0].amount = itemAmount;
        filterEdit[0].desc = itemDesc;
        filterEdit[0].type = itemType;

        const editNewState = [...globalExpenses];
        editNewState[index] = filterEdit;

        setShowModal(false);
    };

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Original Expense: <b>{editExpense[0].desc}</b>
                </p>
                <div>
                    {/* <p className="d-inline">Edit Description:</p> */}
                    <label className="mb-2" htmlFor="expenseDesc">
                        Expense description:
                    </label>
                    <input
                        type="text"
                        name="expenseDesc"
                        id="expenseDesc"
                        className="d-inline mx-2"
                        placeholder="Description"
                        onChange={(e) => setItemDesc(e.target.value)}
                    />
                </div>
                <div>
                    {/* <p className="d-inline">Edit Amount:</p> */}
                    <label className="mb-2" htmlFor="expenseAmount">
                        Expense Amount:
                    </label>
                    <input
                        type="text"
                        name="expenseAmount"
                        id="expenseAmount"
                        className="d-inline mx-2"
                        placeholder="Amount"
                        onChange={(e) => setItemAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label className="mb-2" htmlFor="expenseType">
                        Expense type:
                    </label>
                    <select
                        name="expenseType"
                        id="expenseType"
                        className="p-2"
                        onChange={(e) => setItemType(e.target.value)}
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
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleEditSave()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal;
