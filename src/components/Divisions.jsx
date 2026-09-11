import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Divisions() {
  return (
    <section className="divisions-section" id="divisions">
      <div className="section-label">
        <span>04</span>
        HMTI DIVISIONS
      </div>

      <div className="divisions-header">
        <div>
          <span className="division-mini">ORGANIZATIONAL STRUCTURE</span>

          <h2>
            SIX
            <br />
            <span>DIVISIONS.</span>
          </h2>
        </div>

        <p>
          HMTI terdiri dari enam divisi yang memiliki peran dan fokus
          masing-masing. Bersama-sama, setiap divisi menjadi bagian dari
          perjalanan mahasiswa Teknik Informatika untuk berkembang, berkarya,
          dan berkontribusi.
        </p>
      </div>

      {/* =========================
      DIVISION GRID
  ========================= */}

      <div className="divisions-grid">
        {/* PSDM */}
        <Link
          to="/divisi/psdm"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article className="division-card" whileHover={{ y: -8 }}>
            <div className="division-top">
              <span>01</span>
              <span>DEVELOPMENT</span>
            </div>

            <div className="division-symbol">◇</div>

            <div className="division-content">
              <h3>PSDM</h3>

              <span className="division-full">
                PENGEMBANGAN SUMBER DAYA MAHASISWA
              </span>

              <p>
                Berfokus pada pengembangan potensi, kemampuan, dan kualitas
                mahasiswa melalui kegiatan pengembangan diri, organisasi, dan
                pembelajaran.
              </p>
            </div>

            <div className="division-bottom">
              <span>01 / 06</span>
              <span>↗</span>
            </div>
          </motion.article>
        </Link>

        {/* EKRAF */}
        <Link
          to="/divisi/ekraf"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article className="division-card" whileHover={{ y: -8 }}>
            <div className="division-top">
              <span>02</span>
              <span>CREATIVE</span>
            </div>

            <div className="division-symbol">✦</div>

            <div className="division-content">
              <h3>EKRAF</h3>

              <span className="division-full">EKONOMI KREATIF</span>

              <p>
                Mendorong kreativitas mahasiswa dalam menghasilkan ide, karya,
                dan peluang melalui kegiatan kreatif dan inovatif.
              </p>
            </div>

            <div className="division-bottom">
              <span>02 / 06</span>
              <span>↗</span>
            </div>
          </motion.article>
        </Link>

        {/* ADVOKASI */}
        <Link
          to="/divisi/advokasi"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article className="division-card" whileHover={{ y: -8 }}>
            <div className="division-top">
              <span>03</span>
              <span>ASPIRATION</span>
            </div>

            <div className="division-symbol">⚖</div>

            <div className="division-content">
              <h3>ADVOKASI</h3>

              <span className="division-full">ADVOKASI MAHASISWA</span>

              <p>
                Menjadi wadah bagi mahasiswa untuk menyampaikan aspirasi,
                kebutuhan, dan berbagai persoalan yang berkaitan dengan
                kehidupan mahasiswa.
              </p>
            </div>

            <div className="division-bottom">
              <span>03 / 06</span>
              <span>↗</span>
            </div>
          </motion.article>
        </Link>

        {/* KOMINFO */}
        <Link
          to="/divisi/kominfo"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article
            className="division-card division-featured"
            whileHover={{ y: -8 }}
          >
            <div className="division-top">
              <span>04</span>
              <span>INFORMATION</span>
            </div>

            <div className="division-symbol">◎</div>

            <div className="division-content">
              <h3>KOMINFO</h3>

              <span className="division-full">KOMUNIKASI DAN INFORMASI</span>

              <p>
                Mengelola informasi, publikasi, dan media digital HMTI agar
                informasi organisasi dapat tersampaikan dengan baik kepada
                mahasiswa.
              </p>
            </div>

            <div className="division-bottom">
              <span>04 / 06</span>
              <span>↗</span>
            </div>
          </motion.article>
        </Link>

        {/* HUMAS */}
        <Link
          to="/divisi/humas"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article className="division-card" whileHover={{ y: -8 }}>
            <div className="division-top">
              <span>05</span>
              <span>RELATION</span>
            </div>

            <div className="division-symbol">⌁</div>

            <div className="division-content">
              <h3>HUMAS</h3>

              <span className="division-full">HUBUNGAN MASYARAKAT</span>

              <p>
                Membangun dan menjaga hubungan yang baik antara HMTI dengan
                mahasiswa, organisasi lain, serta pihak eksternal.
              </p>
            </div>

            <div className="division-bottom">
              <span>05 / 06</span>
              <span>↗</span>
            </div>
          </motion.article>
        </Link>

        {/* RISTEK */}
        <Link
          to="/divisi/ristek"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
          }}
        >
          <motion.article
            className="division-card ristek-card"
            whileHover={{ y: -8 }}
          >
            <div className="division-top">
              <span>06</span>
              <span>TECHNOLOGY</span>
            </div>

            <div className="division-symbol">&lt;/&gt;</div>

            <div className="division-content">
              <h3>RISTEK</h3>

              <span className="division-full">RISET DAN TEKNOLOGI</span>

              <p>
                Berfokus pada pengembangan teknologi, riset, dan peningkatan
                kemampuan mahasiswa dalam bidang informatika.
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
        </Link>
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
  );
}

export default Divisions;
