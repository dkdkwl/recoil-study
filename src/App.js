import './App.css';
import {countState,inputState} from './recoil/atom'
import { useRecoilState, 
  useRecoilValue, 
  useSetRecoilState, 
  useResetRecoilState 
} from 'recoil';


function App() {
  const [counter, setCounter] = useRecoilState(countState); 
  // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
  const currentCount = useRecoilValue(countState);  // 읽기 전용!
  const resetCounter = useResetRecoilState(countState); // 디폴트값으로 값 변경

  const plusCount = () => {
    setCounter(counter+1)
  };
  const minusCount = () => {
    setCounter(counter-1)
  };


  console.log(counter)

  return (
    <div className="App">
      <div>{currentCount}</div>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default App;
