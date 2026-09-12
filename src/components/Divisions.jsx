import { motion } from "framer-motion";

function Divisions() {
  return (
    <section className="divisions-section" id="divisions">
      {/* =========================
          SECTION LABEL
      ========================= */}

      <div className="section-label">
        <span>04</span>
        HMTI DIVISIONS
      </div>

      {/* =========================
          HEADER
      ========================= */}

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
        {/* =========================
            PSDM
        ========================= */}

        <motion.article
          className="division-card psdm-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
        >
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

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>01 / 06</span>
            <span>PSDM</span>
          </div>
        </motion.article>

        {/* =========================
            EKRAF
        ========================= */}

        <motion.article
          className="division-card ekraf-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="division-top">
            <span>02</span>
            <span>CREATIVE</span>
          </div>

          <div className="division-symbol">✦</div>

          <div className="division-content">
            <h3>EKRAF</h3>

            <span className="division-full">EKONOMI KREATIF</span>

            <p>
              Mendorong kreativitas mahasiswa dalam menghasilkan ide, karya, dan
              peluang melalui kegiatan kreatif dan inovatif.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>02 / 06</span>
            <span>EKRAF</span>
          </div>
        </motion.article>

        {/* =========================
            ADVOKASI
        ========================= */}

        <motion.article
          className="division-card advokasi-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
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
              kebutuhan, dan berbagai persoalan yang berkaitan dengan kehidupan
              mahasiswa.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>03 / 06</span>
            <span>ADVOKASI</span>
          </div>
        </motion.article>

        {/* =========================
            KOMINFO
        ========================= */}

        <motion.article
          className="division-card division-featured kominfo-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.15 }}
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

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>04 / 06</span>
            <span>KOMINFO</span>
          </div>
        </motion.article>

        {/* =========================
            HUMAS
        ========================= */}

        <motion.article
          className="division-card humas-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
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

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>05 / 06</span>
            <span>HUMAS</span>
          </div>
        </motion.article>

        {/* =========================
            RISTEK
        ========================= */}

        <motion.article
          className="division-card ristek-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.25 }}
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

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>LKMM</span>
                <small>DEVELOPMENT</small>
              </div>

              <div className="division-mini-program">
                <span>UPGRADING</span>
                <small>LEARNING</small>
              </div>

              <div className="division-mini-program">
                <span>MENTORING</span>
                <small>CAPACITY</small>
              </div>
            </div>
          </div>

          <div className="division-bottom">
            <span>06 / 06</span>
            <span>RISTEK</span>
          </div>
        </motion.article>
      </div>

      {/* =========================
          FOOTER
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
