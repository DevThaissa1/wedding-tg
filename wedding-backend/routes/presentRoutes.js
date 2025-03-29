// Rotas para reserva de presentes

import express from 'express';
import Present from "../models/Present.js";

const router = express.Router();

//Rota para listar os presentes

router.get("/presentes", async (req, res) =>{
    try{
        const presentes = await Present.find();
        res.json(presentes);
    } catch (error){
        res.status(500).json({ error: "Erro ao carregar os presentes"});
    }
});

// Rota para reservar presente
router.post("/reservar", async (req,res) =>{
    try{
        const{ presenteId, nomeDoador} = req.body;


        if(!presenteId || !nomeDoador) {
            return res.status(400).json({error:"ID do presente e nome do doador são obrigatórios."});
        }
         
        const presente = await Present.findById(presenteId);
        if(!presente){
            return res.status(400)
        }


    //Reservar um presente
    presente.status = "reservado";
    presente.reservadoPor = nome;
    await presente.save();

    res.status(200).json({mensagem: `Presente reservado com sucesso por ${nome}.`});
} catch (error){
    res.status(500).json({error: "Erro ao reservar o presente."});
}

});

export default router;