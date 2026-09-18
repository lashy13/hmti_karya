import "../../styles/Kominfo.css";
import "../../styles/DivisionPage.css";
function Kominfo() {
  return (
    <main className="division-page kominfo-page">

      <section className="division-hero">
        <span className="division-label">HMTI UMP / DIVISION</span>

        <h1>KOMINFO</h1>

        <h2>Komunikasi dan Informasi</h2>

        <p>
          Departemen yang berfokus pada pengelolaan informasi,
          media, publikasi, dan komunikasi HMTI.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">01 / ABOUT</span>

        <h2>Mengenal Kominfo</h2>

        <p>
          Kominfo menjadi pusat pengelolaan informasi dan media
          untuk menyampaikan berbagai kegiatan serta informasi HMTI.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">02 / PROGRAM KERJA</span>

        <h2>Program Kerja</h2>

        <div className="proker-grid">
          <div className="proker-card">
            <span>01</span>
            <h3>Media</h3>
            <p>
              Pengelolaan media informasi HMTI.
            </p>
          </div>

          <div className="proker-card">
            <span>02</span>
            <h3>Publication</h3>
            <p>
              Publikasi informasi dan kegiatan organisasi.
            </p>
          </div>

          <div className="proker-card">
            <span>03</span>
            <h3>Content</h3>
            <p>
              Produksi konten kreatif dan informatif.
            </p>
          </div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">03 / ACTIVITIES</span>

        <h2>Kegiatan Kominfo</h2>

        <div className="gallery">
          <div className="gallery-item">FOTO 01</div>
          <div className="gallery-item">FOTO 02</div>
          <div className="gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">04 / MEMBERS</span>

        <h2>Member Kominfo</h2>

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

export default Kominfo;