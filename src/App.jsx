import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Casal from "./pages/Casal.jsx";
import Confirmar from "./pages/Confirmar.jsx";
import Presentes from "./pages/Presentes.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./styles/style.css";
import "./styles/media.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Casal">Casal</Link></li>
          <li><Link to="/Confirmar">Confirmação</Link></li>
          <li><Link to="/Presentes">Presentes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Casal" element={<Casal />} />
        <Route path="/Confirmar" element={<Confirmar />} />
        <Route path="/Presentes" element={<Presentes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
