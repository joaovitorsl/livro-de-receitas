import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.css';
import './receita.css';
import receitas from './receitas.js';
import favicon from './images/favicon.png';
import { HashRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/receitas/:id">
            <Cards />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

function ListaIngredientes({ ingrediente }) {
  const list = ingrediente.map(ingrediente => <li>{ingrediente.qtd} {ingrediente.nome}</li>);
  return (
    <ul>
      {list}
    </ul>
  );
}

function ModoPreparo({ preparo }) {
  const list = preparo.map(passo => <li>{passo}</li>);
  return (
    <ol>
      {list}
    </ol>
  );
}

function CardReceita({ titulo, imagem }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title" style={{ minHeight: "48px", margin: "0" }}>{titulo}</h5>
      </div>
      <div id="card-img" style={{ height: "180px", background: "url(" + imagem + ") center no-repeat", backgroundSize: "cover", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
        <div id="gradiente"></div>
      </div>
    </div>
  );
}

function ListaReceitas() {
  const arr = []
  for (let i in receitas) {
    arr.push(
      <Link id="aCard" to={`/receitas/${i}`}>
        <CardReceita titulo={receitas[i].titulo} imagem={receitas[i].foto} />
      </Link>
    )
  }
  return arr
}

function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap" rel="stylesheet"></link>
      <div id="main-content">
        <div id="header">
          <div id="header-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4rem', marginBottom: '4rem' }}>

            <img id="i" src={favicon} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '2rem' }}>
              <span id="title">Livro de Receitas</span>
              <span id="stitle">da família Silva Luciano</span>
            </div>
          </div>
        </div>

        <p id="subtitle">Escolha a receita:</p>

        <div id="lista">
          <ListaReceitas />
        </div>
      </div>
    </>
  );
}

function Receita({ titulo, imagem, id, site }) {
  return (
    <>
      <div id="foto" style={{ background: "url(" + imagem + ") center no-repeat", backgroundSize: "cover" }}></div>
      <div id="receita">
        <h1 id="titulo">{titulo}</h1>
        <div id="ingredientes">
          <h2 id="t2">Ingredientes</h2>
          <ListaIngredientes ingrediente={receitas[id].ingredientes} />
        </div>

        <div id="modo">
          <h2 id="t2">Modo de preparo</h2>
          <ModoPreparo preparo={receitas[id].preparo} />
        </div>
        <p id="site">Retirado de: {site}</p>
      </div>
    </>
  );
}

function Cards() {
  let { id } = useParams();
  return (
    <Receita site={receitas[id].url} id={id} titulo={receitas[id].titulo} imagem={receitas[id].foto} />
  );
}