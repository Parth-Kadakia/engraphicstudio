import React from 'react';
import MainSection from './components/MainSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

import { Element, scroller } from 'react-scroll';

function App() {
    return (
        <div>
            <Element name="main">
                <MainSection />
            </Element>
            <Element name="services">
                <ServicesSection />
            </Element>
            <Element name="about">
                <AboutSection />
            </Element>
            <Element name="contact">
                <ContactSection />
            </Element>
        </div>
    );
}

export default App;
