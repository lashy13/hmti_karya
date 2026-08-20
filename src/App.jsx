import { motion } from "framer-motion";
import tiLogo from "./assets/ti-logo.png";
import hmtiLogo from "./assets/hmti-logo.png";

function App() {
  return (
    <main className="app">
      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="grid-background"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <div className="brand">
          <img
            src={tiLogo}
            alt="Logo Teknik Informatika"
          />

          <div className="brand-text">
            <strong>Teknik Informatika</strong>

            <span className="tagline">
              smart • creative • progressive
            </span>

            <small>
              Universitas Muhammadiyah Purwokerto
            </small>
          </div>
        </div>

    <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#hmti">HMTI</a>
  <a href="#divisions">Divisi</a>
  <a href="#contact">Contact</a>
</div>
        <button
          className="nav-button"
          onClick={() => {
            document.getElementById("hmti")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HMTI
          <span>↗</span>
        </button>
      </nav>

      {/* =========================
          HERO
      ========================= */}
      <section className="hero" id="home">

        {/* LEFT CONTENT */}
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
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            DIGITAL
            <br />

            <span>MINDS.</span>
            <br />

            FUTURE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            Himpunan Mahasiswa Teknik Informatika
            menjadi ruang untuk belajar, berkarya,
            berkolaborasi, dan berkembang melalui
            teknologi.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <button
              className="primary-button"
              onClick={() => {
                document.getElementById("hmti")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              EXPLORE HMTI
              <span>↗</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => {
                document.getElementById("divisions")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              OUR DIVISIONS
            </button>
          </motion.div>

        </div>

        {/* =========================
            LOGO SCENE
        ========================= */}
        <motion.div
          className="logo-scene"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
        >

          {/* ROTATING TEXT */}
          <div className="rotating-text">
            <svg viewBox="0 0 500 500">

              <defs>
                <path
                  id="circlePath"
                  d="
                    M 250,250
                    m -190,0
                    a 190,190 0 1,1 380,0
                    a 190,190 0 1,1 -380,0
                  "
                />
              </defs>

              <text>
                <textPath href="#circlePath">
                  TECHNOLOGY • CREATIVITY • INNOVATION • HMTI •
                </textPath>
              </text>

            </svg>
          </div>

          {/* OUTER RING */}
          <div className="outer-ring"></div>

          {/* ORBIT */}
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          {/* LOGO */}
          <motion.div
            className="logo-wrapper"
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="logo-glow"></div>

            <div className="logo-card">
              <img
                src={hmtiLogo}
                alt="Logo HMTI"
              />
            </div>

          </motion.div>

          {/* FLOATING DOTS */}
          <div className="floating-dot dot-one"></div>

          <div className="floating-dot dot-two"></div>

          <div className="floating-dot dot-three"></div>

          {/* LOGO CAPTION */}
          <div className="logo-caption">

            <span>
              HIMPUNAN MAHASISWA
            </span>

            <strong>
              TEKNIK INFORMATIKA
            </strong>

            <small>
              UNIVERSITAS MUHAMMADIYAH PURWOKERTO
            </small>

          </div>

        </motion.div>

        {/* =========================
            BOTTOM INFORMATION
        ========================= */}
        <div className="hero-bottom">

          <div>
            <span>01</span>

            <p>
              HIMPUNAN MAHASISWA
              <br />
              TEKNIK INFORMATIKA
            </p>
          </div>

          <div className="scroll-indicator">

            <span>
              SCROLL TO EXPLORE
            </span>

            <div className="scroll-line"></div>

          </div>

          <div className="year">

            <span>
              EST.
            </span>

            <strong>
              2026
            </strong>

          </div>

        </div>

      </section>
            {/* =========================
          ABOUT TEKNIK INFORMATIKA
      ========================= */}
      <section className="about-section" id="about">

        <div className="section-label">
          <span>02</span>
          ABOUT INFORMATICS
        </div>

        <div className="about-header">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHERE
            <br />
            <span>TECHNOLOGY</span>
            <br />
            MEETS CREATIVITY.
          </motion.h2>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <span className="description-line"></span>

            <p>
              Teknik Informatika merupakan bidang yang
              memadukan ilmu komputer, teknologi,
              logika, dan kreativitas untuk menciptakan
              solusi digital yang inovatif.
            </p>

            <p>
              Di dalamnya, mahasiswa tidak hanya belajar
              tentang kode, tetapi juga bagaimana
              teknologi dapat digunakan untuk menjawab
              berbagai permasalahan di dunia nyata.
            </p>
          </motion.div>

        </div>

        {/* Fields */}
        <div className="informatics-grid">

          <motion.div
            className="informatics-card"
            whileHover={{ y: -8 }}
          >
            <span>01</span>
            <div className="card-icon">&lt;/&gt;</div>
            <h3>Software</h3>
            <p>
              Membangun aplikasi dan sistem
              yang menjadi solusi digital.
            </p>
          </motion.div>

          <motion.div
            className="informatics-card"
            whileHover={{ y: -8 }}
          >
            <span>02</span>
            <div className="card-icon">◉</div>
            <h3>Artificial Intelligence</h3>
            <p>
              Mengeksplorasi kecerdasan buatan
              dan teknologi masa depan.
            </p>
          </motion.div>

          <motion.div
            className="informatics-card"
            whileHover={{ y: -8 }}
          >
            <span>03</span>
            <div className="card-icon">⌁</div>
            <h3>Cyber Security</h3>
            <p>
              Melindungi sistem, data, dan
              infrastruktur digital.
            </p>
          </motion.div>

          <motion.div
            className="informatics-card"
            whileHover={{ y: -8 }}
          >
            <span>04</span>
            <div className="card-icon">◌</div>
            <h3>Data & Technology</h3>
            <p>
              Mengolah data menjadi informasi
              yang dapat memberikan insight.
            </p>
          </motion.div>

        </div>

      </section>

            {/* =========================
          HMTI SECTION
      ========================= */}
      <section className="hmti-section" id="hmti">

        <div className="section-label">
          <span>03</span>
          ABOUT HMTI
        </div>

        <div className="hmti-header">

          <div className="hmti-title">
            <span className="hmti-mini">
              HIMPUNAN MAHASISWA
            </span>

            <h2>
              ONE
              <br />
              <span>COMMUNITY.</span>
            </h2>
          </div>

          <div className="hmti-description">
            <p>
              Himpunan Mahasiswa Teknik Informatika atau HMTI
              merupakan wadah mahasiswa Teknik Informatika
              untuk berkembang bersama dalam bidang akademik,
              teknologi, organisasi, dan pengembangan diri.
            </p>

            <p>
              HMTI tidak hanya menjadi tempat berorganisasi,
              tetapi juga ruang untuk membangun relasi,
              mengembangkan potensi, dan menciptakan berbagai
              kegiatan yang memberikan dampak bagi mahasiswa.
            </p>
          </div>

        </div>

        {/* HMTI INFO */}
        <div className="hmti-info-grid">

          <motion.div
            className="hmti-info-card large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="info-number">
              01
            </span>

            <div>
              <span className="info-label">
                OUR PURPOSE
              </span>

              <h3>
                Developing
                <br />
                <span>People.</span>
              </h3>
            </div>

            <p>
              Mendorong mahasiswa untuk terus belajar,
              berkembang, dan memiliki kemampuan yang
              relevan dengan perkembangan teknologi.
            </p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <span className="info-number">
              02
            </span>

            <div className="info-symbol">
              ✦
            </div>

            <span className="info-label">
              CREATIVITY
            </span>

            <h3>
              Create.
            </h3>

            <p>
              Mengubah ide menjadi karya dan solusi
              yang bermanfaat.
            </p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <span className="info-number">
              03
            </span>

            <div className="info-symbol">
              ◇
            </div>

            <span className="info-label">
              COLLABORATION
            </span>

            <h3>
              Connect.
            </h3>

            <p>
              Membangun hubungan dan kolaborasi
              antar mahasiswa.
            </p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <span className="info-number">
              04
            </span>

            <div className="info-symbol">
              ↗
            </div>

            <span className="info-label">
              INNOVATION
            </span>

            <h3>
              Innovate.
            </h3>

            <p>
              Menciptakan gagasan baru melalui
              pemanfaatan teknologi.
            </p>
          </motion.div>

        </div>

      </section>
      {/* =========================
    ABOUT HMTI SECTION
========================= */}
<section className="about-hmti-section" id="about-hmti">

  <div className="section-label">
    <span>03</span>
    ABOUT HMTI
  </div>

  <div className="about-hmti-header">

    <div className="about-hmti-title">
      <span className="about-mini">
        HIMPUNAN MAHASISWA TEKNIK INFORMATIKA
      </span>

      <h2>
        MORE THAN
        <br />
        <span>AN ORGANIZATION.</span>
      </h2>
    </div>

    <div className="about-hmti-intro">
      <p>
        HMTI menjadi wadah bagi mahasiswa Teknik
        Informatika untuk berkembang, berkolaborasi,
        menyampaikan aspirasi, dan menciptakan
        sesuatu yang memiliki dampak.
      </p>

      <div className="about-accent-line"></div>

      <span>
        UNIVERSITAS MUHAMMADIYAH PURWOKERTO
      </span>
    </div>

  </div>


  {/* BIG STATEMENT */}
  <div className="about-statement">

    <span className="statement-number">
      01
    </span>

    <h3>
      CONNECT.
      <br />
      CREATE.
      <br />
      <span>GROW.</span>
    </h3>

    <p>
      Bukan hanya tentang menjalankan sebuah
      organisasi. HMTI adalah tentang bagaimana
      mahasiswa saling terhubung, bertukar ide,
      membangun pengalaman, dan tumbuh bersama.
    </p>

  </div>


  {/* VALUES */}
  <div className="about-values">

    {/* VALUE 01 */}
    <motion.div
      className="about-value"
      whileHover={{ y: -5 }}
    >
      <span>01</span>

      <h4>
        COLLABORATION
      </h4>

      <p>
        Membangun lingkungan yang mendorong
        mahasiswa untuk bekerja bersama dan
        saling mendukung.
      </p>
    </motion.div>


    {/* VALUE 02 */}
    <motion.div
      className="about-value"
      whileHover={{ y: -5 }}
    >
      <span>02</span>

      <h4>
        INNOVATION
      </h4>

      <p>
        Mendorong lahirnya ide dan karya baru
        melalui kreativitas serta pemanfaatan
        teknologi.
      </p>
    </motion.div>


    {/* VALUE 03 */}
    <motion.div
      className="about-value"
      whileHover={{ y: -5 }}
    >
      <span>03</span>

      <h4>
        DEVELOPMENT
      </h4>

      <p>
        Membantu mahasiswa mengembangkan
        kemampuan dan pengalaman untuk
        menghadapi masa depan.
      </p>
    </motion.div>

  </div>


  {/* BOTTOM */}
  <div className="about-hmti-bottom">

    <span>
      HMTI UMP
    </span>

    <div></div>

    <span>
      EST. 2026
    </span>

  </div>

</section>

      {/* =========================
    DIVISIONS SECTION
========================= */}
<section className="divisions-section" id="divisions">

  <div className="section-label">
    <span>04</span>
    HMTI DIVISIONS
  </div>

  <div className="divisions-header">

    <div>
      <span className="division-mini">
        ORGANIZATIONAL STRUCTURE
      </span>

      <h2>
        SIX
        <br />
        <span>DIVISIONS.</span>
      </h2>
    </div>

    <p>
      HMTI terdiri dari enam divisi yang memiliki
      peran dan fokus masing-masing. Bersama-sama,
      setiap divisi menjadi bagian dari perjalanan
      mahasiswa Teknik Informatika untuk berkembang,
      berkarya, dan berkontribusi.
    </p>

  </div>


  {/* =========================
      DIVISION GRID
  ========================= */}

  <div className="divisions-grid">

    {/* PSDM */}
    <motion.article
      className="division-card"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>01</span>
        <span>DEVELOPMENT</span>
      </div>

      <div className="division-symbol">
        ◇
      </div>

      <div className="division-content">

        <h3>PSDM</h3>

        <span className="division-full">
          PENGEMBANGAN SUMBER DAYA MAHASISWA
        </span>

        <p>
          Berfokus pada pengembangan potensi,
          kemampuan, dan kualitas mahasiswa
          melalui kegiatan pengembangan diri,
          organisasi, dan pembelajaran.
        </p>

      </div>

      <div className="division-bottom">
        <span>01 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>


    {/* EKRAF */}
    <motion.article
      className="division-card"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>02</span>
        <span>CREATIVE</span>
      </div>

      <div className="division-symbol">
        ✦
      </div>

      <div className="division-content">

        <h3>EKRAF</h3>

        <span className="division-full">
          EKONOMI KREATIF
        </span>

        <p>
          Mendorong kreativitas mahasiswa dalam
          menghasilkan ide, karya, dan peluang
          melalui kegiatan kreatif dan inovatif.
        </p>

      </div>

      <div className="division-bottom">
        <span>02 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>


    {/* ADVOKASI */}
    <motion.article
      className="division-card"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>03</span>
        <span>ASPIRATION</span>
      </div>

      <div className="division-symbol">
        ⚖
      </div>

      <div className="division-content">

        <h3>ADVOKASI</h3>

        <span className="division-full">
          ADVOKASI MAHASISWA
        </span>

        <p>
          Menjadi wadah bagi mahasiswa untuk
          menyampaikan aspirasi, kebutuhan,
          dan berbagai persoalan yang berkaitan
          dengan kehidupan mahasiswa.
        </p>

      </div>

      <div className="division-bottom">
        <span>03 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>


    {/* KOMINFO */}
    <motion.article
      className="division-card division-featured"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>04</span>
        <span>INFORMATION</span>
      </div>

      <div className="division-symbol">
        ◎
      </div>

      <div className="division-content">

        <h3>KOMINFO</h3>

        <span className="division-full">
          KOMUNIKASI DAN INFORMASI
        </span>

        <p>
          Mengelola informasi, publikasi, dan
          media digital HMTI agar informasi
          organisasi dapat tersampaikan dengan
          baik kepada mahasiswa.
        </p>

      </div>

      <div className="division-bottom">
        <span>04 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>


    {/* HUMAS */}
    <motion.article
      className="division-card"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>05</span>
        <span>RELATION</span>
      </div>

      <div className="division-symbol">
        ⌁
      </div>

      <div className="division-content">

        <h3>HUMAS</h3>

        <span className="division-full">
          HUBUNGAN MASYARAKAT
        </span>

        <p>
          Membangun dan menjaga hubungan yang
          baik antara HMTI dengan mahasiswa,
          organisasi lain, serta pihak eksternal.
        </p>

      </div>

      <div className="division-bottom">
        <span>05 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>


    {/* RISTEK */}
    <motion.article
      className="division-card ristek-card"
      whileHover={{ y: -8 }}
    >
      <div className="division-top">
        <span>06</span>
        <span>TECHNOLOGY</span>
      </div>

      <div className="division-symbol">
        &lt;/&gt;
      </div>

      <div className="division-content">

        <h3>RISTEK</h3>

        <span className="division-full">
          RISET DAN TEKNOLOGI
        </span>

        <p>
          Berfokus pada pengembangan teknologi,
          riset, dan peningkatan kemampuan
          mahasiswa dalam bidang informatika.
        </p>

        {/* RISTEK PROGRAM */}
        <div className="ristek-programs">

          <div className="ristek-program">
            <span>NITRO</span>
            <small>PROGRAM</small>
          </div>

          <div className="ristek-program">
            <span>STUDY CLUB</span>
            <small>LEARNING</small>
          </div>
<div className="ristek-program">
    <span>WEB DEV</span>
    <small>HMTI</small>
  </div>
        </div>

      </div>

      <div className="division-bottom">
        <span>06 / 06</span>
        <span>↗</span>
      </div>
    </motion.article>

  </div>


  {/* =========================
      DIVISION FOOTER
  ========================= */}

  <div className="division-footer">

    <div className="division-counter">
      <strong>06</strong>

      <span>
        DIVISIONS
        <br />
        ONE COMMUNITY
      </span>
    </div>

    <div className="division-footer-line"></div>

    <span className="division-footer-text">
      DIFFERENT ROLES. ONE ORGANIZATION.
    </span>

  </div>

</section>
{/* =========================
    CONTACT SECTION
========================= */}
<section className="contact-section" id="contact">

  <div className="contact-glow"></div>

  <div className="section-label">
    <span>07</span>
    GET IN TOUCH
  </div>

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


      {/* FOOTER */}
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
              <span>↗</span>
            </a>

            <a href="mailto:hmti@ump.ac.id">
              Email
              <span>↗</span>
            </a>

            <a
              href="https://linktr.ee/hmtifts.ump"
              target="_blank"
              rel="noopener noreferrer"
            >
              HMTI UMP
              <span>↗</span>
            </a>

          </div>

        </div>


        <div className="footer-big-text">

          <span>SMART</span>

          <i>•</i>

          <span>CREATIVE</span>

          <i>•</i>

          <span>PROGRESSIVE</span>

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
    </main>
  );
}

export default App;