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
                    I am dedicated to providing exceptional software development, data analysis, and project management
                    solutions with a focus on:
                </p>
                <ul>
                    <li>Transparency, quality craftsmanship, and swift execution</li>
                    <li>Building lasting relationships through openness, honesty, and commitment</li>
                </ul>
                <p>
                    Additionally, my skills and qualifications include:
                </p>
                <ul>
                    <li>Certified Scrum Master, experienced in Agile methodologies</li>
                    <li>Proficient in a variety of programming languages, including Python, PHP, Java, HTML, CSS,
                        JavaScript, and AI technologies
                    </li>
                    <li>Strong leadership abilities with a focus on clear communication, dedication, and innovative
                        solutions
                    </li>
                </ul>

            </div>

            <div className="team">
                <div className="team-members">
                    <div className="team-member">
                        <img src={TeamMember1} alt="John Doe" className="team-image"/>
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
