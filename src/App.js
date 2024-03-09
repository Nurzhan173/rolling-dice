import './App.css';
import { useState } from 'react';

const dotMap = {
  1: ['center'],
  2: ['bottom-left', 'bottom-right'],
  3: ['bottom-left', 'bottom-right', 'center'],
  4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  5: ['center', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
  6: ['middle-right', 'middle-left', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
}

function Dice({ number }) {
  const mapValues = dotMap[number];

  return (
    <div className="dice">
      <div className="dice-inner">
        {mapValues.map((cls, index) => <div key={index} className={`dot ${cls}`}></div>)}
      </div>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState(0);
  const [diceList, setDiceList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateDiceList = () => {
      return [...Array.from({ length: number }).fill(null).map(() => {
        return Math.floor(Math.random() * 6) + 1;
      })]
    }

    setDiceList(generateDiceList());
  }

  const changeNumber = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit}>
        <label form="input">Dice number</label>
        <input id="input" type="number" min="1" max="99" required onChange={changeNumber} value={number}/>
        <button type="submit">Roll</button>
      </form>

      <div className="dice-container">
        {diceList.map((item, index) => <Dice key={index} number={item}/>)}
      </div>
    </div>
  );
}

export default App;
