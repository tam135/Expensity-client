import React, { Component } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesContext from "../../Context/ExpensesContext";
import "./ExpenseList.css";

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: props.expenses || []
    };
  }

  static contextType = ExpensesContext;

  sortDateNew = () => {
    const { expenses } = this.state;
    let newerDates = [...expenses].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    this.setState({
      expenses: newerDates
    });

  };

  sortDateOld = () => {
    const { expenses } = this.state;
    let olderDates = [...expenses].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    this.setState({
      expenses: olderDates
    });
  };

  amountAscending = () => {
    const { expenses } = this.state;
    let ascendingList = [...expenses].sort(
      (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
    );
    this.setState({
      expenses: ascendingList
    });
  };

  amountDescending = () => {
    const { expenses } = this.state;
    let descendingList = [...expenses].sort(
      (a, b) => parseFloat(b.amount) - parseFloat(a.amount)
    );
    this.setState({
      expenses: descendingList
    });
  };

  filterCategory = e => {
    const { expenses } = this.context;
    const styles = [e.target.value];
    let filteredList = []
    if(styles.includes('AllCategories')) {
      filteredList = this.context.expenses
    } else {
      filteredList = expenses.filter(i => styles.includes(i.style));
    }
    this.setState({
      expenses: filteredList
    });
  };

  render() {
    const { expenses } = this.state
    return (
      <div>
        <section className="ExpenseList__Filters">
          <label htmlFor="ExpenseList__Dates"></label>
          <select
            className="ExpenseList__Select"
            onChange={e => {
              if (e.target.value === "OldToNew") {
                this.sortDateOld();
              } else if (e.target.value === "NewToOld") {
                this.sortDateNew();
              }
            }}
          >
            <option>Sort By Date</option>
            <option value="OldToNew">Oldest to New</option>
            <option value="NewToOld">Newest to Oldest</option>
          </select>

          <label htmlFor="ExpenseList_Amount"></label>
          <select
            className="ExpenseList__Select"
            onChange={e => {
              if (e.target.value === "LowToHigh") {
                this.amountAscending();
              } else if (e.target.value === "HighToLow") {
                this.amountDescending();
              }
            }}
          >
            <option>Sort By Amount</option>
            <option value="LowToHigh">Lowest to Highest</option>
            <option value="HighToLow">Highest to Lowest</option>
          </select>

          <label htmlFor="ExpenseList_Category"></label>
          <select
            className="ExpenseList__Select"
            onChange={this.filterCategory}
          >
            <option value="AllCategories">All Categories</option>
            <option value="Transportation">Transportation</option>
            <option value="Bills">Bills</option>
            <option value="Personal">Personal</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
        </section>

        <section className="ExpenseList">
          <ul>
            {expenses.map(expense => (
              <ExpenseItem
                key={expense.id}
                date={expense.Date}
                amount={expense.Amount}
                style={expense.Style}
                description={expense.Description}
                {...expense}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
