import styles from "./Pessoa"
const pessoas = [
    {
        nomeCompleto : "João Carlos",
        idade: 30,
        profissao: "Engenheiro",
        foto: "https://i.pravatar.cc/150?img=69"
      },
      {
        nomeCompleto: "Tais de Souza",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=5"
      },
      {
        nomeCompleto: "Joana Silva",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=9"
      },
      {
        nomeCompleto: "Carla Oliveira",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=1"
      },
      {
        nomeCompleto : "João Carlos",
        idade: 30,
        profissao: "Engenheiro",
        foto: "https://i.pravatar.cc/150?img=59"
      },
      {
        nomeCompleto: " Marcela Luzia Cristo",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=40"
      },
      {
        nomeCompleto: "Andresa da Silva",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=20"
      },
      {
        nomeCompleto: "Luana Machado",
        idade: 25,
        profissao: "Designer",
        foto: "https://i.pravatar.cc/150?img=10"
      },
]
    

function Pessoa({indice}){
    
    return (
        <div className="Fundo tamanhoItemLinha BordaRedonda Margem Padding25">
            <div className="block justify-content"> 
                <div className="Padding25 justify-content">
                    <h3 >{pessoas[indice].nomeCompleto}</h3>  
                    <p>Idade: {pessoas[indice].idade}</p>  
                    <p>Profissão: {pessoas[indice].profissao}</p>
                </div>  
                <img className=" block  imagem" src={pessoas[indice].foto} />
            </div>
        </div>
    )
}

export default Pessoa