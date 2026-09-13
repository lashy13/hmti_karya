import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// IMPORT GAMBAR SEMENTARA (Pastikan sesuaikan dengan path/nama file aslimu nanti)
import imgPlaceholder from "../assets/image.png"; 

function AboutHmti() {
  const navigate = useNavigate();

  // DATA BPH (Sudah dirapikan dari duplikat dan diurutkan)
  const bphMembers = [
    {
      name: "Nama Ketua",
      position: "KETUA HMTI",
      image: imgPlaceholder,
      description: "Memimpin dan mengarahkan organisasi serta memastikan seluruh kegiatan HMTI berjalan sesuai tujuan.",
    },
    {
      name: "Nama Wakil",
      position: "WAKIL KETUA",
      image: imgPlaceholder,
      description: "Mendampingi ketua dalam menjalankan organisasi serta membantu koordinasi antar bagian dalam HMTI.",
    },
    {
      name: "Nama Sekretaris 1",
      position: "SEKRETARIS 1",
      image: imgPlaceholder,
      description: "Mengelola administrasi, dokumentasi, dan kebutuhan kesekretariatan organisasi secara umum.",
    },
    {
      name: "Nama Sekretaris 2",
      position: "SEKRETARIS 2",
      image: imgPlaceholder,
      description: "Membantu dan berkoordinasi dalam pengelolaan administrasi serta kearsipan dokumen organisasi.",
    },
    {
      name: "Nama Bendahara 1",
      position: "BENDAHARA 1",
      image: imgPlaceholder,
      description: "Mengelola keuangan organisasi secara tertib, transparan, dan bertanggung jawab atas sirkulasi dana.",
    },
    {
      name: "Nama Bendahara 2",
      position: "BENDAHARA 2",
      image: imgPlaceholder,
      description: "Membantu pengelolaan dana, pembukuan kas, dan menyusun laporan keuangan kegiatan.",
    },
  ];

  return (
    <>
      {/* =========================
          HMTI
      ========================= */}
      <section className="hmti-section">
        <button className="back-button" onClick={() => navigate("/")}>
          BACK TO HOME
        </button>

        <div className="hmti-header">
          <div className="hmti-title">
            <span className="hmti-mini">HIMPUNAN MAHASISWA</span>
            <h2>ONE<br /><span>COMMUNITY.</span></h2>
          </div>

          <div className="hmti-description">
            <p>
              Himpunan Mahasiswa Teknik Informatika atau HMTI merupakan wadah mahasiswa Teknik Informatika untuk berkembang bersama dalam bidang akademik, teknologi, organisasi, dan pengembangan diri.
            </p>
            <p>
              HMTI menjadi ruang bagi mahasiswa untuk membangun relasi, mengembangkan potensi, bertukar ide, dan menciptakan berbagai kegiatan yang memberikan manfaat bagi mahasiswa Teknik Informatika.
            </p>
          </div>
        </div>

        {/* =========================
            TUJUAN HMTI
        ========================= */}
        <div className="hmti-purpose">
          <div className="purpose-label">
            <span>01</span>
            <p>TUJUAN HMTI</p>
          </div>

          <div className="purpose-content">
            <h3>DEVELOPING<br /><span>PEOPLE.</span></h3>
            <p>
              HMTI bertujuan menjadi wadah bagi mahasiswa Teknik Informatika untuk mengembangkan kemampuan akademik, keterampilan teknologi, pengalaman organisasi, serta kemampuan bekerja sama.
            </p>
            <p>
              Melalui berbagai kegiatan dan program kerja, HMTI mendorong mahasiswa untuk terus belajar, berinovasi, dan berkontribusi dalam lingkungan kampus maupun masyarakat.
            </p>
          </div>
        </div>

        {/* =========================
            NILAI HMTI
        ========================= */}
        <div className="hmti-info-grid">
          <motion.div
            className="hmti-info-card large"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="info-number">01</span>
            <div>
              <span className="info-label">DEVELOPMENT</span>
              <h3>Developing<br /><span>People.</span></h3>
            </div>
            <p>Mendorong mahasiswa untuk terus belajar dan mengembangkan kemampuan yang relevan dengan perkembangan teknologi.</p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="info-number">02</span>
            <div className="info-symbol">✦</div>
            <span className="info-label">CREATIVITY</span>
            <h3>Create.</h3>
            <p>Mengubah ide menjadi karya dan solusi yang bermanfaat.</p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="info-number">03</span>
            <div className="info-symbol">◇</div>
            <span className="info-label">COLLABORATION</span>
            <h3>Connect.</h3>
            <p>Membangun hubungan dan kolaborasi antar mahasiswa.</p>
          </motion.div>

          <motion.div
            className="hmti-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="info-number">04</span>
            <div className="info-symbol">+</div>
            <span className="info-label">INNOVATION</span>
            <h3>Innovate.</h3>
            <p>Menciptakan gagasan baru melalui pemanfaatan teknologi.</p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          BPH
      ========================= */}
      <section className="bph-section">
        <div className="bph-header">
          <div>
            <span className="about-mini">STRUKTUR ORGANISASI</span>
            <h2>BPH<br /><span>HMTI.</span></h2>
          </div>
          <p>
            Badan Pengurus Harian merupakan bagian yang memiliki peran dalam mengelola, mengoordinasikan, dan memastikan organisasi HMTI berjalan dengan baik sesuai dengan tujuan yang telah ditetapkan.
          </p>
        </div>

        {/* =========================
            BPH MEMBERS
        ========================= */}
        <div className="bph-grid">
          {bphMembers.map((member, index) => (
            <motion.div
              className="bph-card"
              key={index} // MENGGUNAKAN INDEX AGAR TIDAK ADA DUPLIKASI KEY
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bph-photo">
                <img src={member.image} alt={member.name} />
                <span className="bph-number">0{index + 1}</span>
              </div>

              <div className="bph-info">
                <span>{member.position}</span>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            DIVISION CTA
        ========================= */}
        <div className="hmti-divisions-cta">
          <div>
            <span>HMTI ORGANIZATIONAL STRUCTURE</span>
            <h3>EXPLORE OUR<br /><span>DIVISIONS.</span></h3>
          </div>

          <button
            className="division-button"
            onClick={() => navigate("/divisions")}
          >
            <span>EXPLORE DIVISIONS</span>
            <strong>→</strong>
          </button>
        </div>
      </section>
    </>
  );
}

export default AboutHmti;