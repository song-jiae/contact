import Section from './component/Section'
import './App.css';

function App() {
  return (
    <div className="App">
      <Section title='제일제당' num={1} />
      <Section title='동원참치' num={2}/>
      <Section title='네이버 커넥트 재단' num={3}/>
    </div>
  );
}

export default App;
