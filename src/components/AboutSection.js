import React from 'react';
import '../styles/AboutSection.css';
import TeamMember1 from '../assets/teammember1.png'; // Replace with actual images
import TeamMember2 from '../assets/teammember2.png'; // Replace with actual images

const AboutSection = () => {
    return (
        <div className="about-wrapper">
            <div className="mission-statement">
                <h3>My 2 cents..</h3>
                <p>
                    I am dedicated to providing exceptional software development, data analysis, and project management solutions with a focus on transparency, quality craftsmanship, and swift execution. I strive to build lasting relationships by being open, honest, and committed to exceeding expectations in every project I undertake.
                </p>
                <p>
                    I am Certified Scrum Master, experienced in Agile methodologies. Proficient in a variety of programming languages, including Python, PHP, Java, HTML, CSS, JavaScript, and AI technologies.Strong leadership abilities with a focus on clear communication, dedication, and innovative solutions
                </p>
            </div>

            <div className="team">
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
