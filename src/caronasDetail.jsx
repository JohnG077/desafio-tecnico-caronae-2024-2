const CaronasDetail = ({ carona }) => {
    if (!carona) return <p>Carona não encontrada.</p>;
  
    return (
      <div>
        <h1>Detalhes da Carona</h1>
        <br />
        <img src={carona.motorista.foto} alt={carona.motorista.nome} class="picture"/>
        <h2 class="namePicture">{carona.motorista.nome}</h2>
        <div class="details">
            <p><b>Telefone:</b> {carona.motorista.telefone}</p>
            <p><b>Ponto de partida:</b> {carona.local_partida} - Ponto de chegada: {carona.local_chegada}</p>
            <p><b>Horário de Partida:</b> {carona.horario_partida}</p>
            <p><b>Horário de Chegada:</b> {carona.horario_chegada}</p>
            <p><b>Ponto de Encontro:</b> {carona.ponto_encontro}</p>
            <p><b>Observações:</b> {carona.observacoes}</p>
            <p><b>Trajeto:</b> {carona.trajeto}</p>
            <p><b>Vagas Disponíveis:</b> {carona.vagas}</p>
        </div>
        <h2 class="going"> {carona.indo ? <b><i>O veículo já saiu do ponto de partida!</i></b> : null}</h2>
      </div>
    );
  };
  
  export default CaronasDetail;