import React, { useState } from "react";

function PresentButton() {
  const [reservado, setReservado] = useState(false);

  const handleButtonClick = () => {
    setReservado((prevReservado) => !prevReservado); // Alterna entre reservado e não reservado
  };

  return (
    <button 
      onClick={handleButtonClick} 
      style={{
        backgroundColor: reservado ? "#4caf50" : "", // Verde se reservado
        color: reservado ? "white" : "", // Texto branco se reservado
        transition: "0.3s", // Suaviza a mudança de cor
        padding: "10px 15px", // Ajuste no tamanho do botão
        border: "none",
        cursor: "pointer"
      }}
    >
      {reservado ? "Presente Reservado!" : "Darei esse presente"}
    </button>
  );
}

export default PresentButton;
