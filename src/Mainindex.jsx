import React from 'react';
import './Trailindex.css';
import empowerImage from './images/488809.jpg';
import ProtectImage from './images/Gender_Equality_Week.png';
import SupportImage from './images/sgbv.jpg';
function App() {
  return (
    <div className="app">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">GENDER VIOLENCE RESPONSE MECHANISM</div>
        <ul className="navbar-links">
          <li><a href="./">Home</a></li>
          <li><a href="./about">About</a></li>
          <li><a href="./index">Login</a></li>
          <li><a href="./register">Sign Up</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header" id="home">
        <h1>GENDER VIOLENCE RESPONSE MECHANISM</h1>
        <p>Address domestic violence with targeted solutions</p>
        <button className="get-started">Get Started</button>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Stop Domestic Violence</h2>
        <div className="cards">
          <div className="card">
          <img src={empowerImage} alt="Empower" className="card-image" />
            <p>Empower</p>
          </div>
          <div className="card">
            <img src={ProtectImage} alt="Empower" className="card-image" />
            <p>Support</p>
          </div>
          <div className="card">
          <img src={SupportImage} alt="Empower" className="card-imagess" />
            <p>Protect</p>
          </div>
        </div>

        <section className="info-section" id="about">
          <h3>Understanding Gender-Based Domestic Violence</h3>
          <p>
            Domestic violence is a severe issue that affects individuals regardless of their gender.
            However, women and children are disproportionately affected. Gender-responsive solutions
            are essential to addressing the root causes of violence and empowering victims through
            support and legal mechanisms.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer" id="contact">
        <p>Latest Version: 0.7.23 | Great ★★★★★ Trustpilot</p>
      </footer>
    </div>
  );
}

export default App;