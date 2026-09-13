import tiLogo from "../assets/ti-logo.png";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* GLOW */}
      <div className="contact-glow"></div>


      {/* SIDE DECORATION */}
      <div className="contact-decoration contact-decoration-left">
        <span className="decoration-number">01</span>
        <div className="decoration-line"></div>

        <div className="decoration-vertical">
          HMTI RISTEK
        </div>
      </div>


      <div className="contact-decoration contact-decoration-right">
        <div className="decoration-vertical">
          INFORMATICS
        </div>

        <div className="decoration-line"></div>

        <span className="decoration-number">
          2026
        </span>
      </div>


      {/* DOTS */}
      <div className="contact-dot dot-1"></div>
      <div className="contact-dot dot-2"></div>
      <div className="contact-dot dot-3"></div>
      <div className="contact-dot dot-4"></div>


      {/* =========================
          MAIN CONTACT
      ========================= */}

      <div className="contact-content">

        {/* LEFT */}
        <div className="contact-title">

          <span>
            HIMPUNAN MAHASISWA TEKNIK INFORMATIKA
          </span>

          <h2>
            LET'S
            <br />
            <span>CONNECT.</span>
          </h2>

        </div>


        {/* RIGHT */}
        <div className="contact-info">

          <p>
            Punya pertanyaan, ingin berkolaborasi,
            atau ingin mengetahui lebih jauh tentang
            HMTI? Mari terhubung bersama kami.
          </p>


          {/* NAVIGATION */}
          <div className="contact-navigation">

            <span className="contact-label">
              NAVIGATION
            </span>

            <div className="contact-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#events">Events</a>
            </div>

          </div>


          {/* CONNECT */}
          <div className="contact-links">

            <span className="contact-label">
              CONNECT WITH US
            </span>


            <a
              href="https://www.instagram.com/hmtiftsump/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>INSTAGRAM</span>
              <strong>@HMTIFTSUMP</strong>
            </a>


            <a
              href="mailto:hmti@ump.ac.id"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>HMTI@UMP.AC.ID</strong>
            </a>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Universitas+Muhammadiyah+Purwokerto"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>CAMPUS</span>
              <strong>UMP • PURWOKERTO</strong>
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          MOVING TEXT
          HARUS DI ATAS BOTTOM
      ========================= */}

      <div className="contact-marquee">

        <div className="contact-marquee-track">

          <span>SMART</span>
          <i>•</i>

          <span>CREATIVE</span>
          <i>•</i>

          <span>PROGRESSIVE</span>
          <i>•</i>

          <span>SMART</span>
          <i>•</i>

          <span>CREATIVE</span>
          <i>•</i>

          <span>PROGRESSIVE</span>
          <i>•</i>

        </div>

      </div>


      {/* =========================
          BOTTOM BAR
          ADA DI BAWAH MARQUEE
      ========================= */}

      <div className="contact-bottom">

        {/* LOGO */}
        <div className="contact-brand">

          <img
            src={tiLogo}
            alt="Teknik Informatika"
          />

          <div>
            <strong>
              Teknik Informatika
            </strong>

            <span>
              Universitas Muhammadiyah Purwokerto
            </span>
          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="contact-copyright">
          © 2026 HMTI Teknik Informatika
        </div>


        {/* BACK TO TOP */}
        <button
          className="back-top"
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

    </section>
  );
}

export default Contact; 