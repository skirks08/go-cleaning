import React, { useState } from 'react';
import './Quote.css';

const SERVICE_RATES = {
    basic: { sqft: 0.10, hour: 30 },
    deep: { sqft: 0.15, hour: 40 },
    moveOut: { sqft: 0.18, hour: 45 }
};

function Quote() {
    const [form, setForm] = useState({
        sqft: '',
        hours: '',
        level: 'basic'
    });

    const handleChange = e =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const calcPrice = () => {
        const { sqft, hours, level } = form;
        if (!sqft || !hours) return 0;
        const rate = SERVICE_RATES[level];
        return (sqft * rate.sqft + hours * rate.hour).toFixed(2);
    };

    return (
        <div className='quote-page'>
            <h1>Instant Quote</h1>

            <form className='quote-form'>
                <label>
                    Square Footage
                    <input 
                        type="number"
                        name="sqft"
                        min="0"
                        placeholder="e.g. 1500"
                        value={form.sqft}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Estimated Hours
                    <input 
                        type="number"
                        name="hours"
                        min="0"
                        step="0.5"
                        placeholder="e.g. 3"
                        value={form.hours}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Cleaning Level
                    <select name="level" value={form.level} onChange={handleChange}>
                        <option value="basic">Basic</option>
                        <option value="deep">Deep</option>
                        <option value="moveOut">Move-In/Move-Out</option>
                    </select>
                </label>
            </form>

            <div className='quote-result'>
                <p>
                    Your Estimated Price:
                    <span className='quote-price'>
                        ${calcPrice()}
                    </span>
                </p>
                <a className='cta-button' href='/booking'>Book This Clean</a>
            </div>
        </div>
    );
}

export default Quote;