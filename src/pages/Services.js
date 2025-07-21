import React from "react";
import './Services.css';

const SERVICES = [
    {
        title: "2 hour Basic Clean",
        price: "$120",
        details: [
            "Dust all rooms top to bottom",
            "All bathrooms, clean shower/sink/mirrors",
            "Kitchen cleanup (interior microwave only)",
            "Remove trash as needed"
        ]
    },
    {
        title: "4 hour Maintenance Cleaning",
        price: "$240",
        details: [
            "Dust all rooms top to bottom",
            "All floors vacuumed and mopped",
            "Kitchen cleanup (inside microwave and stove as needed)",
            "Bathroom cleanup, spot clean",
            "Hand wipe light switches",
            "Ceiling fans (no higher than 8ft)",
            "Wipe out exterior vents",
            "Remove trash as needed"
        ]
    },
    {
        title: "6 hour Deluxe Cleaning",
        price: "$360",
        details: [
            "Dust all rooms top to bottom",
            "All floors vacuumed and mopped",
            "Kitchen cleanup, interior microwave and stove",
            "Hand wipe baseboards and trim as needed",
            "Hand wipe walls as needed",
            "Ceiling fan blades, top and bottom",
            "Hand wipe chandeleiers",
            "Hand wipe light switches",
            "Remove trash as needed",
        ]
    },
    {
        title: "8 hour Supreme Deluxe Cleaning",
        price: "$520",
        details: [
            "Dust all rooms top to bottom",
            "All floors vacuumed and mopped",
            "Detail all bathrooms",
            "Clean exterior refrigerator, exterior stove",
            "Hand wipe light fixtures",
            "Dust all ceiling fans",
            "Hand wipe baseboards/trim/molding top to bottom",
            "Hand wipe light switches",
            "Interior windows only (ladder: max 2 steps)"
        ]
    },
    {
        title: "3 hour Laundry and Light Cleaning",
        price: "$180",
        details: [
            "2 hours basic cleaning",
            "1 hour laundry and dry time",
            "Fold clothes (not put away for privacy reasons)",
            "One load per job (can adjust time for more laundry)"
        ]
    }
];

function Services() {
    return (
        <div className="services-page">
            <h1>Our Cleaning Packages</h1>
            <div className="services-list">
                {SERVICES.map((service, idx) => (
                    <div className="service-card" key={idx}>
                        <h2>{service.title}</h2>
                        <div className="service-price">{service.price}</div>
                        <ul>
                            {service.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;