import React, { useState } from "react";

function GuestList() {
  const [guests, setGuests] = useState([]); // Estado para armazenar os acompanhantes
  const maxGuests = 5; // Limite de acompanhantes

  // Função para adicionar acompanhante
  const addGuest = () => {
    if (guests.length >= maxGuests) {
      alert("Você atingiu o limite de acompanhantes.");
      return;
    }
    setGuests([
      ...guests,
      { nome: "", tipo: "adulto" }, // Adiciona um acompanhante com nome vazio e tipo "adulto"
    ]);
  };

  // Função para remover acompanhante
  const removeGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
  };

  // Função para atualizar nome ou tipo do acompanhante
  const updateGuest = (index, field, value) => {
    const updatedGuests = [...guests];
    updatedGuests[index][field] = value;
    setGuests(updatedGuests);
  };

  return (
    <div>
      <h3>Acompanhantes:</h3>
      {guests.map((guest, index) => (
        <div key={index} className="person">
          <label htmlFor={`guestName${index + 1}`}>Nome do Acompanhante {index + 1}:</label>
          <input
            type="text"
            id={`guestName${index + 1}`}
            value={guest.nome}
            onChange={(e) => updateGuest(index, "nome", e.target.value)}
            required
          />
          <br />
          <label htmlFor={`guestType${index + 1}`}>É adulto ou criança?</label>
          <select
            id={`guestType${index + 1}`}
            value={guest.tipo}
            onChange={(e) => updateGuest(index, "tipo", e.target.value)}
          >
            <option value="adulto">Adulto</option>
            <option value="crianca">Criança</option>
          </select>
          <br />
          <button type="button" onClick={() => removeGuest(index)}>
            Remover
          </button>
          <br />
        </div>
      ))}
      <button type="button" onClick={addGuest}>
        Adicionar Acompanhante
      </button>
    </div>
  );
}

export default GuestList;
