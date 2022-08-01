import './App.css';
import Car from './components/Car';

function App() {
  const myCars = [
    { name: "Onix", km: 200, color: "Branco" },
    { name: "Cobalt", km: 0, color: "Amarelo" },
    { name: "Cruze", km: 5400, color: "Azul" },
  ];

  return (
    <div className="App">
      <h1>Salão de Carros</h1>
      <div className="car-container">
      {myCars.map((car) => (
        <Car car={car}/>
      ))}
      </div>
    </div>
  );
}

export default App;
