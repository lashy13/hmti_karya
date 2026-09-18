import "../../styles/Advokasi.css";
import "../../styles/DivisionPage.css";

function Advokasi() {
  return (
    <main className="division-page advokasi-page">

      <section className="division-hero">
        <span className="division-label">HMTI UMP / DIVISION</span>

        <h1>ADVOKASI</h1>

        <h2>Advokasi Mahasiswa</h2>

        <p>
          Departemen yang berfokus pada penyaluran aspirasi,
          pendampingan mahasiswa, serta membangun kepedulian
          terhadap berbagai permasalahan di lingkungan kampus.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">01 / ABOUT</span>

        <h2>Mengenal Advokasi</h2>

        <p>
          Advokasi menjadi wadah bagi mahasiswa untuk menyampaikan
          aspirasi, berdiskusi, dan memperoleh pendampingan terhadap
          berbagai permasalahan akademik maupun kemahasiswaan.
        </p>
      </section>

      <section className="division-section">
        <span className="section-label">02 / PROGRAM KERJA</span>

        <h2>Program Kerja</h2>

        <div className="proker-grid">
          <div className="proker-card">
            <span>01</span>
            <h3>Kotak Aspirasi</h3>
            <p>
              Wadah penyampaian aspirasi dan masukan mahasiswa.
            </p>
          </div>

          <div className="proker-card">
            <span>02</span>
            <h3>Forum Diskusi</h3>
            <p>
              Ruang diskusi mengenai isu dan permasalahan mahasiswa.
            </p>
          </div>

          <div className="proker-card">
            <span>03</span>
            <h3>Pendampingan</h3>
            <p>
              Mendampingi mahasiswa dalam menyampaikan permasalahan.
            </p>
          </div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">03 / ACTIVITIES</span>

        <h2>Kegiatan Advokasi</h2>

        <div className="gallery">
          <div className="gallery-item">FOTO 01</div>
          <div className="gallery-item">FOTO 02</div>
          <div className="gallery-item">FOTO 03</div>
        </div>
      </section>

      <section className="division-section">
        <span className="section-label">04 / MEMBERS</span>

        <h2>Member Advokasi</h2>

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

export default Advokasi;