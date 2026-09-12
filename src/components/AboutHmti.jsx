import { motion } from "framer-motion";

function AboutHmti() {
  return (
    <>
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

        {/* =========================
            HMTI INFO
        ========================= */}
        <div className="hmti-info-grid">
          {/* INFO 01 */}
          <motion.div
            className="hmti-info-card large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="info-number">01</span>

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

          {/* INFO 02 */}
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
            <span className="info-number">02</span>

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

          {/* INFO 03 */}
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
            <span className="info-number">03</span>

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

          {/* INFO 04 */}
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
            <span className="info-number">04</span>

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
      <section
        className="about-hmti-section"
        id="about-hmti"
      >
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

        {/* =========================
            BIG STATEMENT
        ========================= */}
        <div className="about-statement">
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

        {/* =========================
            VALUES
        ========================= */}
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

        {/* =========================
            BOTTOM
        ========================= */}
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
    </>
  );
}

export default AboutHmti;