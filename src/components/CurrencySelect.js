import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencySelect.css'; // import the CSS file

const CurrencySelect = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='col-sm'>
            <div className='alert alert-success currency-container'>
                <span>Currency ({currency})</span>
                <select className='currency-select' value={currency} onChange={handleCurrencyChange}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default CurrencySelect;
