
import logoUmp from "../assets/logo-ump.png";
import logoIf from "../assets/logo-hmti.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* BRAND KIRI */}
      <div className="brand-container">
        <a href="/" className="brand-ump">
          <img src={logoUmp} alt="Logo UMP" className="logo-ump" />
          <div className="ump-text">
            <strong>Universitas</strong>
            <span className="ump-muhammadiyah">Muhammadiyah</span>
            <small>Purwokerto</small>
          </div>
        </a>

        <div className="logo-divider"></div>

        {/* LOGO IKON + TEKS DI SAMPINGNYA */}
        <a href="/" className="brand-if">
          <img src={logoIf} alt="Logo HMTI" className="logo-if" />
          <div className="brand-text">
            <strong>Teknik Informatika</strong>
            <span className="if-tagline">smart • creative • progressive</span>
            <small>Universitas Muhammadiyah Purwokerto</small>
          </div>
        </a>
      </div>

      {/* MENU KANAN */}
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Aspirasi</a>
        <a href="/hmti">HMTI</a>
        <a href="/divisions">Divisi</a>
        
      </div>
    </nav>
  );
}

export default Navbar;