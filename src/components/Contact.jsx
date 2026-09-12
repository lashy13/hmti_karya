import tiLogo from "../assets/ti-logo.png";

function Contact(){
    return(
<section className="contact-section" id="contact">

  <div className="contact-glow"></div>

  <div className="contact-content">

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


    <div className="contact-info">

      <p>
        Punya pertanyaan, ingin berkolaborasi,
        atau ingin mengetahui lebih jauh tentang
        HMTI? Mari terhubung bersama kami.
      </p>


      <div className="contact-links">

        <a
          href="https://www.instagram.com/hmtiftsump/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>
            INSTAGRAM
          </span>

          <strong>
            @HMTIFTSUMP
          </strong>

          <b>↗</b>
        </a>


        <a
          href="mailto:hmti@ump.ac.id"
          className="contact-link"
        >
          <span>
            EMAIL
          </span>

          <strong>
            HMTI@UMP.AC.ID
          </strong>

          <b>↗</b>
        </a>


        <a
          href="https://www.google.com/maps/search/?api=1&query=Universitas+Muhammadiyah+Purwokerto"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>
            CAMPUS
          </span>

          <strong>
            UMP • PURWOKERTO
          </strong>

          <b>↗</b>
        </a>

      </div>

    </div>

  </div>


  <div className="contact-bottom">

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
          SMART • CREATIVE • PROGRESSIVE
        </span>
      </div>

    </div>


    <div className="contact-bottom-center">
      HMTI • 2026
    </div>


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
