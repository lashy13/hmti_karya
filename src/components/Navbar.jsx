import logoUmp from "../assets/logo-ump.png";
import logoIf from "../assets/ti-logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="brand">

        {/* LOGO UMP */}
        <img
          src={logoUmp}
          alt="Logo UMP"
          className="logo-ump"
        />

        {/* TEXT UMP */}
        <div className="ump-text">
          <strong>Universitas</strong>

          <span className="ump-muhammadiyah">
            Muhammadiyah
          </span>

          <small>Purwokerto</small>
        </div>

        {/* GARIS PEMISAH */}
        <div className="logo-divider"></div>

        {/* LOGO TEKNIK INFORMATIKA */}
        <img
          src={logoIf}
          alt="Logo Teknik Informatika"
          className="logo-if"
        />

        {/* TEXT TEKNIK INFORMATIKA */}
        <div className="brand-text">
          <strong>Teknik Informatika</strong>

          <span className="if-tagline">
            smart • creative • progressive
          </span>

          <small>
            Universitas Muhammadiyah Purwokerto
          </small>
        </div>

      </div>

      {/* NAVIGATION */}
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