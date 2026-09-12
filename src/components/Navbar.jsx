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
  <a href="#hmti">HMTI</a>
  <a href="#divisions">Divisi</a>
  <a href="#contact">Contact</a>
</div>
        <button
          className="nav-button"
          onClick={() => {
            document.getElementById("hmti")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HMTI
          
        </button>
      </nav> 
    );
}

export default Navbar;
