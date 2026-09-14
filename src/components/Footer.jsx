import React from 'react';
import logoIf from '../assets/ti-logo.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* KOLOM 1: BRAND & ALAMAT */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src={logoIf} alt="HMTI UMP" />
              <div>
                <strong>HMTI UMP</strong>
                <span>Teknik Informatika</span>
              </div>
            </div>
            <div className="footer-address">
              <p>
                <strong>Alamat</strong><br />
                Jl. KH. Ahmad Dahlan, Dukuhwaluh, Kembaran, Banyumas, Jawa Tengah 53182
              </p>
              <p>
                <strong>Email</strong><br />
                hmti@ump.ac.id
              </p>
            </div>
          </div>

          {/* KOLOM 2: NAVIGATION (Ditambah Visi Misi, Aspirasi, Explore Cerenity) */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="/visi-misi">Visi & Misi</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="/aspirasi">Aspirasi</a></li>
              <li><a href="/cerenity">Explore Cerenity</a></li>
            </ul>
          </div>

          {/* KOLOM 3: SOCIAL LINKS */}
          <div className="footer-col">
            <h4>Social Links</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com/hmtiftsump" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com/" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://tiktok.com/" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>

          {/* KOLOM 4: SUBSCRIBE FOR NEWS */}
          <div className="footer-col subscribe-col">
            <h4>Subscribe for news</h4>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email.." required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 HMTI UMP. All rights reserved.</p>
        <p className="made-with">Made with 💙 by Ristek</p>
      </div>
    </footer>
  );
}

export default Footer;