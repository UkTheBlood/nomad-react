import { useEffect, useState } from 'react';
import './App.css';

function Hello () {
  function destroyedFn() {
    console.log('bye :(') 
  }
  function effectFn() {
    console.log('created :)')    // 컴포넌트가 실행될 때만 출력
    return destroyedFn;
  }
  useEffect(effectFn, [])
  
  return <h1>Hello</h1>
}

function UseEffect2() {
  
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (
    <>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "hide" : "show"}</button>
      </div>
    </>
  );
}

export default UseEffect2;