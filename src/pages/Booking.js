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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking Submitted:', form);
        alert('Thank you for booking with Go Cleaning!');
        // Send data to google sheets or API here
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