import React, { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import "../styles/style.css";
import "../styles/media.css";
import axios from "axios";

function Confirmar() {
  // Estado para armazenar os dados do formulário
  const [name, setName] = useState("");
  const [rsvp, setRsvp] = useState("");
  const [acompanhantes, setAcompanhantes] = useState([]);
  const [mensagemConfirmacao, setMensagemConfirmacao] = useState("");
  const [erro, setErro] = useState("");

  const maxGuests = 5; // Limite de acompanhantes

  // Função para adicionar acompanhante
  const adicionarAcompanhante = () => {
    if (acompanhantes.length >= maxGuests) {
      alert("Você atingiu o limite de acompanhantes.");
      return;
    }
    setAcompanhantes([...acompanhantes, { nome: "", tipo: "adulto" }]);
  };

  // Função para remover acompanhante
  const removerAcompanhante = (index) => {
    const updatedAcompanhantes = acompanhantes.filter((_, i) => i !== index);
    setAcompanhantes(updatedAcompanhantes);
  };

  // Função para atualizar o nome ou tipo de acompanhante
  const atualizarAcompanhante = (index, campo, valor) => {
    const updatedAcompanhantes = [...acompanhantes];
    updatedAcompanhantes[index][campo] = valor;
    setAcompanhantes(updatedAcompanhantes);
  };

  // Função para enviar o formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o reload da página
    console.log("Enviando formulário...")


    if (!name || !rsvp) {
      alert("Por favor, preencha seu nome e confirme a presença.");
      return;
    }

    // Enviar os dados para o servidor
    try {
      const response = await axios.post("/api/confirmar-presenca", {
        nome: name,
        acompanhantes: acompanhantes,
      });

      setMensagemConfirmacao(response.data.mensagem); // Mensagem de sucesso
      setErro(""); // Limpar erro, caso haja algum anterior
    } catch (error) {
      console.error("Erro ao enviar confirmação:", error);
      setErro(error.response?.data?.mensagem || "Erro ao confirmar presença, tente novamente."); // Exibir erro
      setMensagemConfirmacao(""); // Limpar mensagem de sucesso
    }
  };

  return (
    <>
      <nav aria-label="Menu Principal">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/casal">Casal</Link></li>
          <li><Link to="/confirmar">Confirmação de Presença</Link></li>
          <li><Link to="/presentes">Nos Presenteie</Link></li>
        </ul>
      </nav>

      <header>
        <h1>Confirme a Sua Presença!</h1>
      </header>

      <main>
        <FadeIn>
          <section id="mensagem-presenca">
            <p>
              Queridos amigos e familiares,
              <br />
              A maior alegria para nós é celebrar esse momento tão especial ao lado de pessoas queridas.
              A sua presença e carinho são os presentes mais valiosos que poderíamos receber!
              <br />
              Com todo o nosso amor e gratidão,
              <br />
              Thiago & Gabriela 🌸
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="lista-presenca">
            <h2>Confirme sua Presença</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <br />

              <label>Confirmar Presença:</label>
              <br />
              <input 
                type="radio" 
                id="yes" 
                name="rsvp" 
                value="Sim"
                checked={rsvp === "Sim"}
                onChange={(e) => setRsvp(e.target.value)}
                required 
              />
              <label htmlFor="yes">Sim</label>
              <br />
              <input 
                type="radio" 
                id="no" 
                name="rsvp" 
                value="Não"
                checked={rsvp === "Não"}
                onChange={(e) => setRsvp(e.target.value)}
                required 
              />
              <label htmlFor="no">Não</label>
              <br />

              <h3>Acompanhantes:</h3>
              {acompanhantes.map((acompanhante, index) => (
                <div key={index} className="acompanhante">
                  <input 
                    type="text" 
                    placeholder={`Nome do acompanhante ${index + 1}`} 
                    value={acompanhante.nome}
                    onChange={(e) => atualizarAcompanhante(index, "nome", e.target.value)}
                    required
                  />
                  <select
                    value={acompanhante.tipo}
                    onChange={(e) => atualizarAcompanhante(index, "tipo", e.target.value)}
                  >
                    <option value="adulto">Adulto</option>
                    <option value="crianca">Criança</option>
                  </select>
                  <button type="button" onClick={() => removerAcompanhante(index)}>
                    Remover
                  </button>
                  <br />
                </div>
              ))}

              <button type="button" onClick={adicionarAcompanhante}>
                Adicionar Acompanhante
              </button>
              <br />

              <button type="submit">Enviar</button>
              <button type="reset" onClick={() => setMensagemConfirmacao("")}>
                Limpar
              </button>
            </form>

            {mensagemConfirmacao && (
              <div id="success-message">
                {mensagemConfirmacao}
              </div>
            )}

            {erro && (
              <div id="error-message">
                {erro}
              </div>
            )}
          </section>
        </FadeIn>
      </main>

      <footer>
        <p>&copy; 2025 Nosso Casamento</p>
      </footer>
    </>
  );
}

export default Confirmar;
