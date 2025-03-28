import process from "process";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Conectar ao MONGODB

mongoose
.connect (process.env.MONGO_URI)
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Rota Inicial

app.get("/", (req, res)=> {
    res.send("Servidor rodando...");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

