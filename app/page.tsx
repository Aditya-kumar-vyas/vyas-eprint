'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        :root {
          --blue: #0757a5;
          --darkblue: #06366d;
          --sky: #00a8e8;
          --yellow: #ffd21f;
          --orange: #ff7a18;
          --pink: #ff3f81;
          --purple: #7746d7;
          --green: #19a957;
          --red: #ef4444;
          --light: #f4faff;
          --dark: #102a43;
          --text: #526579;
          --white: #ffffff;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          color: var(--text);
          background: #fff;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
        }

        .container {
          width: 92%;
          max-width: 1200px;
          margin: auto;
        }

        section {
          padding: 85px 0;
        }

        /* ================= HEADER ================= */

        header {
          position: sticky;
          top: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .logo {
          font-size: 25px;
          font-weight: 900;
          color: var(--blue);
          line-height: 1.05;
        }

        .logo span {
          color: #ed2b35;
        }

        .logo small {
          display: block;
          text-align: center;
          font-size: 11px;
          letter-spacing: 5px;
          color: var(--darkblue);
          margin-top: 5px;
        }

        nav {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        nav a {
          color: var(--dark);
          font-weight: bold;
          transition: 0.3s;
        }

        nav a:hover {
          color: var(--orange);
        }

        .nav-whatsapp {
          background: var(--green);
          color: #fff;
          padding: 11px 18px;
          border-radius: 30px;
          font-weight: bold;
          box-shadow: 0 6px 15px rgba(25, 169, 87, 0.25);
        }

        .menu {
          display: none;
          font-size: 30px;
          cursor: pointer;
          color: var(--blue);
          background: none;
          border: none;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;

          background: linear-gradient(135deg, rgba(5, 67, 135, 0.97), rgba(0, 164, 225, 0.86)),
            radial-gradient(circle at 90% 20%, #ffe56b, transparent 30%);
        }

        .hero:before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 80px solid rgba(255, 255, 255, 0.08);
          right: -180px;
          top: -170px;
        }

        .hero:after {
          content: '';
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: rgba(255, 210, 31, 0.12);
          left: -170px;
          bottom: -180px;
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text {
          color: white;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 8px 18px;
          border-radius: 30px;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .hero h1 {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1;
          margin-bottom: 18px;
        }

        .hero h1 span {
          color: var(--yellow);
        }

        .hero h2 {
          font-size: 27px;
          color: white;
          margin-bottom: 18px;
        }

        .hero p {
          font-size: 18px;
          max-width: 650px;
          margin-bottom: 28px;
          color: #f1f8ff;
        }

        .hero-address {
          background: rgba(255, 255, 255, 0.12);
          padding: 15px 18px;
          border-radius: 12px;
          margin-bottom: 25px;
          max-width: 650px;
          border-left: 5px solid var(--yellow);
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .btn {
          display: inline-block;
          padding: 14px 23px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .btn-yellow {
          background: var(--yellow);
          color: #163454;
        }

        .btn-white {
          background: white;
          color: var(--blue);
        }

        .btn-green {
          background: var(--green);
          color: white;
        }

        /* Hero illustration */

        .hero-art {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 30px;
          padding: 35px;
          text-align: center;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          transform: rotate(1deg);
        }

        .hero-art .big-icon {
          font-size: 120px;
        }

        .hero-art h3 {
          color: var(--darkblue);
          font-size: 27px;
        }

        .hero-art p {
          color: var(--text);
          margin: 8px 0 0;
        }

        /* ================= SECTION TITLES ================= */

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title span {
          display: inline-block;
          color: var(--orange);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 7px;
        }

        .section-title h2 {
          color: var(--darkblue);
          font-size: clamp(32px, 5vw, 46px);
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .section-title p {
          max-width: 700px;
          margin: auto;
          color: var(--text);
        }

        /* ================= SERVICES ================= */

        .services {
          background: linear-gradient(180deg, #f5fbff, #fff);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 23px;
        }

        .service-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 1px solid #e2edf7;
          box-shadow: 0 7px 25px rgba(0, 70, 130, 0.06);
          transition: 0.35s;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 18px 40px rgba(0, 70, 130, 0.15);
        }

        .service-card:nth-child(1) {
          border-top: 6px solid var(--pink);
        }
        .service-card:nth-child(2) {
          border-top: 6px solid var(--blue);
        }
        .service-card:nth-child(3) {
          border-top: 6px solid var(--purple);
        }
        .service-card:nth-child(4) {
          border-top: 6px solid var(--orange);
        }
        .service-card:nth-child(5) {
          border-top: 6px solid var(--sky);
        }
        .service-card:nth-child(6) {
          border-top: 6px solid var(--green);
        }
        .service-card:nth-child(7) {
          border-top: 6px solid var(--yellow);
        }

        .service-icon {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          margin: 5px auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card:nth-child(1) .service-icon {
          background: #ffe5f0;
        }
        .service-card:nth-child(2) .service-icon {
          background: #e4f2ff;
        }
        .service-card:nth-child(3) .service-icon {
          background: #eee7ff;
        }
        .service-card:nth-child(4) .service-icon {
          background: #fff0df;
        }
        .service-card:nth-child(5) .service-icon {
          background: #def8ff;
        }
        .service-card:nth-child(6) .service-icon {
          background: #e2f9eb;
        }
        .service-card:nth-child(7) .service-icon {
          background: #fff8d7;
        }

        .service-icon svg {
          width: 65px;
          height: 65px;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .service-card:nth-child(1) svg {
          stroke: var(--pink);
        }
        .service-card:nth-child(2) svg {
          stroke: var(--blue);
        }
        .service-card:nth-child(3) svg {
          stroke: var(--purple);
        }
        .service-card:nth-child(4) svg {
          stroke: var(--orange);
        }
        .service-card:nth-child(5) svg {
          stroke: var(--sky);
        }
        .service-card:nth-child(6) svg {
          stroke: var(--green);
        }
        .service-card:nth-child(7) svg {
          stroke: #d39d00;
        }

        .service-card h3 {
          color: var(--darkblue);
          font-size: 20px;
          margin-bottom: 8px;
        }

        .service-card p {
          font-size: 14px;
          color: #718096;
        }

        /* ================= STATIONERY ================= */

        .stationery {
          background: white;
        }

        .stationery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .stationery-art {
          min-height: 400px;
          border-radius: 30px;
          background: linear-gradient(135deg, #e3f4ff, #fff2c7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 140px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .stationery-text h2 {
          font-size: 42px;
          color: var(--darkblue);
          line-height: 1.1;
          margin-bottom: 18px;
        }

        .stationery-text p {
          margin-bottom: 25px;
        }

        .stationery-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .stationery-list div {
          padding: 13px;
          border-radius: 9px;
          background: #f4f9ff;
          font-weight: bold;
          color: var(--darkblue);
        }

        .stationery-list div:before {
          content: '✓';
          color: var(--green);
          margin-right: 8px;
        }

        /* ================= WHY US ================= */

        .why {
          background: #f3f9ff;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .feature {
          background: #fff;
          text-align: center;
          padding: 30px 20px;
          border-radius: 18px;
          border: 1px solid #e3edf6;
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .feature h3 {
          color: var(--darkblue);
          margin-bottom: 8px;
        }

        .feature p {
          font-size: 14px;
        }

        /* ================= ADDRESS BANNER ================= */

        .address-banner {
          background: linear-gradient(120deg, #073b78, #079bd2);
          color: white;
        }

        .address-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 30px;
        }

        .address-grid h2 {
          font-size: 35px;
          margin-bottom: 10px;
        }

        .address-box {
          font-size: 18px;
          line-height: 1.7;
        }

        .whatsapp-number {
          background: #25d366;
          padding: 18px 25px;
          border-radius: 15px;
          color: white;
          font-size: 23px;
          font-weight: bold;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        /* ================= CONTACT ================= */

        .contact {
          background: #fff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .contact-card {
          background: #f5faff;
          padding: 35px;
          border-radius: 20px;
          border: 1px solid #dfedf8;
        }

        .contact-item {
          display: flex;
          gap: 18px;
          margin-bottom: 25px;
        }

        .contact-item:last-child {
          margin-bottom: 0;
        }

        .contact-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: var(--blue);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .contact-item h3 {
          color: var(--darkblue);
          margin-bottom: 3px;
        }

        .contact-item p {
          color: var(--text);
        }

        .map-card {
          background: linear-gradient(135deg, #e7f6ff, #fff7d8);
          border-radius: 20px;
          padding: 50px 30px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .map-icon {
          font-size: 70px;
          margin-bottom: 10px;
        }

        /* ================= FOOTER ================= */

        footer {
          background: #052e5e;
          color: white;
          padding: 50px 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr;
          gap: 40px;
        }

        .footer-logo {
          font-size: 27px;
          font-weight: bold;
          margin-bottom: 12px;
        }

        .footer-logo span {
          color: var(--yellow);
        }

        footer p {
          color: #c9dced;
        }

        footer h3 {
          margin-bottom: 15px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #c9dced;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          text-align: center;
          color: #aac4dd;
          font-size: 14px;
        }

        /* ================= FLOATING WHATSAPP ================= */

        .whatsapp-float {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 64px;
          height: 64px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 32px;
          z-index: 999;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          transition: 0.3s;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-address {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-art {
            max-width: 500px;
            margin: auto;
            width: 100%;
          }
        }

        @media (max-width: 750px) {
          .menu {
            display: block;
          }

          nav {
            display: none;
            position: absolute;
            left: 0;
            right: 0;
            top: 78px;
            background: white;
            padding: 22px;
            flex-direction: column;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          nav.active {
            display: flex;
          }

          .nav-whatsapp {
            display: none;
          }

          .hero h1 {
            font-size: 45px;
          }

          .services-grid,
          .features,
          .stationery-grid,
          .contact-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .stationery-text h2 {
            font-size: 34px;
          }

          .stationery-list {
            grid-template-columns: 1fr;
          }

          .address-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .whatsapp-number {
            display: inline-block;
          }

          section {
            padding: 65px 0;
          }
        }

        @media (max-width: 480px) {
          .logo {
            font-size: 20px;
          }

          .hero-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero h2 {
            font-size: 22px;
          }

          .hero-art {
            padding: 25px 15px;
          }

          .hero-art .big-icon {
            font-size: 85px;
          }

          .service-card {
            padding: 25px 15px;
          }

          .address-grid h2 {
            font-size: 28px;
          }

          .address-box {
            font-size: 16px;
          }
        }
      `}</style>

      {/* ================= HEADER ================= */}
      <header>
        <div className="container navbar">
          <a href="#home" className="logo">
            Vyas <span>ePrint</span>
            <br />
            and Stationers
            <small>JODHPUR</small>
          </a>

          <button className="menu" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>

          <nav id="navMenu" className={menuOpen ? 'active' : ''}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#stationery" onClick={closeMenu}>
              Stationery
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a className="nav-whatsapp" href="https://wa.me/917976711615" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="hero-badge">📍 Serving Jodhpur</div>

            <h1>
              Vyas <span>ePrint</span>
              <br />
              and Stationers
            </h1>

            <h2>Your Complete Printing &amp; Stationery Solution</h2>

            <p>
              Quality printing, photocopying, passport photos, lamination, spiral binding and all kinds of
              stationery items — conveniently available under one roof.
            </p>

            <div className="hero-address">
              <strong>📍 Shop Address:</strong>
              <br />
              21E/348, CHB, Near Udhyan Apartment,
              <br />
              Pal Road, Jodhpur - 342008, Rajasthan
            </div>

            <div className="hero-buttons">
              <a href="#services" className="btn btn-yellow">
                ✨ Explore Our Services
              </a>

              <a href="https://wa.me/917976711615" target="_blank" rel="noopener noreferrer" className="btn btn-white">
                💬 WhatsApp: 7976711615
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="big-icon">🖨️📄</div>

            <h3>Print • Copy • Bind • Stationery</h3>

            <p>Fast Service • Quality Work • Affordable Rates</p>

            <br />

            <div style={{ fontSize: '38px' }}>🎨 📚 ✏️ 📎</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <span>What We Offer</span>
            <h2>Our Services</h2>
            <p>Professional printing and document services for students, offices, businesses and everyday needs.</p>
          </div>

          <div className="services-grid">
            {/* 1 COLOUR PRINTOUT */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="10" y="20" width="44" height="29" rx="4" />
                  <path d="M18 20V9h28v11" />
                  <rect x="18" y="40" width="28" height="14" rx="2" />
                  <circle cx="46" cy="28" r="2" />
                  <path d="M23 45h18" />
                </svg>
              </div>
              <h3>Colour Printout</h3>
              <p>Bright, sharp and professional colour printing for documents, projects, photos and more.</p>
            </div>

            {/* 2 BW PRINT */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="10" y="20" width="44" height="29" rx="4" />
                  <path d="M18 20V9h28v11" />
                  <rect x="18" y="40" width="28" height="14" rx="2" />
                  <path d="M23 45h18" />
                  <path d="M23 28h18" />
                </svg>
              </div>
              <h3>BW Printout</h3>
              <p>Clear and economical black &amp; white printing for everyday documents and study material.</p>
            </div>

            {/* 3 PHOTOCOPY */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="17" y="15" width="31" height="39" rx="3" />
                  <path d="M24 11h27v35" />
                  <path d="M25 25h15" />
                  <path d="M25 32h15" />
                  <path d="M25 39h10" />
                  <path d="M25 46h15" />
                </svg>
              </div>
              <h3>Photocopy</h3>
              <p>Fast and reliable photocopying for documents, forms, notes and study material.</p>
            </div>

            {/* 4 PASSPORT PHOTO */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="11" y="7" width="42" height="50" rx="4" />
                  <circle cx="32" cy="25" r="8" />
                  <path d="M18 48c2-9 8-14 14-14s12 5 14 14" />
                  <path d="M18 14h9" />
                </svg>
              </div>
              <h3>Passport Photo</h3>
              <p>Passport-size photographs for applications, forms, IDs and official documents.</p>
            </div>

            {/* 5 LAMINATION */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="10" y="19" width="44" height="29" rx="3" />
                  <path d="M10 29h44" />
                  <path d="M20 12h24" />
                  <path d="M20 53h24" />
                  <path d="M24 38h16" />
                </svg>
              </div>
              <h3>Lamination</h3>
              <p>Protect certificates, documents, photographs, cards and important papers.</p>
            </div>

            {/* 6 SPIRAL BINDING */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  <rect x="21" y="9" width="32" height="46" rx="2" />
                  <path d="M29 9v46" />
                  <path d="M14 14c8 0 8 8 0 8" />
                  <path d="M14 25c8 0 8 8 0 8" />
                  <path d="M14 36c8 0 8 8 0 8" />
                  <path d="M14 47c8 0 8 8 0 8" />
                </svg>
              </div>
              <h3>Spiral Binding</h3>
              <p>Neat and durable binding for projects, reports, assignments, books and documents.</p>
            </div>

            {/* 7 STATIONERY */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 64 64">
                  {/* Pencil */}
                  <path d="M12 48l5-18L43 4l9 9-26 26z" />
                  <path d="M17 30l9 9" />
                  <path d="M43 4l9 9" />

                  {/* Pen */}
                  <path d="M39 50l14-14" />
                  <path d="M43 54l-8-8" />
                  <path d="M49 30l7 7" />
                </svg>
              </div>
              <h3>All Kind of Stationery</h3>
              <p>Pens, pencils, notebooks, files, folders, art supplies, office supplies and much more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATIONERY ================= */}
      <section className="stationery" id="stationery">
        <div className="container stationery-grid">
          <div className="stationery-art">📚 ✏️ 🖊️ 📒</div>

          <div className="stationery-text">
            <div className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              <span>Stationery Store</span>
              <h2>Everything You Need</h2>
            </div>

            <p>
              We offer a wide range of stationery products suitable for schools, colleges, offices, businesses and
              personal use.
            </p>

            <div className="stationery-list">
              <div>📓 Notebooks &amp; Registers</div>
              <div>🖊️ Pens &amp; Writing Items</div>
              <div>✏️ Pencils &amp; Erasers</div>
              <div>📁 Files &amp; Folders</div>
              <div>🎨 Art &amp; Craft Materials</div>
              <div>🖍️ Colours &amp; Markers</div>
              <div>📎 Office Supplies</div>
              <div>📚 School Supplies</div>
              <div>📋 Project Materials</div>
              <div>🗂️ And Much More</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why" id="about">
        <div className="container">
          <div className="section-title">
            <span>Why Choose Us</span>
            <h2>Quality • Speed • Value</h2>
            <p>We aim to make your printing and stationery work simple, convenient and reliable.</p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Quality Work</h3>
              <p>Clean, sharp and professional printing and finishing.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>Fast service for your everyday printing requirements.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">😊</div>
              <h3>Customer Friendly</h3>
              <p>Helpful service for students, families and businesses.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Affordable Rates</h3>
              <p>Value-for-money printing and stationery solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLETE ADDRESS ================= */}
      <section className="address-banner">
        <div className="container address-grid">
          <div>
            <h2>📍 Visit Vyas ePrint and Stationers</h2>

            <div className="address-box">
              <strong>Complete Shop Address:</strong>
              <br />
              21E/348, CHB, Near Udhyan Apartment,
              <br />
              Pal Road, Jodhpur - 342008,
              <br />
              Rajasthan, India
            </div>
          </div>

          <a href="https://wa.me/917976711615" target="_blank" rel="noopener noreferrer" className="whatsapp-number">
            💬 WhatsApp
            <br />
            7976711615
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <span>Get In Touch</span>
            <h2>Contact Us</h2>
            <p>Have a printing or stationery requirement? Contact us on WhatsApp or visit our shop.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Shop Address</h3>
                  <p>
                    <strong>
                      21E/348, CHB,
                      <br />
                      Near Udhyan Apartment,
                      <br />
                      Pal Road,
                      <br />
                      Jodhpur - 342008, Rajasthan
                    </strong>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div>
                  <h3>WhatsApp Number</h3>
                  <p>
                    <a
                      href="https://wa.me/917976711615"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#19a957', fontWeight: 'bold', fontSize: '20px' }}
                    >
                      +91 79767 11615
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🖨️</div>
                <div>
                  <h3>Services</h3>
                  <p>Colour Printout • BW Printout • Photocopy • Passport Photo • Lamination • Spiral Binding • Stationery</p>
                </div>
              </div>
            </div>

            <div className="map-card">
              <div>
                <div className="map-icon">📍</div>

                <h2 style={{ color: '#06366d' }}>Find Our Shop</h2>

                <p>
                  21E/348, CHB, Near Udhyan Apartment,
                  <br />
                  Pal Road, Jodhpur - 342008
                </p>

                <br />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=21E%2F348%2C%20CHB%2C%20Near%20Udhyan%20Apartment%2C%20Pal%20Road%2C%20Jodhpur%20342008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-yellow"
                >
                  📍 Open Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              Vyas <span>ePrint</span> and Stationers
            </div>

            <p>
              Your one-stop destination for printing, photocopying, passport photos, lamination, spiral binding and
              stationery in Jodhpur.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#stationery">Stationery</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact Details</h3>

            <p>
              📍 21E/348, CHB,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Near Udhyan Apartment,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Pal Road,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Jodhpur - 342008, Rajasthan
            </p>

            <br />

            <p>
              💬 <strong>7976711615</strong>
            </p>
          </div>
        </div>

        <div className="container footer-bottom">© 2026 Vyas ePrint and Stationers, Jodhpur. All Rights Reserved.</div>
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/917976711615"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Vyas ePrint and Stationers"
      >
        💬
      </a>
    </>
  )
}