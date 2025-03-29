import mongoose from "mongoose";

const presentSchema = new mongoose.Schema({
    nome:{ type: String, required: true},
    imagem:{ type: String, required: true},
    link:{ type: String, required: true},
    reservado:{ type: String, required: true},
    reservadoPor: { type: String, default: ""}, // Nome da pessoa que reservou o presente
});

const Present = mongoose.model("Present", presentSchema);

export default Present;