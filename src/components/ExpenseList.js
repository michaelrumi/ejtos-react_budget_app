import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);

    const increaseBudget = (id) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: id,
                cost: 10, // Increase by 10
            },
        });
    };

    const decreaseBudget = (id) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: id,
                cost: 10, // Decrease by 10
            },
        });
    };

    const deleteExpense = (id) => {
        // Your code to handle expense deletion goes here
    };

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase</th>
                    <th scope="col">Decrease</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{currency}{expense.cost}</td>
                        <td>
                            <button
                                className="btn btn-success"
                                onClick={() => increaseBudget(expense.name)}
                            >
                                +
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => decreaseBudget(expense.name)}
                            >
                                -
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-secondary"
                                onClick={() => deleteExpense(expense.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
