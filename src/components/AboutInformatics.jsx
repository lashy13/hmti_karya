import { motion } from "framer-motion";

function AboutInformatics() {
  return (
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
  );
}

export default AboutInformatics;