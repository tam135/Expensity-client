import React from 'react'
import './ExpenseItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpensesContext from '../../Context/ExpensesContext';
import config from '../../config'
import { Link } from 'react-router-dom'

function deleteExpense(expenseId, callback) {
  fetch(config.API_ENDPOINT + `/${expenseId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) return res.json().then(error => Promise.reject(error));
    })
    .then(data => {;
      callback(expenseId);
    })
    .catch(error => {
    });
}

export default function ExpenseItem(props) {
    return (
      <ExpensesContext.Consumer>
        {context => (
          <div className="expense-container">
            
            <div className="expense-header">
              
              <div className="expense-item">
                <span className="ExpenseItem__Info">{props.date}</span>
              </div>

              <div className="expense-item">
                <span className="ExpenseItem__Info">${props.amount}</span>
              </div>

              <div className="expense-item">
                <span className="ExpenseItem__Info">{props.style}</span>
              </div>

              <div className="expense-item">
                <span className="ExpenseItem__Info">{props.description}</span>
              </div>
            </div>

            <button className="button__edit-delete edit">
              <Link to={`/update/${props.id}`}>
                <FontAwesomeIcon className="edit-delete" icon="edit" />
              </Link>
            </button>
            <button
              onClick={() => {
                deleteExpense(props.id, context.deleteExpense);
              }}
              className="button__edit-delete delete"
            >
              <FontAwesomeIcon className="edit-delete" icon="trash-alt" />
            </button>
          </div>
        )}
      </ExpensesContext.Consumer>
    );
}

ExpenseItem.defaultProps = {
  onClickDelete: () => {},
}

