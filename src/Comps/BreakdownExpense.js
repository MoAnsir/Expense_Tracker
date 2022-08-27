import { Row, Col } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function BreakdownExpense({ expenses }) {
    const filterMortgageNum = expenses.filter(function (value) {
        return value.type === "mortgage";
    });
    const filterInsuranceNum = expenses.filter(function (value) {
        return value.type === "insurance";
    });
    const filterFoodNum = expenses.filter(function (value) {
        return value.type === "food";
    });
    const filterClothingNum = expenses.filter(function (value) {
        return value.type === "clothing";
    });
    const filterUtilitiesNum = expenses.filter(function (value) {
        return value.type === "utilities";
    });
    const filterTransportNum = expenses.filter(function (value) {
        return value.type === "transport";
    });
    const filterEntertainmentNum = expenses.filter(function (value) {
        return value.type === "entertainment";
    });
    const filterOtherNum = expenses.filter(function (value) {
        return value.type === "other";
    });

    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: [
            "Mortgage",
            "Insurance",
            "Food",
            "Clothing",
            "Utilities",
            "Transport",
            "Entertainment",
            "Other",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [
                    filterMortgageNum.length,
                    filterInsuranceNum.length,
                    filterFoodNum.length,
                    filterClothingNum.length,
                    filterUtilitiesNum.length,
                    filterTransportNum.length,
                    filterEntertainmentNum.length,
                    filterOtherNum.length,
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Row data-testid="breakdown-expense">
            <Col>
                <Pie data={data} />
            </Col>
        </Row>
    );
}

export default BreakdownExpense;
