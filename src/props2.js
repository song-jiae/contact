import Section from './component/Section'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>동물이 내는 소리</h1>
      <Section animal='개' message='멍멍'/>
      <Section animal='병아리' message='멍멍'/>
      <Section animal='쥐' message='멍멍'/>
    </div>
  );
}

export default App;
