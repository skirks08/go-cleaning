import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Go Cleaning</h1>
                    <p>Professional, Reliable, and Spotless Cleaning Services</p>
                    <a href="/booking" className="cta-button">Get a Free Quote</a>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-us">
                <h2>Why Choose Go Cleaning?</h2>
                <div className="features">
                    <div className="feature-card">✔️ Eco-Friendly Products</div>
                    <div className="feature-card">✔️ Trusted Professionals</div>
                    <div className="feature-card">✔️ Flexible Scheduling</div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="services-preview">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">🏠 Basic Cleaning</div>
                    <div className="service-card">🧽 Deep Cleaning</div>
                    <div className="service-card">🚚 Move In/Out Cleaning</div>
                </div>
                <a href="/services" className="cta-button">View All Services</a>
            </section>

            {/* Final CTA */}
            <section className="final-cta">
                <h2>Ready for a Spotless Home?</h2>
                <a href="/booking" className="cta-button">Book Your Clean Today</a>
            </section>
        </div>
    );
}

export default Home;
