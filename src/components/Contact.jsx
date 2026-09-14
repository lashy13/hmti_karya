import React from 'react';
import logoUmp from '../assets/logo-ump.png';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow"></div>

      <div className="contact-content">
        
        {/* SISI KIRI: JUDUL BESAR "LET'S CONNECT" */}
        <div className="contact-title">
          <span>HIMPUNAN MAHASISWA TEKNIK INFORMATIKA</span>
          <h2>LET'S<br /><span>CONNECT.</span></h2>
        </div>

        {/* SISI KANAN: TEKS, NAVIGATION BERJEJER, CONNECT US, & SUBSCRIBE */}
        <div className="contact-info">
          <p>
            Punya pertanyaan, ingin berkolaborasi, atau ingin mengetahui lebih jauh tentang
            HMTI? Mari terhubung bersama kami.
          </p>

          {/* NAVIGATION */}
          <div className="contact-navigation">
            <span className="contact-label">NAVIGATION</span>
            <div className="contact-nav-links">
              <a href="/">Home</a>
              <a href="/hmti">About</a>
              <a href="/divisions">Member</a>
              <a href="#studyclub">StudyClub</a>
              <a href="#proker">Proker</a>
              <a href="/aspirasi">Aspirasi</a>
            </div>
          </div>

          {/* CONNECT WITH US */}
          <div className="contact-links">
            <span className="contact-label">CONNECT WITH US</span>

            <a href="https://instagram.com/hmtiftsump" target="_blank" rel="noreferrer" className="contact-link">
              <span>INSTAGRAM</span>
              <strong>@HMTIFTSUMP</strong>
            </a>

            <a href="https://www.youtube.com/@hmtiftsump1490" target="_blank" rel="noreferrer" className="contact-link">
              <span>YOUTUBE</span>
              <strong>HMTI FTS UMP</strong>
            </a>

            <a href="mailto:hmtiump@gmail.com" className="contact-link">
              <span>EMAIL</span>
              <strong>HMTIUMP@GMAIL.COM</strong>
            </a>

            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-link">
              <span>CAMPUS</span>
              <strong>UMP • PURWOKERTO</strong>
            </a>
          </div>

          {/* SUBSCRIBE FOR NEWS */}
          <div className="contact-subscribe-box" style={{ marginTop: '35px' }}>
            <span className="contact-label">SUBSCRIBE FOR NEWS</span>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email.." required />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

        </div>

      </div>

      {/* FOOTER PALING BAWAH */}
      <div className="contact-bottom">
        <div className="contact-brand">
          <img src={logoUmp} alt="Logo UMP" />
          <div>
            <strong>Universitas Muhammadiyah Purwokerto</strong>
            <span>Teknik Informatika</span>
          </div>
        </div>

        <div className="contact-copyright">
          © 2026 HMTI UMP. All rights reserved.
        </div>

        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          BACK TO TOP <span>↑</span>
        </button>
      </div>

    </section>
  );
}

export default Contact;