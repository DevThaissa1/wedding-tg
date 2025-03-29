import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  acompanhantes: { type: Number, default: 0 },
});

const Guest = mongoose.model("Guest", guestSchema);

export default Guest;