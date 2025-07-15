import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Go Cleaning. All rights reserved.</p>
            <div className="footer-links">
                <a href="mailto:josiahemail@gmail.com">Josiah's Email</a>
                <a href="tel:+13178000295">(317) 800-0295</a>
            </div>
        </footer>
    );
}

export default Footer;