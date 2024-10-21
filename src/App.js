import React from 'react';
import './App.css'; // for custom styling
import story from './Rectangle 10.jpg';
import blog from './icon.jpg';
import web from './Group.jpg';
import con from './con.jpg';
import soc from './soc.jpg';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts'; // Import the FeaturedProducts component
import BenefitSection from './benefit';
import BlogSection from './blog.js';
import Footer from './footer.js';
import Testimonials from './test.js';
function App() {

  return (
    <>
      <div className="hero-container">
        <nav className="navbar">
          <div className="logo">Agrivista Farms</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/pages">Pages</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </nav>
        <div className="hero-content">
          <h1>The Role of Technology in Revolutionizing Agriculture</h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
            Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
          <div className="hero-buttons">
            <button className="get-started-btn">Get Started</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="story-container">
        <div className="story-content">
          <h1>
            Our Passion for Agriculture <br />
            Nurturing Growth and <br />
            Sustaining the Future
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
            Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="story-image-container">
          <img src={story} alt="Agriculture Field" className="story-image" />
          <div className="since-box">Since 1976</div>
        </div>
      </div>

      <div className="service-container">
        <h2>Our service</h2>
        <p>
          Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <img src={blog} alt="Blog and Article Writing" className="service-icon" />
            <h3>Blog and Article Writing</h3>
          </div>

          <div className="service-card">
            <img src={web} alt="Website Content" className="service-icon" />
            <h3>Website Content</h3>
          </div>

          <div className="service-card">
            <img src={con} alt="Content Strategy and Consulting" className="service-icon" />
            <h3>Content Strategy and Consulting</h3>
          </div>

          <div className="service-card">
            <img src={soc} alt="Social Media Management" className="service-icon" />
            <h3>Social Media Management</h3>
          </div>
        </div>
      </div>

      <FeaturedProducts />;
      <HeroSection />;
      <BenefitSection />;
      <BlogSection />;
      <Testimonials />;
      <Footer />;
    </>
  );

}

export default App;
