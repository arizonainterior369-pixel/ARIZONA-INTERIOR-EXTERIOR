import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">ARIZONA</div>

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

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">ARIZONA INTERIOR EXTERIOR</p>

          <h1>
            Creating Spaces
            <br />
            That Define <span>Luxury.</span>
          </h1>

          <p className="hero-text">
            Premium Interior Design, Exterior Design and Customized Furniture
            crafted to transform your vision into extraordinary spaces.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Start Your Project →
            </a>
          </div>
        </div>

        <div className="hero-box">
          <div className="hero-image-text">
            PREMIUM
            <br />
            DESIGN
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-heading">
          <p>WHAT WE DO</p>
          <h2>Designed Around Your Lifestyle</h2>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <div className="number">01</div>
            <h3>Interior Design</h3>
            <p>
              Modern, elegant and functional interiors designed specifically
              around your lifestyle.
            </p>
            <span>Explore →</span>
          </div>

          <div className="service-card">
            <div className="number">02</div>
            <h3>Exterior Design</h3>
            <p>
              Transforming buildings into timeless architectural statements
              with premium exterior design.
            </p>
            <span>Explore →</span>
          </div>

          <div className="service-card">
            <div className="number">03</div>
            <h3>Customized Furniture</h3>
            <p>
              Bespoke furniture designed with precision, quality materials and
              exceptional craftsmanship.
            </p>
            <span>Explore →</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="section-heading">
          <p>OUR PORTFOLIO</p>
          <h2>Selected Projects</h2>
        </div>

        <div className="project-grid">
          <div className="project-card project-one">
            <div className="project-info">
              <p>RESIDENTIAL</p>
              <h3>Modern Luxury Residence</h3>
            </div>
          </div>

          <div className="project-card project-two">
            <div className="project-info">
              <p>INTERIOR</p>
              <h3>Contemporary Living</h3>
            </div>
          </div>

          <div className="project-card project-three">
            <div className="project-info">
              <p>COMMERCIAL</p>
              <h3>Premium Workspace</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-left">
          <p>ABOUT ARIZONA</p>
          <h2>We Design More Than Spaces.</h2>
        </div>

        <div className="about-right">
          <p>
            At Arizona Interior Exterior, we believe every space should tell a
            story. Our team combines creativity, functionality and premium
            craftsmanship to deliver interiors and exteriors that stand apart.
          </p>

          <div className="stats">
            <div>
              <h3>100+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Quality Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <p>LET'S CREATE SOMETHING EXCEPTIONAL</p>
        <h2>Have a Project in Mind?</h2>
        <a href="mailto:info@arizonainterior.com">
          Let's Talk About It →
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <h2>ARIZONA</h2>
          <p>INTERIOR • EXTERIOR • FURNITURE</p>
        </div>

        <p>© 2026 Arizona Interior Exterior. All Rights Reserved.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
