import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutInformatics from "./components/AboutInformatics";
import AboutHmti from "./components/AboutHmti";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import PSDM from "./Pages/divisions/PSDM";
import EKRAF from "./Pages/divisions/EKRAF";
import ADVOKASI from "./Pages/divisions/ADVOKASI";
import KOMINFO from "./Pages/divisions/KOMINFO";
import HUMAS from "./Pages/divisions/HUMAS";
import RISTEK from "./Pages/divisions/RISTEK";


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

        <Route path="/divisi/psdm" element={<PSDM />} />
        <Route path="/divisi/ekraf" element={<EKRAF />} />
        <Route path="/divisi/advokasi" element={<ADVOKASI />} />
        <Route path="/divisi/kominfo" element={<KOMINFO />} />
        <Route path="/divisi/humas" element={<HUMAS />} />
        <Route path="/divisi/ristek" element={<RISTEK />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
