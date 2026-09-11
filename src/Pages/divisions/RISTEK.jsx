import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function RISTEK() {
  return (
    <main className="division-page">

      {/* TOP */}
      <div className="division-page-top">

        <Link
          to="/"
          className="division-back"
        >
          ← BACK TO HOME
        </Link>

        <span className="division-page-number">
          06 / 06
        </span>

      </div>


      {/* HERO */}
      <section className="division-page-hero">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="division-page-category">
            TECHNOLOGY
          </span>

          <h1>
            RISTEK<span>.</span>
          </h1>

          <span className="division-page-full">
            RISET DAN TEKNOLOGI
          </span>

        </motion.div>


        <motion.div
          className="division-page-intro"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >

          <span className="division-intro-line"></span>

          <p>
            Berfokus pada pengembangan teknologi,
            riset, dan peningkatan kemampuan
            mahasiswa dalam bidang informatika.
          </p>

        </motion.div>

      </section>


      {/* STATEMENT */}
      <section className="division-statement">

        <span className="division-section-number">
          01
        </span>

        <h2>
          BUILD.
          <br />
          EXPLORE.
          <br />
          <span>INNOVATE.</span>
        </h2>

        <p>
          RISTEK menjadi ruang bagi mahasiswa
          untuk belajar, bereksperimen, membuat
          karya, dan mengembangkan teknologi
          yang memberikan manfaat.
        </p>

      </section>


      {/* PROGRAM */}
      <section className="division-page-section">

        <div className="division-section-heading">
          <span>02</span>
          WORK PROGRAMS
        </div>


        <div className="division-program-grid">

          <motion.article
            className="division-program"
            whileHover={{ y: -8 }}
          >

            <span className="program-number">
              01
            </span>

            <span className="program-type">
              PROGRAM
            </span>

            <h3>
              NITRO
            </h3>

            <p>
              Kegiatan yang berfokus pada
              pengembangan kemampuan mahasiswa
              melalui kegiatan teknologi dan
              kompetisi.
            </p>

            <span className="program-arrow">
              ↗
            </span>

          </motion.article>


          <motion.article
            className="division-program"
            whileHover={{ y: -8 }}
          >

            <span className="program-number">
              02
            </span>

            <span className="program-type">
              LEARNING
            </span>

            <h3>
              STUDY CLUB
            </h3>

            <p>
              Wadah belajar bersama untuk
              meningkatkan kemampuan di bidang
              software, cybersecurity, AI,
              dan teknologi.
            </p>

            <span className="program-arrow">
              ↗
            </span>

          </motion.article>


          <motion.article
            className="division-program"
            whileHover={{ y: -8 }}
          >

            <span className="program-number">
              03
            </span>

            <span className="program-type">
              HMTI
            </span>

            <h3>
              WEB DEV
            </h3>

            <p>
              Pengembangan website dan teknologi
              digital untuk mendukung kebutuhan
              HMTI.
            </p>

            <span className="program-arrow">
              ↗
            </span>

          </motion.article>

        </div>

      </section>


      {/* MEMBERS */}
      <section className="division-page-section">

        <div className="division-section-heading">
          <span>03</span>
          RISTEK MEMBERS
        </div>


        <div className="division-member-list">

          <motion.div
            className="division-member-row"
            whileHover={{ x: 8 }}
          >
            <span>01</span>
            <h3>Ketua Divisi</h3>
            <span>RISTEK</span>
          </motion.div>


          <motion.div
            className="division-member-row"
            whileHover={{ x: 8 }}
          >
            <span>02</span>
            <h3>Staff RISTEK</h3>
            <span>RISTEK</span>
          </motion.div>


          <motion.div
            className="division-member-row"
            whileHover={{ x: 8 }}
          >
            <span>03</span>
            <h3>Staff RISTEK</h3>
            <span>RISTEK</span>
          </motion.div>


          <motion.div
            className="division-member-row"
            whileHover={{ x: 8 }}
          >
            <span>04</span>
            <h3>Staff RISTEK</h3>
            <span>RISTEK</span>
          </motion.div>

        </div>

      </section>


      {/* BOTTOM */}
      <section className="division-page-bottom">

        <span>
          RISTEK
        </span>

        <div></div>

        <span>
          ONE COMMUNITY.
        </span>

      </section>

    </main>
  );
}

export default RISTEK;