import AboutHmti from "./components/AboutHmti";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Divisions from "./components/Divisions";
import AboutInformatics from "./components/AboutInformatics";
import Contact from "./components/Contact";
   
function App(){

  return(
    <>
    <Navbar />
    <Hero />
    <AboutInformatics />
    <AboutHmti />
    <Divisions />
    <Contact />
    <Footer />
    </>
  );
}

export default App