import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Events from "./components/Events";
import AboutHmti from "./components/AboutHmti";
import Aspirasi from "./components/Aspirasi";

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
              <AboutHmti />
              <Events />
              <Contact />
              <Aspirasi />
              
            </>
          }
        />

        {/* ================= HMTI ================= */}
        <Route
          path="/hmti"
          element={
            <>
              <Navbar />

              <Contact />
              <Aspirasi />
            </>
          }
        />

        {/* ================= DIVISIONS ================= */}
        <Route
          path="/divisions"
          element={
            <>
              <Navbar />
              <Divisions />
            </>
          }
        />

        {/* ================= EVENTS ================= */}
        <Route
          path="/events"
          element={
            <>
              <Navbar />
            </>
          }
        />

        {/* ================= ASPIRASI ================= */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
