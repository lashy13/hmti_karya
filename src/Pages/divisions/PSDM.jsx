import "../../styles/PSDM.css";
import "../../styles/DivisionPage.css";
function PSDM() {
  return (
    <main className="division-page psdm-page">

      <section className="division-hero">
        <span className="division-label">HMTI UMP / DIVISION</span>

        <h1>PSDM</h1>

        <h2>Pengembangan Sumber Daya Mahasiswa</h2>

        <p>
          Departemen yang berfokus pada pengembangan potensi,
          karakter, dan kemampuan mahasiswa Teknik Informatika.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">01 / ABOUT</span>

        <h2>Mengenal PSDM</h2>

        <p>
          PSDM menjadi wadah untuk mengembangkan kemampuan mahasiswa
          melalui kegiatan pembinaan, pelatihan, dan pengembangan organisasi.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">02 / PROGRAM KERJA</span>

        <h2>Program Kerja</h2>

        <div className="proker-grid">
          <div className="proker-card">
            <span>01</span>
            <h3>Leadership</h3>
            <p>
              Pengembangan kemampuan kepemimpinan mahasiswa.
            </p>
          </div>

          <div className="proker-card">
            <span>02</span>
            <h3>Training</h3>
            <p>
              Pelatihan untuk meningkatkan kemampuan mahasiswa.
            </p>
          </div>

          <div className="proker-card">
            <span>03</span>
            <h3>Pengembangan</h3>
            <p>
              Program pengembangan potensi mahasiswa.
            </p>
          </div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">03 / ACTIVITIES</span>

        <h2>Kegiatan PSDM</h2>

        <div className="gallery">
          <div className="gallery-item">FOTO 01</div>
          <div className="gallery-item">FOTO 02</div>
          <div className="gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">04 / MEMBERS</span>

        <h2>Member PSDM</h2>

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

export default PSDM;