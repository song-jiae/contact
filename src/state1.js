import Section from './component/Section'
import './App.css';
import { useState } from 'react';
//컴포넌트 연결안함
//리액트에서는 state가 바뀌어야 ui가 바뀐다.
//변수가 바뀔 때는 변화하지 않는다.
function App() {
  let counter = 0;
  const [counter1, setCounter1]= useState(0);
  /*
  useState
  1. import하기
  2. 선언
  const [상태변경, set상태변경함수]=useState(초기값);
  */
  /*
  1. 유저가 버튼을 클릭한다.
  2. counter+1이 되고 1을 콘솔출력
  3. setState함수가 호출된다.
  4. console.log에 실행된다
  변수값은 1로 보이고  state값은 아직 안변했다
  왜냐면 그 전에 값이 보이기 때문이다.
  increase라는 함수가 종결된다.
  5. let counter=0;을 거치면서 counter값은 다시 0으로 초기화 된다.
  그러면서
  6. 업데이트 된 state 값이 보인다.

  중요한 것
  변수는 리랜더링 될때마다 초기화 됨
  state값은 비동기적으로 처리된다.
  카페 주문시 진동벨생각해보기

  */
  let increase = ()=>{
    counter= counter1 + 1;
    setCounter1(counter1+1);
    console.log('counter',counter, 'counter1 state', counter1);
  }
  //감소하는 함수 
  let decrease=()=>{
    setCounter1(counter1-1);

  }
  return (
    <div className="App">
      <h2>variable {counter}</h2>
      <h2>state {counter1}</h2>
      <button onClick={increase}>증가+</button>
      <button onClick={decrease}>감소-</button>
    </div>
  );
}

export default App;
