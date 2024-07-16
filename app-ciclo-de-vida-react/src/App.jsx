import React from 'react';
import Contador from './components/Contador/Contador'

export default class App extends React.Component {

  constructor() {
      super();
      this.state = {
          mostrarContador: false
      }

  }

  render() {
    return (
        <div>
          <h1> Ciclo de Vida </h1>
          <button onClick={() => {
              this.setState({ mostrarContador: !this.state.mostrarContador });
          }}>

              {this.state.mostrarContador ? "Remover Contador" : "Exibir Contador"}
          </button>

          {this.state.mostrarContador ? <Contador/> : null}
        </div>
    )
  }
}