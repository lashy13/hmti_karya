import "../../styles/Ekraf.css";
import "../../styles/DivisionPage.css";
function Ekraf() {
  return (
    <main className="division-page ekraf-page">

      <section className="division-hero">
        <span className="division-label">HMTI UMP / DIVISION</span>

        <h1>EKRAF</h1>

        <h2>Ekonomi Kreatif</h2>

        <p>
          Departemen yang menjadi wadah kreativitas mahasiswa
          dalam menghasilkan karya dan mengembangkan potensi kreatif.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">01 / ABOUT</span>

        <h2>Mengenal Ekraf</h2>

        <p>
          Ekraf berfokus pada pengembangan kreativitas mahasiswa
          melalui kegiatan yang menghasilkan karya dan inovasi.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">02 / PROGRAM KERJA</span>

        <h2>Program Kerja</h2>

        <div className="proker-grid">
          <div className="proker-card">
            <span>01</span>
            <h3>Creative Project</h3>
            <p>
              Pengembangan karya kreatif mahasiswa.
            </p>
          </div>

          <div className="proker-card">
            <span>02</span>
            <h3>Workshop</h3>
            <p>
              Kegiatan pengembangan kemampuan kreatif.
            </p>
          </div>

          <div className="proker-card">
            <span>03</span>
            <h3>Product</h3>
            <p>
              Pengembangan produk kreatif mahasiswa.
            </p>
          </div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">03 / ACTIVITIES</span>

        <h2>Kegiatan Ekraf</h2>

        <div className="gallery">
          <div className="gallery-item">FOTO 01</div>
          <div className="gallery-item">FOTO 02</div>
          <div className="gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">04 / MEMBERS</span>

        <h2>Member Ekraf</h2>

        <div className="members">
          <div className="member">MEMBER 01</div>
          <div className="member">MEMBER 02</div>
          <div className="member">MEMBER 03</div>
          <div className="member">MEMBER 04</div>
        </div>
      </section>

    </main>
  );
}

export default Ekraf;