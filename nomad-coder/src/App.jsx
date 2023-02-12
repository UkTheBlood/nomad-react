import './App.css';
import TestBtn from './TestBtn';

function App() {
  return (
    <>
      <div>
        Hello App
      </div>
      <TestBtn text={4621}/>
    </>

  );
}

export default App;


// React.memo
// 부모 컴포넌트가 리렌더링이 되면 자식 컴포넌트도 리렌더링이 일어나는데,
// 이는 어플리케이션이 느려지게 만드는 원인이 될 수 있음
// 우리가 props가 변경되지 않는 선에서 컴포넌트를 다시 그릴지 말지 정할 수 있음