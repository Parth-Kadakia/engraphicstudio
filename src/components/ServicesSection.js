import React from 'react';
import '../styles/ServicesSection.css';
import FlipRushScreenshot1 from '../assets/fliprush_screenshot1.png'; // Replace with actual images
import FlipRushScreenshot2 from '../assets/fliprush_screenshot2.png';
import FlipRushScreenshot3 from '../assets/fliprush_screenshot3.png';

import t1 from '../assets/t1.png'; // Replace with actual images
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png'; // Replace with actual images
import t5 from '../assets/t5.png';


import DataAnalysisCharts from './DataAnalysisCharts';

const ServicesSection = () => {
    return (
        <div className="services-wrapper">
            <div className="service">
                <h3>Software Development</h3>

                <p>
                    As a seasoned Technical Project Manager and Software Developer with over 9 years of experience, I bring a unique blend of technical expertise and project leadership skills to the table. I excel in guiding agile teams to deliver high-quality software that bridges development and business goals, specializing in Java, PHP, Python, and full-stack web development. My background in automating workflows, building real-time dashboards, and leading cross-functional teams has honed my ability to drive efficiency and support strategic decision-making through data-driven insights. Additionally, my certification as a Scrum Master underscores my commitment to agile methodologies and continuous improvement in software delivery.
                </p>

                <h3>Flip Rush</h3>
                <p>
                    I specialize in creating innovative software solutions tailored to unique needs. One of my flagship
                    projects is
                    <a href="https://flip-rush.com" target="_blank" rel="noopener noreferrer">&nbsp;Flip Rush</a> – a
                    fast-paced,
                    memory-based puzzle game that’s already making waves. Built with Vercel, React, Google Analytics,
                    and Supabase
                    PostgreSQL, Flip Rush offers an engaging experience. Test your skills at
                    <a href="https://flip-rush.com" target="_blank" rel="noopener noreferrer">&nbsp;flip-rush.com</a>.
                </p>

                <div className="fliprush-screenshots">
                    <img src={FlipRushScreenshot1} alt="Flip Rush Screenshot 1" className="screenshot"/>
                    <img src={FlipRushScreenshot2} alt="Flip Rush Screenshot 2" className="screenshot"/>
                    <img src={FlipRushScreenshot3} alt="Flip Rush Screenshot 3" className="screenshot"/>
                </div>

                <br/>
                <br/>

                <h3>The FamilyFlavors</h3>

                <p>
                    I am passionate about creating platforms that bring people together around shared traditions and
                    stories. One of my recent projects is
                    <a href="https://www.thefamilyflavors.com" target="_blank" rel="noopener noreferrer">&nbsp;Family
                        Flavors</a> – a unique social platform where users can share their family recipes, keeping
                    culinary traditions alive. Built with React and PostgreSQL, Family Flavors offers a space for users
                    to upload, browse, and share cherished family dishes. Discover the rich variety of recipes and add
                    your own at
                    <a href="https://www.thefamilyflavors.com" target="_blank"
                       rel="noopener noreferrer">&nbsp;thefamilyflavors.com</a>.
                </p>


                <div className="fliprush-screenshots">
                    <img src={t1} alt="Flip Rush Screenshot 1" className="tff"/>
                    <img src={t2} alt="Flip Rush Screenshot 1" className="tff"/>
                    <img src={t3} alt="Flip Rush Screenshot 1" className="tff"/>
                    <img src={t4} alt="Flip Rush Screenshot 1" className="tff"/>
                    <img src={t5} alt="Flip Rush Screenshot 1" className="tff"/>
                </div>
            </div>
            <div className="service">
                <h3>Data Analysis</h3>
                <p>
                    My data analysis skill set enables me to transform raw data into actionable insights. Using tools
                    like SQL, Tableau, and Python, I can uncover trends, patterns, and answers within data to support
                    informed decision-making. With the recent addition of AI, I bring deeper, predictive insights to the
                    table. From advanced Python analytics to integrating Hugging Face inferences for natural language
                    processing, I aim to deliver comprehensive, data-driven solutions tailored to your needs.
                </p>
                <DataAnalysisCharts/>
            </div>
        </div>
    );
};

export default ServicesSection;
