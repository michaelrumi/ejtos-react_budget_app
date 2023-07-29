import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
    const { budget, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = budget - totalExpenses;

    return (
        <div className='alert alert-success'>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default RemainingBudget;
