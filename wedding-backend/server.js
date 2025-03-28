import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Middleware para tratar o corpo das requisições como JSON
app.use(express.json());

// Definir a rota para criar uma reserva
app.post('/api/reserva', (req, res) => {
  const { nome, email, numero_de_pessoas } = req.body;

  // Aqui você pode adicionar a lógica para salvar a reserva no MongoDB
  res.status(200).json({
    message: 'Reserva criada com sucesso!',
    data: req.body
  });
});

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/wedding', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
