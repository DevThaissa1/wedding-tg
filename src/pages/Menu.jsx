import React, { useState } from "react";

function Menu() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const alternarMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <nav aria-label="Menu principal">
      <div
        className={`menu-toggle ${menuAtivo ? "active" : ""}`}
        onClick={alternarMenu}
        aria-expanded={menuAtivo}
        aria-controls="nav-list"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list ${menuAtivo ? "active" : ""}`} id="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/casal">Casal</a></li>
        <li><a href="/confirmar">Confirmação de Presença</a></li>
        <li><a href="/presentes">Nos Presenteie</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
