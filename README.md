# Expense Tracker

The aim for this project to for a user to input expenses, catergories them with the dropdown provided, edit them and filter them in list view. There is a also a pie chat showing the allocation of each expense and how it relates as a whole

## Technologies
"react": "^18.2.0",
"bootstrap": "^5.2.0",
"chart.js": "^3.9.1",
"cypress": "^10.4.0",
"jest": "^28.1.3"


In the project directory, you can run:

## Installation
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Usage

To add an expense you have 2 input boxes. one for the description and the second for the amount. After filling out the form select a category it falls into and then click the "Add expenses" button
![Demo CountPages alpha](./public/add%20expense.PNG)


The added expsense will show in the list view below
![Demo CountPages alpha](./public/expense%20list.PNG)

You can edit an expense by click the edit button in the list view. A modal will open. you can change the description, amount and the category. you can save your change or close the modal without saving. 
![Demo CountPages alpha](./public/edit.PNG)


You can also filter the table by category type, Amount and Time. on fist click of one of the 3 filter buttons will filter the list in descending or and if you click it again will filter it to ascending order
![Demo CountPages alpha](./public/filter.PNG)


Expenses that are added will be added to the chart
![Demo CountPages alpha](./public/chart.PNG)


