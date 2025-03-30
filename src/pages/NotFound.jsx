import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>Desculpe, a página que você tentou acessar não existe.</p>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default NotFound;
