import './App.css';
import React, { useState } from 'react';

import ContainConverter from './components/ContainConverter';
import HourConverter from './components/HourConverter';
import KmTOMiles from './components/KmTOMiles';

function Btn({ text, big, onClick }) {
  return <button style={{
    backgroundColor: "tomato",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    border: 0,
    fontSize: big ? 25 : 16,    // props를 가지고 true인지 false인지에 따라 사이즈 변경

  }}
    onClick={onClick} >
    {text}
  </button>
}

const MemorizedBtn = React.memo(Btn)

function App() {

  const [value, setValue] = useState("Save Changes")
  const changeValue = () => {
    setValue("Revert Changes")
  }

  return (
    <>
      <MemorizedBtn text={value} big={true} onClick={changeValue} />
      {/* 
        onClick={changeValue} 을 넣으면 prpos를 가져오는 것 밖에 안 됨 
        Btn 컴포넌트에 props로 넣어주고, 이를 가져와야 함
      */}
      <MemorizedBtn text="Continue" big={false} />
    </>

  );
}

export default App;


// React.memo
// 부모 컴포넌트가 리렌더링이 되면 자식 컴포넌트도 리렌더링이 일어나는데,
// 이는 어플리케이션이 느려지게 만드는 원인이 될 수 있음
// 우리가 props가 변경되지 않는 선에서 컴포넌트를 다시 그릴지 말지 정할 수 있음