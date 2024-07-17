import React from "react";
import {Navbar} from './components/Navbar/Navbar'
import Article from './components/Article/Article'
import { Contador } from './components/Contador/Contador'

import imagemArtigo1 from './assets/images/imagem-article1.png'
import imagemArtigo2 from './assets/images/imagem-article2.png'
import imagemArtigo3 from './assets/images/imagem-article3.png'

class App extends React.Component{
  render() { // Método importante de toda classe React
    return (
      <>
        <Navbar/>

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore quaerat totam numquam odit dicta hic, harum, error possimus esse magnam ipsum exercitationem aliquid quo? Quisquam laborum aut nulla repudiandae?"
            thumbnail={imagemArtigo1}
          />

          <Article
            title="Vibrant Portraits of 2024"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore quaerat totam numquam odit dicta hic, harum, error possimus esse magnam ipsum exercitationem aliquid quo? Quisquam laborum aut nulla repudiandae?"
            thumbnail={imagemArtigo2}
          />

          <Article
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore quaerat totam numquam odit dicta hic, harum, error possimus esse magnam ipsum exercitationem aliquid quo? Quisquam laborum aut nulla repudiandae?"
            thumbnail={imagemArtigo3}
          />
        </section>

        {/* <Contador /> */}
      </>
    );
  }
}

export default App;
