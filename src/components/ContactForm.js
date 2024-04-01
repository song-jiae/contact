import React, { useState } from 'react';
import { useDispatch } from "react-redux";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const addContact =(event)=>{
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  }
  return (
    <div className='ContactForm'>
      <h2>Save phone number</h2>
      <form onSubmit={addContact}>
        <label htmlFor='name'>Name</label>
        <input 
          type='text' 
          id='name' 
          placeholder='이름을 입력해주세요'
          value={name}
          onChange={(e) => setName(e.target.value)}
          /><br/>
        <label htmlFor='phoneNumeber'>Phone Number</label> 
        <input
          type='text'
          id='phoneNumeber'
          placeholder='핸드폰번호를 입력해주세요'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          /><br/>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}
export default ContactForm