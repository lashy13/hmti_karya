import tiLogo from "../assets/ti-logo.png"; 

function Navbar(){
    return(
    <nav className="navbar">
        <div className="brand">
          <img
            src={tiLogo}
            alt="Logo Teknik Informatika"
          />

          <div className="brand-text">
            <strong>Teknik Informatika</strong>

            <span className="tagline">
              smart • creative • progressive
            </span>

            <small>
              Universitas Muhammadiyah Purwokerto
            </small>
          </div>
        </div>

    <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#divisions">Divisi</a>
  <a href="#events">Events</a>
  <a href="#contact">Contact</a>
</div>
      </nav> 
    );
}

export default Navbar;
