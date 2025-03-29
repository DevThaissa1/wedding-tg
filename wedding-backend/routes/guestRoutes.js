import express from "express";
import Guest from "../models/Guest.js";

const router = express.Router();

// Rota para confirmar presença
router.post("/confirmar-presenca", async (req, res) => {
  try {
    const { nome, acompanhantes } = req.body;

    if (!nome) {
      return res.status(400).json({ error: "O nome é obrigatório" });
    }

    // Criando um novo convidado com o nome e o array de acompanhantes
    const novoConvidado = new Guest({ nome, acompanhantes });
    await novoConvidado.save();

    res.status(201).json({
      mensagem: `Confirmação de presença recebida para ${nome} com ${acompanhantes.length} acompanhante(s).`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar confirmação no banco de dados." });
  }
});

export default router;
