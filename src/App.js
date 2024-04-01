import './style/App.css';
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
/*
1.왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 serch창이 있다.
2.리스트에 유저 이름과 전화번호를 추가할 수 있다.
3.리스트에 아이템이 몇 개 있는지 보인다.
4.사용자가 유저 이름을 검색할 수있다.
*/
function App() {
  return (
    <div className="App">
      <h1 className='title'>Contact Us</h1>
      <div className='content'>
        <ContactForm/>
        <ContactList/>
      </div>
    </div>
  );
}

export default App;
