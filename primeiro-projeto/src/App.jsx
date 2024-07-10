import React from "react";
import Navbar from './components/Navbar/Navbar'

class App extends React.Component{
  render() { // Método importante de toda classe React
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
