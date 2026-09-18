import "../../styles/Ristek.css";
import "../../styles/DivisionPage.css";
function Ristek() {
  return (
    <main className="division-page">

      <section className="division-page-hero">
        <span className="division-page-label">
          HMTI UMP / DIVISION
        </span>

        <h1>RISTEK</h1>

        <h2>Riset dan Teknologi</h2>

        <p>
          Departemen yang berfokus pada riset, teknologi,
          inovasi, serta pengembangan kemampuan mahasiswa
          Teknik Informatika.
        </p>
      </section>

      <section className="division-page-section">
        <span className="division-section-label">
          01 / ABOUT
        </span>

        <h2>Mengenal RISTEK</h2>

        <p>
          RISTEK merupakan departemen yang menjadi wadah
          mahasiswa Teknik Informatika untuk mengembangkan
          kemampuan di bidang teknologi, riset, inovasi,
          dan pengembangan keterampilan.
        </p>
      </section>

      <section className="division-page-section">
        <span className="division-section-label">
          02 / PROGRAM KERJA
        </span>

        <h2>Program Kerja</h2>

        <div className="division-proker-grid">

          <div className="division-proker-card">
            <span>01</span>
            <h3>Web HMTI</h3>
            <p>
              Pengembangan dan pemeliharaan website HMTI.
            </p>
          </div>

          <div className="division-proker-card">
            <span>02</span>
            <h3>NITRO</h3>
            <p>
              Wadah kegiatan dan kompetisi teknologi.
            </p>
          </div>

          <div className="division-proker-card">
            <span>03</span>
            <h3>Study Club</h3>
            <p>
              Pengembangan kemampuan mahasiswa melalui
              kegiatan belajar bersama.
            </p>
          </div>

        </div>
      </section>

      <section className="division-page-section">
        <span className="division-section-label">
          03 / ACTIVITIES
        </span>

        <h2>Kegiatan RISTEK</h2>

        <div className="division-gallery">
          <div className="division-gallery-item">FOTO 01</div>
          <div className="division-gallery-item">FOTO 02</div>
          <div className="division-gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-page-section">
        <span className="division-section-label">
          04 / MEMBERS
        </span>

        <h2>Member RISTEK</h2>

        <div className="division-members">
          <div className="division-member">MEMBER 01</div>
          <div className="division-member">MEMBER 02</div>
          <div className="division-member">MEMBER 03</div>
          <div className="division-member">MEMBER 04</div>
        </div>
      </section>

    </main>
  );
}

export default Ristek;