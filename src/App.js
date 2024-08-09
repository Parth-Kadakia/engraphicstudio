import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Home />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
