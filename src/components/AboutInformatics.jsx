import { motion } from "framer-motion";

// Data kartu untuk membuat kode lebih bersih dan mudah dikelola
const cardsData = [
  {
    id: "01",
    icon: "</>",
    title: "Software Engineering",
    description: "Membangun aplikasi dan sistem yang menjadi fondasi solusi digital modern.",
  },
  {
    id: "02",
    icon: "◉",
    title: "Artificial Intelligence",
    description: "Mengeksplorasi kecerdasan buatan, machine learning, dan teknologi masa depan.",
  },
  {
    id: "03",
    icon: "⌁",
    title: "Cyber Security",
    description: "Melindungi sistem, data, dan infrastruktur digital dari berbagai ancaman.",
  },
  {
    id: "04",
    icon: "◌",
    title: "Data & Technology",
    description: "Mengolah kumpulan data kompleks menjadi informasi yang bernilai strategis.",
  },
];

// Varian animasi untuk kontainer grid (efek stagger anak-anaknya)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Varian animasi untuk setiap kartu
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function AboutInformatics() {
  return (
    <section className="about-section" id="about">
      {/* Section Label */}
      <div className="section-label">
        <span>02</span>
        <span>ABOUT INFORMATICS</span>
      </div>

      {/* Header Content */}
      <div className="about-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="description-line"></span>

          <p>
            Teknik Informatika merupakan bidang yang memadukan ilmu komputer,
            teknologi, logika, dan kreativitas untuk menciptakan solusi digital
            yang inovatif.
          </p>

          <p>
            Di dalamnya, mahasiswa tidak hanya belajar tentang kode, tetapi juga
            bagaimana teknologi dapat digunakan untuk menjawab berbagai
            permasalahan di dunia nyata.
          </p>
        </motion.div>
      </div>

      {/* Fields / Cards Grid */}
      <motion.div 
        className="informatics-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="informatics-card"
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.3 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-top">
              <span className="card-id">{card.id}</span>
              <motion.div 
                className="card-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {card.icon}
              </motion.div>
            </div>
            
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            
            {/* Aksen visual tambahan saat di-hover (opsional via CSS) */}
            <div className="card-glow-effect" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutInformatics;