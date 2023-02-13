import React from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="section-center">
        <Title title="Nice Cream" />
        <div className="container" >
          <h4 style={{textAlign:"center", fontSize:"20px"}}>LE NOSTRE SCELTE</h4>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
