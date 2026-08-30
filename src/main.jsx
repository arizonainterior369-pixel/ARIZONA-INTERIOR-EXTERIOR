import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import logo from "./assets/ChatGPT Image Aug 30, 2026, 03_45_47 PM.png";
function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
  <img src={logo} alt="ARIZONA FURNITURE" />
</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Get a Quote
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p>ARIZONA INTERIOR EXTERIOR</p>

          <h1>
            Creating Spaces
            <br />
            That Define
            <br />
            <span>Luxury.</span>
          </h1>

          <p>
            Premium Interior Design, Exterior Design and Customized Furniture
            crafted to transform your vision into extraordinary spaces.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              Explore Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Start Your Project →
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Interior"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <p className="section-tag">WHAT WE DO</p>

        <h2 className="section-title">
          Design Beyond Expectations
        </h2>

        <p className="section-description">
          From concept to completion, we create thoughtfully designed spaces
          with exceptional quality and attention to every detail.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <p className="service-number">01</p>
            <h3>Interior Design</h3>
            <p>
              Elegant and functional interiors designed specifically for your
              lifestyle, space and vision.
            </p>
          </div>

          <div className="service-card">
            <p className="service-number">02</p>
            <h3>Exterior Design</h3>
            <p>
              Modern and impressive exterior solutions that give your property
              a distinctive identity.
            </p>
          </div>

          <div className="service-card">
            <p className="service-number">03</p>
            <h3>Customized Furniture</h3>
            <p>
              Premium custom furniture designed with quality materials,
              craftsmanship and timeless style.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <p className="section-tag">OUR WORK</p>

        <h2 className="section-title">
          Selected Projects
        </h2>

        <p className="section-description">
          Explore a selection of spaces designed and crafted with creativity,
          precision and attention to detail.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
                alt="Modern Residence"
              />
            </div>

            <div className="project-info">
              <h3>Modern Residence</h3>
              <p>Luxury Interior Design</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
                alt="Premium Living"
              />
            </div>

            <div className="project-info">
              <h3>Premium Living</h3>
              <p>Contemporary Interior</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
                alt="Elegant Space"
              />
            </div>

            <div className="project-info">
              <h3>Elegant Space</h3>
              <p>Customized Furniture</p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=80"
            alt="Arizona Interior"
          />
        </div>

        <div className="about-content">
          <p className="section-tag">ABOUT ARIZONA</p>

          <h2>
            Spaces Designed
            <br />
            For Living.
          </h2>

          <p>
            ARIZONA INTERIOR EXTERIOR is dedicated to creating premium spaces
            where design, comfort and functionality come together.
          </p>

          <p>
            Our approach combines creative design, quality materials and skilled
            craftsmanship to deliver exceptional interiors, exteriors and
            customized furniture solutions.
          </p>

          <div className="stats">

            <div className="stat">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h3>100%</h3>
              <p>Quality Focus</p>
            </div>

          </div>
        </div>

      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <p className="section-tag">LET'S CREATE SOMETHING EXTRAORDINARY</p>

        <h2 className="section-title">
          Let's Design Your
          <br />
          Dream Space.
        </h2>

        <p>
          Have a project in mind? Let's discuss your ideas and create a space
          that reflects your vision.
        </p>

        <a href="mailto:info@example.com" className="btn-primary">
          Get in Touch
        </a>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          ARIZONA
        </div>

        <p>
          © 2026 Arizona Interior Exterior. All Rights Reserved.
        </p>

      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
