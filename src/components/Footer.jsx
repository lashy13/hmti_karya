import tiLogo from "../assets/ti-logo.png";

function Footer(){
    return(
<footer className="footer">

  <div className="footer-grid"></div>
  <div className="footer-glow"></div>

  <div className="footer-main">

    <div className="footer-brand">

      <div className="footer-logo-wrap">
        <img
          src={tiLogo}
          alt="Teknik Informatika"
        />
      </div>

      <div className="footer-brand-text">

        <span className="footer-overline">
          HIMPUNAN MAHASISWA
        </span>

        <h3>
          TEKNIK
          <br />
          INFORMATIKA
        </h3>

        <p>
          Universitas Muhammadiyah Purwokerto
        </p>

      </div>

    </div>

    <div className="footer-navigation">

      <span className="footer-label">
        NAVIGATION
      </span>

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#hmti">HMTI</a>
      <a href="#divisions">Divisi</a>
      <a href="#contact">Contact</a>

    </div>

    <div className="footer-social">

      <span className="footer-label">
        CONNECT
      </span>

      <a
        href="https://www.instagram.com/hmtiftsump/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      
      </a>

      <a href="mailto:hmti@ump.ac.id">
        Email
    
      </a>

      <a
        href="https://linktr.ee/hmtifts.ump"
        target="_blank"
        rel="noopener noreferrer"
      >
        HMTI UMP
      
      </a>

    </div>

  </div>

<div className="footer-big-text">
  <div className="footer-big-track">
    <span>SMART</span>
    <i>•</i>
    <span>CREATIVE</span>
    <i>•</i>
    <span>PROGRESSIVE</span>

    <span>SMART</span>
    <i>•</i>
    <span>CREATIVE</span>
    <i>•</i>
    <span>PROGRESSIVE</span>
  </div>
</div>

  <div className="footer-bottom">

    <div>
      © 2026 HMTI Teknik Informatika
    </div>

    <div>
      Universitas Muhammadiyah Purwokerto
    </div>

    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      BACK TO TOP
      <span>↑</span>
    </button>

  </div>

</footer>
    );
}
export default Footer;
