import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

function FilterExpense({ expenses, setExpenses }) {
    const [timeButton, setTimeButton] = useState(false);
    const [amountButton, setAmountButton] = useState(false);
    const [typeButton, setTypeButton] = useState(false);

    const sortDate = [...expenses].sort(
        (a, b) => Number(a.date) - Number(b.date)
    );

    const sortAmount = [...expenses].sort(
        (a, b) => Number(a.amount) - Number(b.amount)
    );

    const sortType = [...expenses].sort((a, b) => {
        let ta = a.type.toLowerCase();
        let tb = b.type.toLowerCase();
        if (ta < tb) {
            return -1;
        }
        if (ta > tb) {
            return 1;
        }
        return 0;
    });

    const onTimeFilterClick = () => {
        setTimeButton(!timeButton);

        if (timeButton) {
            setExpenses(sortDate);
        } else {
            setExpenses(sortDate.reverse());
        }
    };

    const onAmountFilterClick = () => {
        setAmountButton(!amountButton);

        if (amountButton) {
            setExpenses(sortAmount);
        } else {
            setExpenses(sortAmount.reverse());
        }
    };

    const onTypeFilterClick = () => {
        setTypeButton(!typeButton);

        if (typeButton) {
            setExpenses(sortType);
        } else {
            setExpenses(sortType.reverse());
        }
    };

    return (
        <Row className="mb-5" data-testid="filter-expense">
            <Col>
                <div>
                    <h2>Filter expenses</h2>
                    <Button name="time" onClick={() => onTimeFilterClick()}>
                        Time
                    </Button>
                    <Button
                        name="amount"
                        className="mx-5"
                        onClick={() => onAmountFilterClick()}
                    >
                        Amount
                    </Button>
                    <Button name="type" onClick={() => onTypeFilterClick()}>
                        Type
                    </Button>
                </div>
            </Col>
        </Row>
    );
}

export default FilterExpense;
