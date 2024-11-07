import React from 'react';
import '../styles/ContactSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const ContactSection = () => {
    return (
        <div className="contact-wrapper">
            <h2>Reach out to me</h2>
            <p>Email: hello@engraphic.us</p>
            <p>Phone: +1-732-535-7529</p>
            <p>
                <a href="https://instagram.com/engraphicstudio" target="_blank " rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{padding: 10 + 'px'}}></i>
                </a>
                <a href="mailto:hello@engraphic.us" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope" style={{padding: '10px'}}></i>
                </a>

                <a href="tel:+17325357529" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-phone-square" style={{padding: '10px'}}></i>
                </a>
            </p>
        </div>
    );
};

export default ContactSection;
