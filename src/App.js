import Pessoas from './components/Pessoas';
import Ramais from './components/Ramais'; 
import './App.css';

function App() {
  return (
    <div className="main">
      <div  className="menu">
        <h2 className="fonteBranca ">Ramais</h2>
      </div>
      <Pessoas/>
      <Ramais/>
    </div>
  )
}

export default App;
