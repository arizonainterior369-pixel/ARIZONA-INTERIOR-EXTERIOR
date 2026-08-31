import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import logo from "./assets/ChatGPT Image Aug 30, 2026, 03_45_47 PM.png";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="navbar">
        <a href="#home" className="logo">
          <img src={logo} alt="ARIZONA FURNITURE" />
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Get In Touch
        </a>
      </header>

      {/* HERO */}
      <main id="home">

        <section className="hero">
          <div className="hero-content">

            <div className="hero-label">
              ARIZONA INTERIOR EXTERIOR
            </div>

            <h1>
              Creating Spaces
              <br />
              That Define
              <br />
              <span>Luxury.</span>
            </h1>

            <p className="hero-description">
              Premium interior design, exterior design and customized
              furniture crafted to transform your vision into extraordinary
              spaces.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore Our Work →
              </a>

              <a href="#contact" className="text-link">
                Start Your Project
              </a>
            </div>

          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90"
              alt="Luxury Interior Design"
            />
          </div>
        </section>

        {/* INTRO */}
        <section className="intro">
          <div className="intro-label">ABOUT ARIZONA</div>

          <h2>
            We create interiors
            <br />
            that feel <em>timeless.</em>
          </h2>

          <p>
            Thoughtful design, refined materials and exceptional craftsmanship
            come together to create spaces that are beautiful, functional and
            made to last.
          </p>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">

          <div className="section-heading">
            <div>
              <div className="section-label">OUR SERVICES</div>
              <h2>Designed around you.</h2>
            </div>

            <p>
              From concept to completion, we create distinctive spaces with
              personality, comfort and purpose.
            </p>
          </div>

          <div className="services-grid">

            <article className="service-card">
              <span>01</span>
              <h3>Interior Design</h3>
              <p>
                Sophisticated interiors designed around your lifestyle,
                architecture and personal expression.
              </p>
              <a href="#contact">Discover →</a>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Exterior Design</h3>
              <p>
                Contemporary exterior concepts that create a strong and
                memorable identity for every property.
              </p>
              <a href="#contact">Discover →</a>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>Custom Furniture</h3>
              <p>
                Bespoke furniture created specifically for your space,
                combining design, comfort and craftsmanship.
              </p>
              <a href="#contact">Discover →</a>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Turnkey Solutions</h3>
              <p>
                Complete design and execution solutions from the first concept
                to the final finishing detail.
              </p>
              <a href="#contact">Discover →</a>
            </article>

          </div>
        </section>

        {/* FEATURE PROJECT */}
        <section className="feature-project" id="projects">

          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
              alt="Arizona Interior Project"
            />
          </div>

          <div className="feature-content">
            <div className="section-label">FEATURED PROJECT</div>

            <h2>
              Modern
              <br />
              Residence
            </h2>

            <p>
              A refined contemporary residence where warm textures, natural
              materials and clean architectural lines create a calm and
              sophisticated atmosphere.
            </p>

            <a href="#contact" className="text-link">
              View Project →
            </a>
          </div>

        </section>

        {/* PROJECTS */}
        <section className="projects">

          <div className="section-heading">
            <div>
              <div className="section-label">SELECTED WORK</div>
              <h2>Our latest projects.</h2>
            </div>
          </div>

          <div className="project-grid">

            <article className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=90"
                  alt="Premium Living"
                />
              </div>
              <div className="project-info">
                <span>01 / RESIDENTIAL</span>
                <h3>Premium Living</h3>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90"
                  alt="Elegant Interior"
                />
              </div>
              <div className="project-info">
                <span>02 / INTERIOR</span>
                <h3>Elegant Space</h3>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=90"
                  alt="Contemporary Home"
                />
              </div>
              <div className="project-info">
                <span>03 / RESIDENTIAL</span>
                <h3>Contemporary Home</h3>
              </div>
            </article>

          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=90"
              alt="Arizona Interior"
            />
          </div>

          <div className="about-content">
            <div className="section-label">WHO WE ARE</div>

            <h2>
              Design with
              <br />
              purpose.
            </h2>

            <p>
              ARIZONA INTERIOR EXTERIOR brings together interior design,
              exterior architecture and customized furniture under one
              creative vision.
            </p>

            <p>
              We believe great design is not simply about how a space looks.
              It is about how it feels, functions and becomes part of everyday
              life.
            </p>

            <div className="stats">

              <div>
                <strong>100+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Attention to Detail</span>
              </div>

            </div>
          </div>

        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">

          <div className="section-label">START A CONVERSATION</div>

          <h2>
            Let's create
            <br />
            something <em>beautiful.</em>
          </h2>

          <p>
            Have a project in mind? Tell us about your space and let's bring
            your vision to life.
          </p>

          <div className="contact-buttons">
            <a href="mailto:info@example.com" className="btn-primary">
              Get In Touch →
            </a>

            <a href="tel:+910000000000" className="text-link">
              Call Us
            </a>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-brand">
          <img src={logo} alt="ARIZONA FURNITURE" />
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p>
          © 2026 Arizona Interior Exterior
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
