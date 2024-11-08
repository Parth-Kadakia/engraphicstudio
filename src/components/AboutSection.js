import React from 'react';
import '../styles/AboutSection.css';
import TeamMember1 from '../assets/teammember1.png'; // Replace with actual images
import TeamMember2 from '../assets/teammember2.png'; // Replace with actual images

const AboutSection = () => {
    return (
        <div className="about-wrapper">
            <div className="team">
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQGm2m4KdK-w2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719286087122?e=1736380800&v=beta&t=gQEC0kCJTOeSHS90qfsrPTCbQh7NBZK2ipWUe4zdKsU" alt="Parth Kadakia" className="team-image"/>
                        <div className="team-info">
                            <h4>Parth Kadakia </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission-statement">
                <h3>About Me</h3>
                <p>
                    As a seasoned Technical Project Manager and Software Developer with over 9 years of experience, I
                    bring a unique blend of technical expertise and project leadership skills to the table. I excel in
                    guiding agile teams to deliver high-quality software that bridges development and business goals,
                    specializing in Java, PHP, Python, and full-stack web development. My background in automating
                    workflows, building real-time dashboards, and leading cross-functional teams has honed my ability to
                    drive efficiency and support strategic decision-making through data-driven insights. Additionally,
                    my certification as a Scrum Master underscores my commitment to agile methodologies and continuous
                    improvement in software delivery.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
