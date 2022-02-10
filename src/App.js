import React from "react";
import Cadastro from "./cadastro/cadastro";
import Acoes from "./acoes/acoes";
import Cores from "./cores/cores";
import ToDo from "./toDo/toDo";
import Palavras from "./palavras/palavras";
import Olamundo from "./olamundo/olamundo";
import Pessoas from "./pessoas/pessoas";
import Carousel from "./importar/index";
import Home from "./Home/HomeIndex.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import URL from "./url/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Header />}>


        <Route path="/" element={<Home />} />
        <Route path="acoes" element={<Acoes />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="cores" element={<Cores />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="palavras" element={<Palavras />} />
        <Route path="olaMundo" element={<Olamundo />} />
        <Route path="pessoas" element={<Pessoas />} />
        <Route path="carousel" element={<Carousel />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>
                Não tem nada aqui! Clique para voltar para a{" "}
                <Link to="/">Home</Link>
              </p>
            </main>
          }
        />
        <Route path="url/:color/:text" element={<URL />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
