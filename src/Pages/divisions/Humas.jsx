import "../../styles/Humas.css";
import "../../styles/DivisionPage.css";
function Humas() {
  return (
    <main className="division-page humas-page">

      <section className="division-hero">
        <span className="division-label">HMTI UMP / DIVISION</span>

        <h1>HUMAS</h1>

        <h2>Hubungan Masyarakat</h2>

        <p>
          Departemen yang berfokus pada hubungan internal,
          eksternal, komunikasi, dan membangun relasi HMTI
          dengan berbagai pihak.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">01 / ABOUT</span>

        <h2>Mengenal Humas</h2>

        <p>
          Humas berperan dalam membangun komunikasi dan hubungan
          yang baik antara HMTI dengan mahasiswa maupun pihak eksternal.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">02 / PROGRAM KERJA</span>

        <h2>Program Kerja</h2>

        <div className="proker-grid">
          <div className="proker-card">
            <span>01</span>
            <h3>Partnership</h3>
            <p>
              Membangun kerja sama dengan berbagai pihak.
            </p>
          </div>

          <div className="proker-card">
            <span>02</span>
            <h3>Relations</h3>
            <p>
              Mengembangkan hubungan dan komunikasi eksternal.
            </p>
          </div>

          <div className="proker-card">
            <span>03</span>
            <h3>Public Relations</h3>
            <p>
              Menjaga citra dan komunikasi organisasi.
            </p>
          </div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">03 / ACTIVITIES</span>

        <h2>Kegiatan Humas</h2>

        <div className="gallery">
          <div className="gallery-item">FOTO 01</div>
          <div className="gallery-item">FOTO 02</div>
          <div className="gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">04 / MEMBERS</span>

        <h2>Member Humas</h2>

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

export default Humas;