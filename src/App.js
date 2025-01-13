import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="fonteBranca ">Alterando JSX</h1>
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
    </div>
  )
}

export default App;
