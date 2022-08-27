import { Container } from "react-bootstrap";
import AddExpense from "./Comps/AddExpense";
import BreakdownExpense from "./Comps/BreakdownExpense";
import FilterExpense from "./Comps/FilterExpense";
import ListExpense from "./Comps/ListExpense";
import Styles from "./App.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App({ testInitialState }) {
    const initialState = [
        {
            id: uuidv4(),
            date: new Date(),
            desc: "initial",
            amount: 0,
            type: "initial",
        },
    ];

    const [expenses, setExpenses] = useState(
        testInitialState ? testInitialState : initialState
    );

    //const [expenses, setExpenses] = useState(initialState);

    return (
        <div className={Styles.app}>
            <h1 className="p-4">Expense tracker</h1>
            <Container>
                <AddExpense setExpenses={setExpenses} expenses={expenses} />
                <FilterExpense expenses={expenses} setExpenses={setExpenses} />
                <ListExpense setExpenses={setExpenses} expenses={expenses} />
                <BreakdownExpense expenses={expenses} />
            </Container>
        </div>
    );
}

export default App;
