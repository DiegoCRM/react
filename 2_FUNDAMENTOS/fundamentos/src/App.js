// components

import FirstComponent from "./components/FirstComponent";



// Styles / CSS
import './App.css';
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent/>
      <Events/>
      
    </div>
  );
}

export default App;
