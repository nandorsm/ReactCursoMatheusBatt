import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Condicional from './components/Condicional';


function App() {
  const name = 'Fernando'
  const newname = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  const nome = 'Maria'

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React!</h1>
        <Frase/>
        <SayMyName nome="Jhon"/>
        <SayMyName nome={nome}/>
        <Pessoa
          nome="Fernando"
          idade="28"
          profissao="Programador"
          foto="https://via.placeholder.com/150"
        />
        <p>Meuuuuuuu primeiro App</p>
        <p>Olá, {newname}</p>
        <p>Soma: {sum(2, 3)}</p>
        <img src={url} alt="Minha Imagem"></img>
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld/>
        <List/> <br/>
        <Condicional/>
      </header>
    </div>
  );
}

export default App;
