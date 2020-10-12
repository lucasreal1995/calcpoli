import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input id="DisplayResultado" type="text" value="" readonly /><br></br>
        <input id="DisplaySecundario" type="text" value="" readonly /><br></br>
      </header>

      <button id="1" type="number1" class="number"> 1</button>
      <button id="2" type="number2" class="number"> 2</button>
      <button id="3" type="number3" class="number"> 3</button>
      <button id="X" type="multiply" class="operator"> X</button><br></br>
      <button id="4" type="number4" class="number"> 4</button>
      <button id="5" type="number5" class="number"> 5</button>
      <button id="6" type="number6" class="number"> 6</button>
      <button id="/" type="divisor" class="operator"> /</button><br></br>
      <button id="7" type="number7" class="number"> 7</button>
      <button id="8" type="number8" class="number"> 8</button>
      <button id="9" type="number9" class="number"> 9</button>
      <button id="+" type="plus" class="operator"> +</button><br></br>
      <button id="," type="decimal" class="decimal"> ,</button>
      <button id="0" type="number0" class="number"> 0</button>
      <button id="=" type="equal" class="operator"> =</button>
      <button id="-" type="minus" class="operator"> -</button><br></br>
      <button id="limpar" type="clear" class="clear"> limpar</button><br></br>

    </div>
  );
}

export default App;
