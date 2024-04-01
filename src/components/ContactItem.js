import React from 'react'

const ContactItem = ({item}) => {
  return (
    <div className='ContactItem'>
      <img style={{width:50, border:'1px solid lightgray'}}
        src='https://www.shutterstock.com/image-vector/people-icon-person-user-trendy-250nw-1278113245.jpg'
      />
      <div className='ContactItemData'>
        <h5>{item.name}</h5>
        <p>{item.phoneNumber}</p>
      </div>
    </div>
  )
}

export default ContactItem