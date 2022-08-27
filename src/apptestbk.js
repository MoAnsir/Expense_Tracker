import {
    render,
    screen,
    fireEvent,
    cleanup,
    debug,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

describe("Filter function", () => {
    let testInitialState = [];

    beforeEach(() => {
        const date = new Date();
        testInitialState = [
            {
                id: 1,
                date: date.setDate(date.getDate()),
                desc: "test 1",
                amount: 0,
                type: "10",
            },
            {
                id: 2,
                date: date.setDate(date.getDate() + 2),
                desc: "test 2",
                amount: 0,
                type: "20",
            },
            {
                id: 3,
                date: date.setDate(date.getDate() + 3),
                desc: "test 3",
                amount: 0,
                type: "30",
            },
        ];
    });

    afterEach(cleanup);

    test("renders the components", () => {
        render(<App />);
        const header = screen.getByRole("heading", {
            name: /expense tracker/i,
        });
        const addExpense = screen.getByTestId("add-expense");
        const filterExpense = screen.getByTestId("filter-expense");
        const listExpense = screen.getByTestId("list-expense");
        const breakdownExpense = screen.getByTestId("breakdown-expense");

        expect(header).toBeInTheDocument();
        expect(addExpense).toBeInTheDocument();
        expect(filterExpense).toBeInTheDocument();
        expect(listExpense).toBeInTheDocument();
        expect(breakdownExpense).toBeInTheDocument();
    });

    test("add an expense", async () => {
        render(<App />);
        // const { debug } = render(<App />);
        // debug(undefined, 300000);
        const expDesc = screen.getByPlaceholderText("Expense description");
        const expAmount = screen.getByPlaceholderText("Amount");
        const expType = screen.getByRole("combobox", {
            name: /type of expense:/i,
        });
        const expAddBut = screen.getByRole("button", {
            name: /add expense/i,
        });

        expect(expDesc).toBeInTheDocument();
        expect(expAmount).toBeInTheDocument();
        expect(screen.getAllByRole("option").length).toBe(9);
        expect(expType).toBeInTheDocument();
        expect(expAddBut).toBeInTheDocument();

        fireEvent.change(expDesc, { target: { value: "test Expense" } });
        expect(expDesc.value).toBe("test Expense");

        fireEvent.change(expAmount, { target: { value: "20" } });
        expect(expAmount.value).toBe("20");

        fireEvent.change(expType, {
            target: { value: "mortgage" },
        });

        expect(expType.value).toBe("mortgage");

        expAddBut.addEventListener("click", function (e) {
            fireEvent.click(expAddBut);
            console.log("button was clicked");
            expect(screen.getByText(/test expense/i)).toBeInTheDocument();
            expect(screen.getByText(/£20/i)).toBeInTheDocument();
        });
    });

    test("filter expenses buttons", () => {
        render(<App testInitialState={testInitialState} />);

        const filterTimeBut = screen.getByRole("button", {
            name: /time/i,
        });
        const filterAmountBut = screen.getByRole("button", {
            name: /amount/i,
        });
        const filterTypeBut = screen.getByRole("button", {
            name: /type/i,
        });
        expect(screen.getByText(/test 1/i)).toBeInTheDocument();
        expect(screen.getByText(/test 2/i)).toBeInTheDocument();
        expect(screen.getByText(/test 3/i)).toBeInTheDocument();
    });

    // test("delete expenses", () => {
    //     //render(<App testInitialState={testInitialState} />);
    //     debugger;
    //     const { debug } = render(<App testInitialState={testInitialState} />);
    //     const itemToDelete = screen.getByText(/test 1/i);
    //     const getAllDeleteElem = screen.getAllByRole("button", {
    //         name: /delete/i,
    //     })[0];
    //     expect(itemToDelete).toBeInTheDocument();
    //     getAllDeleteElem.addEventListener("click", function (e) {
    //         fireEvent.click(getAllDeleteElem);
    //         expect(itemToDelete).not.toBeInTheDocument();
    //     });
    // });
    test("delete expenses", async () => {
        //render(<App testInitialState={testInitialState} />);
        //debugger;
        const { getByText, getAllByRole } = render(
            <App testInitialState={testInitialState} />
        );

        expect(screen.getByText(/test 1/i)).toBeTruthy();
        expect(
            screen.getAllByRole("button", {
                name: /delete/i,
            }).length
        ).toBe(3);

        const get1stDeleteElem = screen.getAllByRole("button", {
            name: /delete/i,
        })[2];

        //expect(get1stDeleteElem).length().toBe(9);
        get1stDeleteElem.addEventListener("click", function (e) {
            fireEvent.click(get1stDeleteElem);
            expect(screen.queryByText(/test 1/i)).toBeFalsy();
            expect(screen.queryByText(/test 1/i)).not.toBeInTheDocument();
            expect(screen.getByText(/test 1/i)).toBeTruthy();
            expect(screen.getByText(/test 1/i)).toBeInTheDocument();
        });
    });

    test("edit expenses", () => {
        render(<App />);
    });
});

describe("Jest Snapshot testing suite", () => {
    it("Matches DOM Snapshot", () => {
        const domTree = renderer.create(<App />).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});
