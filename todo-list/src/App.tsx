import React from 'react';
import { Header } from './components/Header/Header';
import './styles/global.css';
import {Tarefa} from "./components/Tarefa/Tarefa";


function App() {
  return (
    <div className="App">
        <Header />

        <Tarefa/>
    </div>
  );
}

export default App;
