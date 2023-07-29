import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, changeBudget, currency } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);

    const handleIncrease = () => {
        changeBudget(editableBudget + 10);
        setEditableBudget(editableBudget + 10);
    };

    const handleDecrease = () => {
        if (editableBudget >= 10) {
            changeBudget(editableBudget - 10);
            setEditableBudget(editableBudget - 10);
        } else {
            alert('Budget cannot be less than 0');
        }
    };

    const handleBudgetChange = (e) => {
        setEditableBudget(Number(e.target.value));
    };

    const handleBlur = () => {
        changeBudget(editableBudget);
    };

    return (
        <div className='alert alert-secondary'>
            <div>
                <label>Budget: {currency}</label>
                <input 
                    type='number'
                    className='ml-2'
                    value={editableBudget}
                    onChange={handleBudgetChange}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default Budget;
