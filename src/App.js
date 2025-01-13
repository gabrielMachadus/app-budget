import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  return (
    <div className="App">
      <div  className="menu">
        <h2 className="fonteBranca ">Ramais</h2>
      </div>
        
      <Pessoa 
        indice={0}
      />
      <Pessoa 
        indice={1}
      />
      <Pessoa 
        indice={2}
      />
      <Pessoa 
        indice={3}
      />
      <Pessoa 
        indice={4}
      />
      <Pessoa 
        indice={5}
      />
      <Pessoa 
        indice={6}
      />
      <Pessoa 
        indice={7}
      />
      
      
      
      
    </div>
  )
}

export default App;
