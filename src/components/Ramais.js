import { useEffect, useState } from 'react';
import ramais_api from './Ramais_Api'; // Importando o Axios configurado
import { FaList, FaCheckCircle } from 'react-icons/fa';

function Ramais() {
  const [ramais, setRamais] = useState([]); // Estado para armazenar os ramais
  const [filtro, setFiltro] = useState('todos'); // Estado para controlar o filtro
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  // Função para buscar os ramais da API
  async function getRamais() {
    try {
      setLoading(true); // Ativa o estado de carregamento
      const response = await ramais_api.post('/extensions'); // Chama a API
      setRamais(response.data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar ramais:", error.response?.data || error.message);
    } finally {
      setLoading(false); // Desativa o estado de carregamento, independentemente do resultado
    }
  }

  // Busca os ramais ao montar o componente
  useEffect(() => {
    getRamais();
  }, []);

  // Filtra os ramais com base no estado atual
  const ramaisFiltrados = filtro === 'livre' 
    ? ramais.filter(ramal => ramal.callerid === 'Livre') 
    : ramais;

  return (
    <div>
      <h2 className="Fundo Margem20 BordaRedonda Padding25 justify-content">Lista de Ramais</h2>

      {/* Exibe o skeleton screen ou a lista de ramais */}
      {loading ? (
        <div className="skeleton-container">
          {[1, 2, 3].map((i) => ( // Exibe 3 itens de skeleton
            <div key={i} className="skeleton-item">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {ramaisFiltrados.map((ramal, i) => (
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
                  className="displayFlex imagem"
                  src={`https://i.pravatar.cc/150?img=${Math.random()}`}
                  alt={ramal.callerid}
                />
              </div>
            </div>
          ))}
        </ul>
      )}

      {/* Botões flutuantes */}
      <div className="botoes-flutuantes">
        <button 
          className="botao-flutuante" 
          onClick={() => setFiltro('livre')}
        >
          <FaCheckCircle />
          <span className="tooltip">Ramais livres</span>
        </button>
        <button 
          className="botao-flutuante" 
          onClick={() => setFiltro('todos')}
        >
          <FaList />
          <span className="tooltip">Mostrar todos</span>
        </button>
      </div>
    </div>
  );
}

export default Ramais;