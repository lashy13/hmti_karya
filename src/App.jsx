import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutInformatics from "./components/AboutInformatics";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Events from "./components/Events";
import AboutHmti from "./components/AboutHmti";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutInformatics />
              <Events />
              <Contact />
            </>
          }
        />

        {/* ================= HMTI PAGE ================= */}
        <Route
          path="/hmti"
          element={<AboutHmti />}
        />

        <Route
          path="/divisions"
          element={<Divisions />}
        />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;