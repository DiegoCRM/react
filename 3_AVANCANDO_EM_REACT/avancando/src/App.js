
import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  //const name = "Juliana";

  const [userName] = useState("Davi");

  const cars = [
    { id: 1, brand: "Ferrari", coloe: "Amarela", newCar: true, km: 20 },
    { id: 2, brand: "Chevrolet", coloe: "Azul", newCar: false, km: 200 },
    { id: 3, brand: "Jeep", coloe: "Vermelho", newCar: false, km: 2000 },

  ]


  function showMessage() {
    console.log("Evento do componente pai");

  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  }



  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Imagem em public*/}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade" />

      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/*props*/}
      <ShowUserName name={userName} />

      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="azul" newCar={false} />

      {/*reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={5640} newCar={false} />

      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.brand}
          km={car.km}
          newCar={car.newCar} />
      ))}
      {/* fragment*/}
      <Fragment propFragment="teste" />

      {/* children */}
      <Container myValue="teste2">
        <p> bla bla bla</p>
      </Container>
      <Container myValue="teste3">
        <h5> testando Container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/*state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

    </div>
  );
}

export default App;
