import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hmtiLogo from "../assets/hmti-logo.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span></span>
          UNIVERSITAS MUHAMMADIYAH PURWOKERTO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          DIGITAL<br />
          <span>MINDS.</span><br />
          FUTURE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Himpunan Mahasiswa Teknik Informatika menjadi ruang untuk belajar,
          berkarya, berkolaborasi, dan berkembang melalui teknologi.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/hmti" className="primary-button">EXPLORE HMTI</Link>
          <Link to="/divisions" className="secondary-button">OUR DIVISIONS</Link>
        </motion.div>
      </div>

      <motion.div
        className="logo-scene"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="rotating-text">
          <svg viewBox="0 0 500 500">
            <defs>
              <path id="circlePath" d="M 250,250 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0" />
            </defs>
            <text>
              <textPath href="#circlePath">
                TECHNOLOGY • CREATIVITY • INNOVATION • HMTI •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="outer-ring"></div>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <motion.div
          className="logo-wrapper"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="logo-glow"></div>
          <div className="logo-card">
            <img src={hmtiLogo} alt="Logo HMTI" />
          </div>
        </motion.div>

        <div className="floating-dot dot-one"></div>
        <div className="floating-dot dot-two"></div>
        <div className="floating-dot dot-three"></div>

        <div className="logo-caption">
          <span>HIMPUNAN MAHASISWA</span>
          <strong>TEKNIK INFORMATIKA</strong>
          <small>UNIVERSITAS MUHAMMADIYAH PURWOKERTO</small>
        </div>
      </motion.div>

      <div className="hero-bottom">
        <div>
          <span>01</span>
          <p>HIMPUNAN MAHASISWA<br />TEKNIK INFORMATIKA</p>
        </div>
        <div className="scroll-indicator"></div>
        <div className="year"></div>
      </div>
    </section>
  );
}

export default Hero;