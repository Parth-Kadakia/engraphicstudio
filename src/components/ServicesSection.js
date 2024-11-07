import React from 'react';
import '../styles/ServicesSection.css';
import FlipRushScreenshot1 from '../assets/fliprush_screenshot1.png'; // Replace with actual images
import FlipRushScreenshot2 from '../assets/fliprush_screenshot2.png';
import FlipRushScreenshot3 from '../assets/fliprush_screenshot3.png';
import ThreeDPrint1 from '../assets/3dprint1.png'; // Replace with actual images
import ThreeDPrint2 from '../assets/3dprint2.png';
import ThreeDPrint3 from '../assets/3dprint3.png';
import ThreeDPrint4 from '../assets/3dprint4.png';
import DataAnalysisCharts from './DataAnalysisCharts';

const ServicesSection = () => {
    return (
        <div className="services-wrapper">
            <div className="service">
                <h3>Software Development</h3>
                <p>
                    I specialize in creating innovative software solutions tailored to unique needs. One of my flagship
                    projects is
                    <a href="https://flip-rush.com" target="_blank" rel="noopener noreferrer">Flip Rush</a> – a
                    fast-paced,
                    memory-based puzzle game that’s already making waves. Built with Vercel, React, Google Analytics,
                    and Supabase
                    PostgreSQL, Flip Rush offers an engaging experience. Test your skills at
                    <a href="https://flip-rush.com" target="_blank" rel="noopener noreferrer">flip-rush.com</a>.
                </p>

                <div className="fliprush-screenshots">
                    <img src={FlipRushScreenshot1} alt="Flip Rush Screenshot 1" className="screenshot"/>
                    <img src={FlipRushScreenshot2} alt="Flip Rush Screenshot 2" className="screenshot"/>
                    <img src={FlipRushScreenshot3} alt="Flip Rush Screenshot 3" className="screenshot"/>
                </div>
            </div>
            <div className="service">
                <h3>Data Analysis</h3>
                <p>
                    Our data analysis services turn raw data into actionable insights. We use the latest tools and
                    techniques to analyze your data, helping you make informed decisions that drive success.
                </p>
                <DataAnalysisCharts/>
            </div>
            <div className="service">
                <h3>3D Printing</h3>
                <p>
                    We offer cutting-edge 3D printing services that bring your ideas to life with precision and quality.
                    Whether you need prototypes, small production runs, or custom designs, we've got you covered.
                </p>
                <div className="threed-printing-gallery">
                    <img src={ThreeDPrint1} alt="3D Print Example 1" className="print-image"/>
                    <img src={ThreeDPrint2} alt="3D Print Example 2" className="print-image"/>
                    <img src={ThreeDPrint3} alt="3D Print Example 3" className="print-image"/>
                    <img src={ThreeDPrint4} alt="3D Print Example 4" className="print-image"/>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
