import { useState } from 'react';
import './App.css';
import HourConverter from './components/HourConverter';
import KmTOMiles from './components/KmTOMiles';

function App() {

  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value)
  }

  return (
    <>
      <div>
        <h1>Super Converter</h1>
      </div>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select yout Option</option>
        <option value="0">Mitutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "select your unit" : null}
      {index === "0" ? <HourConverter /> : null}
      {index === "1" ? <KmTOMiles /> : null}
    </>

  );
}

export default App;
