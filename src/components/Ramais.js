import { useEffect, useState } from 'react';
import ramais_api from './Ramais_Api'; // Importando o Axios configurado

function Ramais() {
  const [ramais, setRamais] = useState([]); // Estado para armazenar os ramais

  async function getRamais() {
    try {
      const response = await ramais_api.post('/extensions'); // Chama a API
      setRamais(response.data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar ramais:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getRamais(); // Chama a função ao montar o componente
  }, []); // O array vazio faz com que o efeito rode apenas uma vez

  return (
    <div>
      <h2>Lista de Ramais</h2>
      <ul>
        {ramais.map((ramal, i) => (
          <div
          key={i}
          className="container Fundo tamanhoItemLinha BordaRedonda Margem20 Padding25"
        >
          <div className="displayFlex justify-content">
            <div className="justify-content">
              <h3>{ramal.callerid}</h3>
              <p>Ramal: {ramal.extension}</p>
               
            </div>
            <img
              className=" displayFlex  imagem"
              src='https://i.pravatar.cc/150'
              alt={ramal.callerid}
            />
          </div>
           
        </div>
        ))}
      </ul>
    </div>
  );
}

export default Ramais;
