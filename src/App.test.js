import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import App from "./App";

afterEach(cleanup);

describe("Expense Tracker App", () => {
    it("should render the components", () => {
        render(<App />);

        const mainHeading = screen.getByRole("heading", {
            name: /Expense tracker/i,
        });
        const addExpenseComp = screen.getByTestId("add-expense");
        const filterComp = screen.getByTestId("filter-expense");
        const listExpense = screen.getByTestId("list-expense");
        const expenseChart = screen.getByTestId("breakdown-expense");

        expect(mainHeading).toBeInTheDocument();
        expect(addExpenseComp).toBeInTheDocument();
        expect(filterComp).toBeInTheDocument();
        expect(listExpense).toBeInTheDocument();
        expect(expenseChart).toBeInTheDocument();
    });

    it("should add a new expense", async () => {
        render(<App />);

        //const { getByPlaceholderText, getByRole } = render(<App />);

        const expenseDescription =
            screen.getByPlaceholderText(/Expense description/i);
        const expenseAmount = screen.getByPlaceholderText(/Amount/i);
        const expenseType = screen.getByRole("combobox", {
            name: /Type of expense:/i,
        });
        const addExpenseButton = screen.getByRole("button", {
            name: /Add Expense/i,
        });

        expect(expenseDescription).toBeInTheDocument();
        expect(expenseAmount).toBeInTheDocument();
        expect(screen.getAllByRole("option").length).toBe(9);
        expect(expenseType).toBeInTheDocument();
        expect(addExpenseButton).toBeInTheDocument();

        fireEvent.change(expenseDescription, {
            target: { value: "test expense" },
        });
        fireEvent.change(expenseAmount, { target: { value: "1000" } });
        fireEvent.change(expenseType, {
            target: { value: "mortgage" },
        });

        expect(expenseDescription.value).toBe("test expense");
        expect(expenseAmount.value).toBe("1000");
        expect(expenseType.value).toBe("mortgage");

        fireEvent.click(addExpenseButton);
        expect(expenseDescription.value).toBeTruthy();
        expect(expenseAmount.value).toBeFalsy();
        expect(screen.queryByText(/test expense/i)).not.toBeInTheDocument();
    });

    it("should edit an expense", () => {
        render(<App />);
    });

    it("should delete an expense", () => {
        render(<App />);
    });

    it("should filter the expenses", () => {
        render(<App />);
    });
});

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
        const domTree = renderer.create(<App />).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});
