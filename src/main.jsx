import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import logo from "./assets/ChatGPT Image Aug 30, 2026, 03_45_47 PM.png";
import bedModel710 from "./assets/IMG_20260831_155052.jpg";
function App() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div>FREE SHIPPING ON ORDERS OVER ₹35,000</div>
        <div className="top-right">
          <span>Languages: EN</span>
          <span>Currency: INR ₹</span>
          <span>My Account</span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="store-header">
        <div className="brand">
          <img src={logo} alt="Arizona Furniture" />
        </div>

        <div className="search-area">
          <div className="category-select">
            ALL CATEGORIES ▾
          </div>

          <input
            type="text"
            placeholder="Search our store..."
          />

          <button className="search-btn">
            🔍
          </button>
        </div>

        <div className="header-actions">
          <div className="account">
            <span className="action-icon">♙</span>
            <div>
              <small>WELCOME</small>
              <strong>MY ACCOUNT</strong>
            </div>
          </div>

          <div className="cart">
            <span className="action-icon">🛒</span>
            <div>
              <small>YOUR CART</small>
              <strong>₹0.00</strong>
            </div>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="main-nav">
        <a href="#home" className="active">HOME ▾</a>
        <a href="#about">ABOUT US</a>

        <a href="#explore">
          EXPLORE <span>⌄</span>
        </a>

        <a href="#bed-bath">
          BED &amp; BATH <span>⌄</span>
        </a>

        <a href="#decor">
          DECOR <span>⌄</span>
        </a>

        <a href="#dining">
          DINING ROOMS <span>⌄</span>
        </a>

        <a href="#living">
          LIVING ROOMS <span>⌄</span>
        </a>

        <a href="#blogs">BLOGS</a>
      </nav>

      {/* SERVICE STRIP */}
      <section className="service-strip">

        <div className="service-item">
          <div className="service-icon">↩</div>
          <div>
            <strong>30-DAYS RETURNS</strong>
            <span>Easy returns &amp; exchanges</span>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">🚚</div>
          <div>
            <strong>FREE SHIPPING</strong>
            <span>ON ORDERS OVER ₹35,000</span>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">✓</div>
          <div>
            <strong>QUALITY GUARANTEE</strong>
            <span>Premium furniture quality</span>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">☎</div>
          <div>
            <strong>24/7 CUSTOMER SUPPORT</strong>
            <span>We're here to help</span>
          </div>
        </div>

      </section>

      {/* HERO */}
      <main id="home">

        <section className="store-hero">

          <div className="hero-slide-content">
            <p className="hero-small-title">
              ARIZONA FURNITURE
            </p>

            <h1>
              ELEVATE
              <br />
              YOUR
              <br />
              <span>LIFESTYLE</span>
            </h1>

            <p className="hero-description">
              Discover premium furniture designed to bring
              comfort, elegance and timeless style into your home.
            </p>

            <a href="#explore" className="hero-btn">
              SHOP COLLECTION
            </a>
          </div>

          <div className="hero-slide-image">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90"
              alt="Luxury Furniture Interior"
            />
          </div>

        </section>

        {/* CATEGORIES */}
        <section className="categories" id="explore">

          <div className="section-heading">
            <p>EXPLORE OUR COLLECTION</p>
            <h2>SHOP BY CATEGORY</h2>
          </div>

          <div className="category-grid">

            <a href="#living" className="category-card">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85"
                alt="Living Room"
              />
              <div>
                <h3>LIVING ROOMS</h3>
                <span>Explore Collection →</span>
              </div>
            </a>

            <a href="#dining" className="category-card">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85"
                alt="Dining Room"
              />
              <div>
                <h3>DINING ROOMS</h3>
                <span>Explore Collection →</span>
              </div>
            </a>

            <a href="#bed-bath" className="category-card">
             <img
  src={bedModel710}
  alt="IMG_20260831_155052"
/>
              <div>
                <h3>BED &amp; BATH</h3>
                <span>Explore Collection →</span>
              </div>
            </a>

            <a href="#decor" className="category-card">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=85"
                alt="Home Decor"
              />
              <div>
                <h3>HOME DECOR</h3>
                <span>Explore Collection →</span>
              </div>
            </a>

          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="products-section" id="living">

          <div className="section-heading">
            <p>ARIZONA FURNITURE</p>
            <h2>FEATURED COLLECTION</h2>
          </div>

          <div className="product-grid">

            <div className="product-card">
              <div className="product-image">
                <span className="sale-badge">NEW</span>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury Chair"
                />
              </div>

              <div className="product-info">
                <p>CHAIRS</p>
                <h3>Modern Accent Chair</h3>
                <strong>₹24,900</strong>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <span className="sale-badge">NEW</span>
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury Sofa"
                />
              </div>

              <div className="product-info">
                <p>SOFAS</p>
                <h3>Premium Lounge Sofa</h3>
                <strong>₹69,900</strong>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <span className="sale-badge">NEW</span>
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury Table"
                />
              </div>

              <div className="product-info">
                <p>TABLES</p>
                <h3>Contemporary Coffee Table</h3>
                <strong>₹32,500</strong>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <span className="sale-badge">NEW</span>
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"
                  alt="Bedroom Furniture"
                />
              </div>

              <div className="product-info">
                <p>BEDROOM</p>
                <h3>Luxury Bedroom Collection</h3>
                <strong>₹89,900</strong>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURE BANNER */}
        <section className="feature-banner" id="decor">

          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=90"
            alt="Arizona Interior Collection"
          />

          <div className="feature-overlay">
            <p>ARIZONA COLLECTION</p>
            <h2>
              DESIGNED FOR
              <br />
              BEAUTIFUL LIVING
            </h2>

            <a href="#projects">
              DISCOVER MORE →
            </a>
          </div>

        </section>

        {/* ABOUT */}
        <section className="store-about" id="about">

          <div className="about-photo">
            <img
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1100&q=90"
              alt="Arizona Furniture Interior"
            />
          </div>

          <div className="about-text">
            <p>ABOUT ARIZONA FURNITURE</p>

            <h2>
              FURNITURE THAT
              <br />
              DEFINES YOUR SPACE.
            </h2>

            <p>
              At Arizona Furniture, we believe furniture should be
              more than functional. It should express your personality,
              complement your space and provide lasting comfort.
            </p>

            <p>
              From contemporary living rooms to elegant bedrooms,
              every collection is selected with quality, craftsmanship
              and timeless design in mind.
            </p>

            <a href="#contact" className="outline-btn">
              KNOW MORE
            </a>
          </div>

        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">

          <p>STAY CONNECTED WITH ARIZONA</p>

          <h2>
            GET INSPIRATION
            <br />
            DELIVERED TO YOU.
          </h2>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
            />

            <button>
              SUBSCRIBE
            </button>
          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer" id="contact">

        <div className="footer-main">

          <div className="footer-brand">
            <img src={logo} alt="Arizona Furniture" />

            <p>
              Premium furniture and interior solutions
              designed for modern living.
            </p>
          </div>

          <div className="footer-column">
            <h3>SHOP</h3>
            <a href="#living">Living Rooms</a>
            <a href="#dining">Dining Rooms</a>
            <a href="#bed-bath">Bed &amp; Bath</a>
            <a href="#decor">Home Decor</a>
          </div>

          <div className="footer-column">
            <h3>INFORMATION</h3>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#blogs">Blogs</a>
            <a href="#explore">Collections</a>
          </div>

          <div className="footer-column">
            <h3>CONTACT</h3>
            <p>Surat, Gujarat, India</p>
            <p>+91 99795 33083</p>
            <p>info@arizonafurniture.in</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 ARIZONA FURNITURE. ALL RIGHTS RESERVED.
          </p>

          <div>
            Privacy Policy &nbsp; | &nbsp; Terms &amp; Conditions
          </div>
        </div>

      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
