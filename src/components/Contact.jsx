import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow"></div>

      <div className="contact-content">

        {/* KIRI */}
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


        {/* KANAN */}
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
              <a href="/">Home</a>
              <a href="/hmti">About</a>
              <a href="/divisions">Member</a>
              <a href="/#proker">Proker</a>
              <a href="/aspirasi">Aspirasi</a>
            </div>

          </div>


          {/* CONNECT WITH US */}
          <div className="contact-links">

            <span className="contact-label">
              CONNECT WITH US
            </span>

            <a
              href="https://instagram.com/hmtiftsump"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>INSTAGRAM</span>
              <strong>@HMTIFTSUMP</strong>
            </a>

            <a
              href="https://www.youtube.com/@hmtiftsump1490"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>YOUTUBE</span>
              <strong>HMTI FTS UMP</strong>
            </a>

            <a
              href="mailto:hmtiump@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>HMTIUMP@GMAIL.COM</strong>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>CAMPUS</span>
              <strong>UMP • PURWOKERTO</strong>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;