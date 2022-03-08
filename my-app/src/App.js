import logo from './logo.svg';
import './App.css';
import Bloco from "./components/Bloco"
import Rimas from "./components/Rimas"

function App() {
  return (
    <div className="App">
      <h1>Bloco de Rima</h1>
      <Rimas></Rimas>
      <Bloco></Bloco>
    </div>
  );
}

export default App;
