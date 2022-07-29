import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Diego");
  const redTitle = false

  return (
    <div className="App">
      {/* CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componentes */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/*Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/*Inline style dinamico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>
      <h2 style={name === "Diego" ? { color: "green", backgroundColor: "#000" } : null}>Teste nome</h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/*CSS modules */}
      <Title/>
    </div>
  );
}

export default App;
