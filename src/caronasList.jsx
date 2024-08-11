import React, { useEffect, useState } from 'react';

const CaronasList = ({ onCaronaClick }) => {
  const [caronas, setCaronas] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3')
      .then(response => response.json())
      .then(data => setCaronas(data.caronas))
      .catch(error => console.error('Erro ao buscar caronas:', error));
  }, []);

  return (
    <div>
      <h1>Caronas Disponíveis</h1>
      <br />
      <ul>
        {caronas.map((carona, index) => (
          <li key={index}>
            <h2 class="namesList">{carona.motorista.nome}</h2>
            <p class="pathsList"><i><b>Partida:</b> {carona.local_partida} - <b>Chegada:</b> {carona.local_chegada}</i></p>
            <button onClick={() => onCaronaClick('detail', carona)}>Ver Detalhes</button>
            <br /> <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaronasList;