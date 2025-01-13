import styles from "./Pessoa"
const pessoas = [
    {
        nomeCompleto : "João Carlos",
        ramal: 30,
        setor: "TI",
        foto: "https://i.pravatar.cc/150?img=69"
      },
      {
        nomeCompleto: "Tais de Souza",
        ramal: 25,
        setor: "Marketing",
        foto: "https://i.pravatar.cc/150?img=5"
      },
      {
        nomeCompleto: "Joana Silva",
        ramal: 25,
        setor: "Marketing",
        foto: "https://i.pravatar.cc/150?img=9"
      },
      {
        nomeCompleto: "Carla Oliveira",
        ramal: 25,
        setor: "Marketing",
        foto: "https://i.pravatar.cc/150?img=1"
      },
      {
        nomeCompleto : "João Carlos",
        ramal: 30,
        setor: "TI",
        foto: "https://i.pravatar.cc/150?img=59"
      },
      {
        nomeCompleto: " Marcela Luzia Cristo",
        ramal: 25,
        setor: "Compras",
        foto: "https://i.pravatar.cc/150?img=40"
      },
      {
        nomeCompleto: "Andresa da Silva",
        ramal: 25,
        setor: "Comercial",
        foto: "https://i.pravatar.cc/150?img=20"
      },
      {
        nomeCompleto: "Luana Machado",
        ramal: 25,
        setor: "Vendas",
        foto: "https://i.pravatar.cc/150?img=10"
      },
]
    

function Pessoa({indice}){
    
    return (
        <div className="Fundo tamanhoItemLinha BordaRedonda Margem Padding25">
            <div className="block justify-content"> 
                <div className="Padding25 justify-content">
                    <h3 >{pessoas[indice].nomeCompleto}</h3>  
                    <p>Ramal: {pessoas[indice].ramal}</p>  
                    <p>Setor: {pessoas[indice].setor}</p>
                </div>  
                <img className=" block  imagem" src={pessoas[indice].foto} />
            </div>
        </div>
    )
}

export default Pessoa