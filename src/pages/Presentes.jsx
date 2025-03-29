import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PresentButton from "../components/PresentButton";
import FadeIn from "../components/FadeIn";
import "../styles/style.css";
import "../styles/media.css";

function Presentes() {

  const [presentes, setPresentes] = useState([]);
  const [nome] = useState ("");
  // Removed unused mensagem state

  //Função que busca presentes do back-end

  useEffect(() => {
       axios
       .get("/api/presentes") // rota para os presentes
      .then(() => {
        setPresentes(response.data); // Atualiza o estado dos presentes
       })

       .catch((error) => {

        console.error("Erro ao carregar presentes:", error);
       });
}, []);

//Função para reservar um presente

const reservarPresente = (presenteId) =>{
      if(!nome){
        alert("Por Favor, insira seu nome antes de reservar um presente.");
        return;
      }

      axios
      .post("/api/reservar-presente", { nome, presenteId }) // Rota para reserva dos presentes
      .then((response) =>{
        // Removed unused mensagem setter

        //Atualiza o status do presente
       
        setPresentes(
          presentes.map((presente) => 
          presente._id === presenteId
          ?{...presente, status: "reservado", reservadoPor: nome }
          : presente
          )
        );
      })

      .catch((error) => {
        console.error("Erro ao reservar presente:", error);
        // Removed unused mensagem setter
      });
};

  return (
    <>
      <nav aria-label="Menu principal">
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/casal">Casal</Link>
          </li>
          <li>
            <Link to="/confirmar">Confirmação de Presença</Link>
          </li>
          <li>
            <Link to="/presentes">Nos Presenteie</Link>
          </li>
        </ul>
      </nav>

      <header>
        <h1>Nos Abençoe!</h1>
      </header>

      <main>
        <FadeIn>
          <section id="mensagem-presente">
            <p>Queridos amigos e familiares,</p>
            <p>
              A maior alegria para nós é celebrar esse momento tão especial ao
              lado de pessoas queridas. A sua presença e carinho são os
              presentes mais valiosos que poderíamos receber!
            </p>
            <p>
              Mas, se quiserem nos presentear de alguma forma, criamos esta
              lista com muito carinho para tornar esse novo capítulo das nossas
              vidas ainda mais especial.
            </p>
            <p>
              Lembrem-se de que, neste site, é possível marcar o item que
              escolherem, garantindo que ele fique indisponível para outros
              convidados e evitando presentes duplicados. Sintam-se à vontade
              para participar da maneira que desejarem—o mais importante é
              compartilharmos juntos esse dia inesquecível!
            </p>
            <p>Com todo o nosso amor e gratidão,</p>
            <p>Thiago & Gabriela 🌸</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="lista-presente">
            <h2>Lista de Presentes</h2>
            <section id="lista-presentes">
              <p>Aqui estão alguns links para a nossa lista de presentes:</p>

              <ul id="lista-presente">
                <li>
                  <img src="/images/lista-presente/Panela24.png" alt="Panela" />
                  <a
                    href="https://www.homa.pt/panela-harmony-24-cm-458845.html?_gl=1*3lfy4k*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Panela
                  </a>
                  <PresentButton onReserve={reservarPresente} />
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Capa de Edredom e Fronha.png"
                    alt="Capa de Edredom e Fronha"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/aengslilja-capa-de-edredao-2-fronhas-cinz-80318655/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Capa de Edredom e Fronhas
                  </a>
                  <PresentButton onReserve={reservarPresente} />
                </li>
                <li>
                  <img
                    src="/images/lista-presente/frigideira.png"
                    alt="Frigideira"
                  />
                  <a
                    href="https://www.homa.pt/frigideira-harmony-24cm-458843.html?_gl=1*525dtj*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frigideira
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Lençol Branco.png"
                    alt="Lençol Cama Casal"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/dvala-lencol-de-baixo-ajustavel-branco-30357220/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lençol cama Casal
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/panodeloiças.jpeg"
                    alt="Panos de Prato"
                  />
                  <a>Panos de Prato</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Caçarola.png"
                    alt="Caçarola"
                  />
                  <a
                    href="https://www.homa.pt/cacarola-harmony-16cm-458846.html?_gl=1*n9jg2o*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Caçarola
                  </a>
                  <PresentButton />
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Toalha cinza.png"
                    alt="Toalha de Banho Cinza"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/vagsjoen-lencol-de-banho-cinz-esc-50353612/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Toalha de Banho
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/JarroEletrico.jpg"
                    alt="Jarro Elétrico"
                  />
                  <a
                    href="https://www.worten.pt/produtos/jarro-eletrico-kunft-kwk-510-2200-w-1-5-l-5652478"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jarro Elétrico
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Toalha Bege.png"
                    alt="Toalha de banho Bege"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/vagsjoen-lencol-de-banho-bege-claro-50494612/#content"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Toalha de Banho
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Liquidificador.jpg"
                    alt="Liquidificador"
                  />
                  <a
                    href="https://www.worten.pt/produtos/liquidificador-becken-btb8768cr-500-w-1-5-l-creme-8024141"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Liquidificador
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Toalha de Mãos Bege.png"
                    alt="Toalha de Mãos Bege"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/vagsjoen-toalha-de-maos-bege-claro-20494618/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Toalha de Mãos
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/AirFrier.png"
                    alt="Air Frier"
                  />
                  <a
                    href="https://www.worten.pt/produtos/fritadeira-sem-oleo-becken-baf9331cr-digital-5-l-creme-8093053?gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goMSxZTPnA_YWiph02RGBXhI3KD4_PN5OMdnpZhC8fBxAWCWAWiSePBoCBrcQAvD_BwE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Air Frier
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/frigifritaovo.jpeg"
                    alt="Frigideiras Antiaderente"
                  />
                  <a>Frigideiras Antiaderente</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Toalha de Mãos Cinza.png"
                    alt="Toalha de Mãos Cinza"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/vagsjoen-toalha-de-maos-cinz-esc-00353619/#content"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Toalha de Mãos
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/marinexargila.jpeg"
                    alt="Assadeiras"
                  />
                  <a>Assadeiras</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Lençol Florido.png"
                    alt="Lençol Cama Florido"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/faeltgraesmott-capa-de-edredao-fronha-multicor-padrao-floral-40587348/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lençol Cama
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitsvasilhademae.jpeg"
                    alt="potes de plástico"
                  />
                  <a
                    href="https://www.homa.pt/conjunto-de-3-caixas-rectangulares-12l-358888.html?_gl=1*e14c0f*_up*MQ..*_gs*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goD6KPRnudF2mbRlBDNP_wBhvNzzCrx0hA0aZ6QOatIeGYR3sjpwaGBoC-WkQAvD_BwE&gbraid=0AAAAAD5Ejk-juPTfQxjbPVpGhUyp1QaKX"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Potes de Plástico
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Travessa de Vidro.png"
                    alt="Travessa de Vidro"
                  />
                  <a
                    href="https://www.homa.pt/conjunto-de-2-travessas-quadradas-borcam-em-vidro-000031.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Travessa de Vidro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/talheresprata.jpeg"
                    alt="Jogos de Talher"
                  />
                  <a
                    href="https://www.homa.pt/faqueiro-24-pecas-em-inox-flora-411291.html?_gl=1*b2v7dj*_up*MQ..*_gs*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jogos de Talher
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/CoposVidro.png"
                    alt="Taças de Vidro"
                  />
                  <a
                    href="https://www.homa.pt/copo-de-agua-riscas-transparente-com-pe-37cl-454042.html?_gl=1*14j4t1h*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Taças de Vidro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>

                <li>
                  <img
                    src="/images/lista-presente/Conjuntopratos.png"
                    alt="Conjunto de Pratos"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/faergklar-servico-18-pcs-mate-cinz-clr-70564699/#content"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Conjunto de Pratos
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/copovidro.jpeg"
                    alt="jogos de Copos"
                  />
                  <a
                    href="https://www.homa.pt/copo-de-vidro-36cl-440567.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jogos de Copos
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/FormaAntiaderente.png"
                    alt="Forma Antiaderente"
                  />
                  <a
                    href="https://www.homa.pt/forma-para-pao-de-lo-antiaderente-265cm-364024.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Forma Antiaderente
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/guardarcomidavidro.jpeg"
                    alt="Recipiente de Vidro"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/korken-recipiente-c-tampa-vidro-transparente-90213549/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recipiente Vidro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Recipientevidromedio.png"
                    alt="Recipiente de Vidro Medio"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/korken-recipiente-c-tampa-vidro-transparente-50213546/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recipiente Vidro Medio
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Recipientevidropequeno.png"
                    alt="Recipiente de Vidro Pequeno"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/korken-recipiente-c-tampa-vidro-transparente-40323654/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recipiente Vidro Pequeno
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/secaloicaspia.jpeg"
                    alt="Escorredor de Louça"
                  />
                  <a
                    href="https://amzn.eu/d/81o0Vwd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escorredor de Louça
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitcolheresxique.jpeg"
                    alt="Utensílios Diversos"
                  />
                  <a
                    href="https://amzn.eu/d/fyGBqQy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Utensílios Diversos
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Edredom Branco.png"
                    alt="Edredom"
                  />
                  <a
                    href="  https://www.ikea.com/pt/pt/p/smasporre-edredao-quente-40457988/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Edredom
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/raladorinox.jpeg"
                    alt="Ralador"
                  />
                  <a
                    href="https://amzn.eu/d/erXucr3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ralador
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Travesseiro.png"
                    alt="Travesseiro"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/lapptatel-almofada-alta-dormir-lado-costas-40460368/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Travesseiro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitformasbolinhos.jpeg"
                    alt="Formas de Bolo"
                  />
                  <a
                    href="https://www.homa.pt/conjunto-de-2-formas-desmontaveis-22245cm-452927.html?_gl=1*27xozd*_up*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goG7e5A0mxNV73iXWpSRV_M58sLnJEr-rsk_PvbNU15n4wu3iEMYUcxoCX_gQAvD_BwE&gbraid=0AAAAAD5Ejk90t1oobJzyFwXKYAq0SUr-u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Formas de Bolo
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Almofadas.png"
                    alt="Almofada Branca"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/sandgraesmal-almofada-20544878/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Almofada
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/boleira2.0.jpeg"
                    alt="Boleira"
                  />
                  <a
                    href="https://www.ikea.com/pt/pt/p/arv-broellop-prato-de-bolo-c-tampa-vidro-transparente-40125550/?utm_source=bing&utm_medium=cpc&utm_campaign=PT_LC_A3_BEH_0_AO_Shopping-Bing_pt_Shopping_Generic_HFB15-Eating_0_Standard-Regular&utm_id=18519946757&utm_term=&msclkid=704ce00ac1f71158d5d687c24f4ea174&utm_content=Eating%20-%20Others"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Boleira
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitvasilhasmae2.0.jpeg"
                    alt="Potes de Vidro"
                  />
                  <a
                    href="https://www.homa.pt/conjunto-de-3-caixas-vidro-retangulares-423068.html?_gl=1*1rnwt5j*_up*MQ..*_gs*MQ..&gclid=CjwKCAiAw5W-BhAhEiwApv4goD6KPRnudF2mbRlBDNP_wBhvNzzCrx0hA0aZ6QOatIeGYR3sjpwaGBoC-WkQAvD_BwE&gbraid=0AAAAAD5Ejk-juPTfQxjbPVpGhUyp1QaKX"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Potes de Vidro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Descascadordebatata.jpg"
                    alt="Descascador de Batata"
                  />
                  <a
                    href="https://amzn.eu/d/ep84eQ5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Descascador de Batata
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kittabuasmadeiradecorte.jpeg"
                    alt="Kits de tábuas"
                  />
                  <a>Tábuas</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/saladorainox.jpeg"
                    alt="Escorredor de Massa"
                  />
                  <a
                    href="https://www.homa.pt/escorredor-em-inox-com-cabo-418554.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escorredor de Massa
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitpeneirasinox.jpeg"
                    alt="Peneiras de Aço"
                  />
                  <a
                    href="https://www.homa.pt/conjunto-de-2-coadores-em-metal-422267.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Peneiras de Aço
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/batedoramao.jpeg"
                    alt="Batedeira"
                  />
                  <a>Batedeira</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitchavenas.jpeg"
                    alt="Kit de Chavenas"
                  />
                  <a
                    href="https://www.amazon.com/dp/B07FQ2FZLT/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B07FQ2FZLT&pd_rd_w=L2BQl&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=BH07YRKVBJVNDKSWJX61&pd_rd_wg=BhNYx&pd_rd_r=5d55f293-a8a8-4d69-9778-ea4aca0c060f&s=kitchen&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kit de Chavenas
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Tesoiracozinha.jpg"
                    alt="Tesoura de Cozinha"
                  />
                  <a
                    href=" https://amzn.eu/d/8cFXGiU"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tesoura de Cozinha
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/Forma Quadrada.png"
                    alt="Forma Quadrada"
                  />
                  <a
                    href="https://www.homa.pt/tabuleiro-p-forno-em-aluminio-20x30cm-361762.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Forma Quadrada
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitcasadebanho.jpeg"
                    alt="Kit Casa de Banho"
                  />
                  <a>Kit Casa de Banho</a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img
                    src="/images/lista-presente/kitprocessadorsucosaudavel.jpeg"
                    alt="Processador"
                  />
                  <a
                    href="https://www.worten.pt/produtos/varinha-magica-acessorios-becken-bhb4577-600-w-branco-7526747?gad_source=1&gclid=CjwKCAiAw5W-BhAhEiwApv4goGsza8ZGlxkoOur6qzzQWUYUz5hVfiBpQeF8a3HULbXrN4R8DKg14hoCRrsQAvD_BwE
                "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Processador
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
                <li>
                  <img src="/images/lista-presente/Saleiro.png" alt="Saleiro" />
                  <a
                    href="https://www.homa.pt/saleiro-branco-de-ceramica-com-tampa-em-madeira-449204.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saleiro
                  </a>
                  <PresentButton onReserve={reservarPresente}/>
                </li>
              </ul>
            </section>
          </section>
        </FadeIn>
      </main>

      <footer>
        <p>&copy; 2025 Nosso Casamento</p>
      </footer>
    </>
  );
}
export default Presentes;
