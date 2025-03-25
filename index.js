// Importar módulos
const express = require("express");
const cors = require("cors");

// Inicializar o aplicativo Express
const app = express();
const port = 3000; // Porta onde o servidor irá rodar

// Middleware
app.use(cors()); // Permitir requisições de qualquer origem
app.use(express.json()); // Permitir requisições com JSON no corpo

// Dados iniciais
let confirmacoes = [];
let presentes = [
  { id: 1, nome: "Panela", reservado: false },
  { id: 2, nome: "Ferro de passar", reservado: false },
];

// Rotas da API

// Rota para obter todas as confirmações de presença
app.get("/confirmacoes", (req, res) => {
  res.json(confirmacoes);
});

// Rota para adicionar uma confirmação de presença
app.post("/confirmacoes", (req, res) => {
  const confirmacao = req.body; // Receber os dados do corpo da requisição
  confirmacoes.push(confirmacao); // Adicionar ao array de confirmações
  res.status(201).json({ message: "Confirmação adicionada com sucesso!" });
});

// Rota para obter a lista de presentes
app.get("/presentes", (req, res) => {
  res.json(presentes);
});

// Rota para reservar um presente
app.patch("/presentes/:id", (req, res) => {
  const { id } = req.params; // Identificar o presente pelo ID
  const presente = presentes.find((item) => item.id == id); // Procurar o presente
  if (presente && !presente.reservado) {
    presente.reservado = true; // Atualizar o status do presente
    res.json({ message: `Presente ${presente.nome} reservado com sucesso!` });
  } else {
    res
      .status(400)
      .json({ message: "Presente já reservado ou não encontrado." });
  }
});

// Inicializar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
