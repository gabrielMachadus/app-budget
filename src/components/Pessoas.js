import React, { useState } from "react";
 


const pessoas = [
    {
        nomeCompleto : "João Carlos",
        ramal: 9430,
        email: "Carlos@empresa.com.br",
        setor: "TI",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=69"
      },
      {
        nomeCompleto: "Tais de Souza",
        ramal: 9425,
        setor: "Marketing",
        email: "Tais.Marketing@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=5"
      },
      {
        nomeCompleto: "Joana Silva",
        ramal: 9415,
        setor: "Marketing",
        email: "Joana.Marketing@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=9"
      },
      {
        nomeCompleto: "Carla Oliveira",
        ramal: 9485,
        setor: "Marketing",
        email: "Carla.Marketing@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=1"
      },
      {
        nomeCompleto : "João Carlos",
        ramal: 9410,
        setor: "TI",
        email: "Carlos.Joao@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=59"
      },
      {
        nomeCompleto: " Marcela Luzia Cristo",
        ramal: 9405,
        setor: "Compras",
        email: "Marcela.Compras@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=40"
      },
      {
        nomeCompleto: "Andresa da Silva",
        ramal: 9410,
        setor: "Comercial",
        email: "Andresa.Silva@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=20"
      },
      {
        nomeCompleto: "Luana Machado",
        ramal: 9433,
        setor: "Vendas",
        email: "Luana.Machado@empresa.com.br",
        telefone: 51989846546,
        foto: "https://i.pravatar.cc/150?img=10"
      },
];




function Pessoas() {

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedPessoa, setSelectedPessoa] = useState(null);

  function editar(pessoa) {
    console.log("Editando "+pessoa.nomeCompleto);
    setSelectedPessoa(pessoa);
    setPopupVisible(true);
  }

  function fecharPopup() {
    setPopupVisible(false);
    setSelectedPessoa(null);
  }


  return (
    <>
      {pessoas.map((pessoa, i) => (
        <div
          key={i}
          className="container Fundo tamanhoItemLinha BordaRedonda Margem20 Padding25"
        >
          <div className="displayFlex justify-content">
            <div className="justify-content">
              <h3>{pessoa.nomeCompleto}</h3>
              <p>Ramal: {pessoa.ramal}</p>
              <p>Setor: {pessoa.setor}</p>
            </div>
            <img
              className=" displayFlex  imagem"
              src={pessoa.foto}
              alt={pessoa.nomeCompleto}
            />
          </div>
          <div>
            <button
              onClick={()=>editar(pessoa)}
              className="Margem10 Padding5 fundoVerde fonteBranca bordaPretaArrendada"
            >
              Detalhes
            </button>
          </div>
        </div>
      )
      )}
      {/* Popup */}
      {popupVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Detalhes</h2>
          {selectedPessoa && (
              <div>
                <div>

                </div>
                <div>
                <img
                  src={selectedPessoa.foto}
                  alt={selectedPessoa.nomeCompleto}
                  className="imagem"
                />
                </div>
                <p><strong>Nome:</strong> {selectedPessoa.nomeCompleto}</p>
                <p><strong>Ramal:</strong> {selectedPessoa.ramal}</p>
                <p><strong>Setor:</strong> {selectedPessoa.setor}</p>
                <p><strong>email:</strong>{selectedPessoa.email}</p>
              <p><strong>telefone:</strong>{selectedPessoa.telefone}</p>
                
              </div>
            )}
            <button
              onClick={fecharPopup}
              className="Margem10 Padding5 fundoVermelho fonteBranca bordaPretaArrendada"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default Pessoas;