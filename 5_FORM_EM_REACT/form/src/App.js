
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Davi", email: "davi@gmail.com", bio: "sou desenvolvedor", role: "Editor" }} />
    </div>
  );
}

export default App;
