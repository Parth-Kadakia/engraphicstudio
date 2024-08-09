import React from 'react';

const Services = () => {
    return (
        <section id="services">
            <h1>Our Services</h1>

            <div className="service-section">
                <h2>Game Development</h2>
                <p>
                    In the ever-evolving world of gaming, we stand at the forefront of innovation. Our game development team is passionate about creating immersive, engaging, and visually stunning games that captivate players and push the boundaries of what's possible. Whether it's a mobile game, a VR experience, or a full-scale AAA title, we bring together top-tier design, cutting-edge technology, and a deep understanding of player dynamics to deliver games that resonate with audiences worldwide.
                </p>
                <ul>
                    <li><strong>Platforms:</strong> Mobile, Console, PC, VR/AR</li>
                    <li><strong>Technologies:</strong> Unity, Unreal Engine, C#, C++, Blender</li>
                    <li><strong>Services:</strong> Concept Design, Full Game Development, Post-Launch Support, Game Optimization</li>
                </ul>

                <div className="media">
                    <h3>Showcase: Flip Rush</h3>
                    <p>Experience the fast-paced, memory-based puzzle game, Flip Rush. Available now at <a href="https://flip-rush.com" target="_blank" rel="noopener noreferrer">flip-rush.com</a>.</p>

                    <div className="media-content">
                        <video controls className="showcase-video">
                            <source src="../Flip_Rush_Demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <img src="../Flip_Rush_Grid.png" alt="Flip Rush Screenshot" className="showcase-photo" />
                    </div>
                </div>
            </div>

            <div className="service-section">
                <h2>Software Development</h2>
                <p>
                    Our software development services are designed to meet the unique needs of each client, whether you're a startup looking for a minimum viable product or an enterprise in need of complex, scalable solutions. We combine technical expertise with a deep understanding of user experience to create software that is not only functional but also intuitive and user-friendly. From web applications to mobile apps and custom enterprise software, we build robust solutions that drive business success.
                </p>
                <ul>
                    <li><strong>Technologies:</strong> JavaScript, Python, Ruby, PHP, Java, .NET, React, Angular, Node.js</li>
                    <li><strong>Services:</strong> Web & Mobile App Development, Custom Software Solutions, API Development, SaaS Products</li>
                    <li><strong>Approach:</strong> Agile Development, Continuous Integration, Cloud-Based Solutions</li>
                </ul>
            </div>

            <div className="service-section">
                <h2>3D Printing</h2>
                <p>
                    At Engraphic Studio, we bring ideas into the physical world with our state-of-the-art 3D printing services. Whether you need prototypes, models, or end-use parts, our 3D printing team delivers precision and quality. We work with a variety of materials and offer a range of printing techniques to ensure that every project meets the highest standards of durability, detail, and design. From concept to final product, we support you through every step of the process.
                </p>
                <ul>
                    <li><strong>Capabilities:</strong> FDM, SLA, SLS, DMLS, Multi-Material Printing</li>
                    <li><strong>Materials:</strong> PLA, ABS, Nylon, Resin, Metals</li>
                    <li><strong>Applications:</strong> Prototyping, Product Design, Custom Manufacturing, Architectural Models</li>
                </ul>
            </div>

            <div className="service-section">
                <h2>Data Analysis</h2>
                <p>
                    In today's data-driven world, the ability to extract meaningful insights from data is critical. Our data analysis services empower businesses to make informed decisions, optimize operations, and uncover new opportunities. We combine advanced statistical methods, machine learning algorithms, and cutting-edge tools to analyze and interpret data in ways that provide actionable insights. Whether you're looking to understand customer behavior, improve operational efficiency, or predict future trends, we help you harness the power of your data.
                </p>
                <ul>
                    <li><strong>Technologies:</strong> Python, R, SQL, Tableau, Power BI, TensorFlow</li>
                    <li><strong>Services:</strong> Data Mining, Predictive Analytics, Business Intelligence, Machine Learning Models</li>
                    <li><strong>Industries:</strong> E-commerce, Healthcare, Finance, Manufacturing</li>
                </ul>
            </div>

            <a href="#about" className="button">Learn More About Us</a>
        </section>
    );
};

export default Services;
