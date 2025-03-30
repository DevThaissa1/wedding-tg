import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import "../styles/style.css";
import "../styles/media.css";


function Home() {
  return (
    <>
      <nav aria-label="Menu Principal">
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/casal">Casal</Link></li>
          <li><Link to="/confirmar">Confirmação</Link></li>
          <li><Link to="/presentes">Presentes</Link></li>
        </ul>
      </nav>
      <header>
        <h1>Bem-vindo ao nosso site! 🤍</h1>
      </header>
      <main>
        <section id="secao-home">
          <p className="mensagem-welcome">
            Criamos este site com muito carinho para compartilhar esse momento tão importante com você.
            Aqui, você pode confirmar sua presença e nos ajudar na organização desse dia tão especial.
          </p>
        </section>

        <FadeIn>
          <section id="detalhes-evento">
            <h2>Cerimônia e Recepção</h2>
            <p>
              Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus!
            </p>
            <p>
              Endereço:
              <br/>
              <Link
                to="https://www.google.com/search?client=safari&sca_esv=f8ded6305c32e328..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Estrada Principal 22, 2560 Maceira
              </Link>
            </p>
            <p>Horário: 17:00</p>
            <p>Data: 5 de Maio de 2025</p>
          </section>
        </FadeIn>
      </main>
      <footer>
        <p>&copy; 2025 Nosso Casamento</p>
      </footer>
    </>
  );
}
export default Home;
