import './App.css';
import { useState } from 'react';

import ContainConverter from './components/ContainConverter';
import HourConverter from './components/HourConverter';
import KmTOMiles from './components/KmTOMiles';

function App() {
  function Btn({text, big}) {
    return <button style={{
      backgroundColor: "tomato",
      color: "white",
      padding: "10px 20px",
      borderRadius: "10px",
      border: 0,
      fontSize: big ? 55 : 16,
    }}>
      {text}
    </button>
  }

  function ConfirnBtn() {
    return <button>ConfirnBtn</button>
  }

  return (
    <>
      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" big={false} />
    </>

  );
}

export default App;
