import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutInformatics from "./components/AboutInformatics";
import AboutHmti from "./components/AboutHmti";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Events from "./components/events";

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
              <Events />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
