import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Booking.css';

function Booking() {
    const query = new URLSearchParams(useLocation().search);
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        sqft: query.get('sqft') || '',
        hours: query.get('hours') || '',
        level: query.get('level') || '',
        price: query.get('price') || ''
    });

    const handleChange = (e) => 
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit =  async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbySjBiKy6SN0eDGL71O4LAHXhvdS8gFTjjVeqzq86QTn_39jfZ5MhTZ3p5n8_WyI2JIHQ/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert('Booking Confirmed! Thank you.');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Error submitting booking. Please try again later.');
        }
    };

    return (
        <div className="booking-page">
            <h1>Book Your Cleaning</h1>

            <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                    Full Name 
                    <input 
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email Address 
                    <input 
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Service Address
                    <input 
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Preferred Date
                    <input 
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                    />
                </label>

                {/* Pre-filled, read-only quote info */}
                <label>
                    Square Footage
                    <input type="text" value={form.sqft} readOnly />
                </label>

                <label>
                    Hours
                    <input type="text" value={form.hours} readOnly />
                </label>

                <label>
                    Cleaning Type 
                    <input type="text" value={form.level} readOnly />
                </label>

                <label>
                    Total Estimated Price
                    <input type="text" value={`$${form.price}`} readOnly />
                </label>

                <button type="submit" className="cta-button">Confirm Booking</button>
            </form>
        </div>
    );
}

export default Booking;