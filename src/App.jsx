import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutInformatics from "./components/AboutInformatics";
import AboutHmti from "./components/AboutHmti";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutInformatics />
              <AboutHmti />
              <Divisions />
              <Contact />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
