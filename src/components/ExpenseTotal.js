import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <div className='alert alert-danger'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
