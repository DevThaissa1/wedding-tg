import process from "process";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import guestRoutes  from "./routes/guestRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", guestRoutes);

const PORT = process.env.PORT || 3000;

// Conectar ao MONGODB

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

console.log("MONGO_URI:", process.env.MONGO_URI);

// Rota Inicial
app.get("/", (req, res) => {
  res.send("Servidor rodando...");
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});