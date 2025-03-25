import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import "../styles/style.css";
import "../styles/media.css";

function Casal() {
  return (
    <>
      <nav aria-label="Menu principal">
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/casal">Casal</Link></li>
          <li><Link to="/confirmar">Confirmação de Presença</Link></li>
          <li><Link to="/presentes">Nos Presenteie</Link></li>
        </ul>
      </nav>
      <header>
        <h1>Conheça o Casal 🤍</h1>
      </header>
      <main>
        <FadeIn>
          <section id="nossa-historia" className="historia-casal">
            <h2>Nossa História</h2>
            <p>
              Thiago sempre foi responsável e sonhador. Em busca de um novo caminho, partiu para Portugal sem imaginar que, além de um futuro, encontraria também o amor de sua vida.
            </p>
            <p>
              Foi em um culto de jovens que tudo começou. Gabriela chegou bem mais cedo do que o previsto, e Thiago, atrasado para o ensaio do louvor, entrou apressado na igreja. O encontro foi breve, mas ficou marcado – não apenas pelo olhar, mas também pelo perfume dele, que ela nunca esqueceu. Algumas semanas depois, as primeiras mensagens foram trocadas e, rapidamente, nasceu um amor que mudaria suas vidas para sempre.
            </p>
            <p>
              O caminho, no entanto, não foi sempre fácil. Por dois anos, estiveram distantes, mas Thiago nunca desistiu. Seu coração permaneceu firme, seus olhos nunca se desviaram. Com paciência e fé, ele esperou, acreditando que Deus já havia escrito essa história antes mesmo de começarem a vivê-la.
            </p>
            <p>
              Hoje, prestes a dizer “sim” para a vida inteira, olham para trás e veem como cada detalhe foi cuidadosamente preparado. O amor, a espera, os desafios – tudo fez parte do plano perfeito de Deus. E agora, diante de suas famílias e amigos, estão prontos para viver o momento mais importante de suas vidas: a realização de um sonho, o cumprimento de uma promessa.
            </p>
            <div className="galeria">
              <img src="/images/Fotos Casal/Foto 1.jpg" alt="Pedido de Casamento Emocionante" />
              <img src="/images/Fotos Casal/Foto8 Pedido.jpg" alt="Thiago e Gabriela sorrindo em um momento especial" />
              <img src="/images/Fotos Casal/Foto3 CasalFeliz.jpg" alt="Thiago e Gabriela muito felizes" />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="conheca-a-noiva" className="historia-noiva">
            <h2>Conheça a Noiva</h2>
            <h3>A História de Gabriela</h3>
            <p>
              Gabriela Palma é filha de José Monteiro e Karlayne Cunha. Sua mãe, que a teve muito jovem, sempre a criou com muito amor, dedicação e ensinamentos preciosos sobre valores e princípios. Desde pequena, Gabriela aprendeu a importância da família, algo que seu pai, sempre presente, fazia questão de reforçar. Ele lhe ensinou a valorizar suas raízes e a cuidar do que realmente importa.
            </p>
            <p>
              Desde cedo, Gabriela se envolveu nos cuidados do lar, descobrindo prazer e significado em cada detalhe do dia a dia. Essa vivência a ajudou a se tornar a mulher forte, dedicada e cheia de princípios que é hoje.
            </p>
            <div className="galeria">
              <img src="/images/Fotos Casal/Foto2 Gabi.jpg" alt="Gabriela sorrindo"/>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="conheca-o-noivo" className="historia-noivo">
            <h2>Conheça o Noivo</h2>
            <h3>A História de Thiago</h3>
            <p>
              Thiago, filho de Neibe e Luciana, cresceu em um lar de fé, sempre temente a Deus. Desde pequeno, viveu na igreja, envolvido com o serviço ao Senhor. Sua mãe, mulher de oração, sempre intercedeu por sua vida, enquanto seu pai, exemplo de dedicação e trabalho, lhe ensinou a importância de cuidar de um lar e sustentar uma família com amor e responsabilidade.
            </p>
            <p>
              Foram esses ensinamentos que moldaram Thiago, tornando-o o homem que é hoje: responsável, trabalhador e fiel a Deus.
            </p>
            <div className="galeria">
              <img src="/images/Fotos Casal/Foto4 CasalFeliz2.jpg" alt="Thiago em momento especial" />
            </div>
          </section>
        </FadeIn>
      </main>
      <footer>
        <p>&copy; 2025 Nosso Casamento</p>
      </footer>
    </>
  );
}

export default Casal;
