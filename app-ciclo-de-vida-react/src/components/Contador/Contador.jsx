import React from 'react';

export default class Contador extends React.Component{
    constructor() {
        super();
        this.state = {
            contador: 0,
        }
    }

    // Método chamado sempre que uma prop ou estado é atualizado
    shouldComponentUpdate() {
        // Caso seja passado o valor false, o componente nunca será atualizado. Por padrão, deve retornar true
        return this.state.contador === 2 ? false : true;
    }

    render(){
        console.log('Felipe');
        return (
            <div>
                <h1> { this.state.contador } </h1>

                <button onClick={() => this.setState({ contador: this.state.contador - 1 })}> Diminuir </button>
                <button onClick={() => { this.setState({ contador: this.state.contador + 1 }) }}> Aumentar </button>
            </div>
        )
    }
}