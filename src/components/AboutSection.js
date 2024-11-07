import React from 'react';
import '../styles/AboutSection.css';
import TeamMember1 from '../assets/teammember1.png'; // Replace with actual images
import TeamMember2 from '../assets/teammember2.png'; // Replace with actual images

const AboutSection = () => {
    return (
        <div className="about-wrapper">
            <div className="mission-statement">
                <h3>Our Mission</h3>
                <p>
                    At Engraphic Studio, we are committed to delivering exceptional software development, data analysis, and 3D printing solutions with unwavering transparency, quality craftsmanship, and swift execution. We believe in building lasting relationships with our clients by being open, honest, and dedicated to exceeding expectations with every project.
                </p>
            </div>

            <div className="team">
                <h3>Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <img src={TeamMember1} alt="John Doe" className="team-image" />
                        <div className="team-info">
                            <h4>Parth Kadakia</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
