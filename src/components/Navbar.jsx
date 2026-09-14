import logoUmp from "../assets/logo-ump.png";
import logoIf from "../assets/ti-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        {/* Logo UMP di sebelah kiri */}
        <img src={logoUmp} alt="Logo UMP" className="logo-ump" />
        <div className="ump-text">
         <strong>Universitas</strong>

          <span className="tagline">Muhammadiyah</span>

          <small>Purwokerto</small>
        </div>

        <div className="logo-divider"></div>

        {/* Logo IF di sebelah kanan */}
        <img src={logoIf} alt="Logo Teknik Informatika" className="logo-if" />

        <div className="brand-text">
          <strong>Teknik Informatika</strong>

          <span className="tagline">smart • creative • progressive</span>

          <small>Universitas Muhammadiyah Purwokerto</small>
        </div>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
