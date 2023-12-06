import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <About />
          <Services />
          <Testimonial />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



