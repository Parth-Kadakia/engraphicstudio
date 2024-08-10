import React from 'react';
import '../styles/MainSection.css';
import ESLogo from '../assets/ES_Logo.png'; // Adjust the import path if needed

const MainSection = () => {
    return (
        <div className="main-wrapper">
            <img src={ESLogo} alt="Engraphic Studio" className="full-screen-logo" />
        </div>
    );
};

export default MainSection;
