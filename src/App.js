import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"


function App() {
  const name = 'Fernando'
  const newname = name.toUpperCase()

  const meusItens = ["React", "Vue", "Angular"]

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  const nome = 'Maria'

  const [nome2, setNome2] = useState()

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello React!</h1>
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
        <Condicional/><br/>
        <OutraLista itens={meusItens}/>
        <div>
          <h1>State Lift</h1>
          <SeuNome setandoNome2={setNome2}/>
          <Saudacao nome2={nome2}/>
        </div> */}
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact='true' element={<Home/>}> </Route>
            <Route path='/empresa' element={<Empresa/>}></Route>
            <Route path='/contato' element={<Contato/>}> </Route>
          </Routes>
          <Footer/>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
