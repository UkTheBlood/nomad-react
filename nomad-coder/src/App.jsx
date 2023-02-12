import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value)

  // console.log("call api")

  const iRunOnluOnce = () => {
    console.log('i run only one')
  }

  useEffect(iRunOnluOnce, [])

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) { 
      // 비어있지 않고, 5글자 이상의 길이만 state를 update
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword])

  useEffect(() => {
      console.log("i run when 'counter' changes")
  }, [counter])   // 새로고침 했을 때에도 적용됨



  return (
    <>
      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="search here..." />
        <h1>{counter}</h1>
      </div>
      <button onClick={onClick}> Click </button>
    </>
  );
}

export default App;