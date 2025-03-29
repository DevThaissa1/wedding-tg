import mongoose from "mongoose";

// Definindo o esquema para acompanhantes
const AcompanhanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["adulto", "crianca"],
    required: true,
  },
});

// Definindo o esquema para o convidado
const GuestSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  acompanhantes: {
    type: [AcompanhanteSchema], // Array de acompanhantes com nome e tipo
    default: [],
  }
});

const Guest = mongoose.model("Guest", GuestSchema);

export default Guest;
