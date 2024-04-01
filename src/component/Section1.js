import React from 'react'

const Section = (props) => {
  return (
    <div className='Section'>
      <h2>{props.num}</h2>
      <span style={{
        color:'#fff',
        backgroundColor:'lightgray',
        padding:'5px 10px',
        borderRadius:'5px',
        marginBottom:'0.4rem',
        display:'inline-block'
      }}>{props.title}</span>
      <h5>{props.title2}</h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam voluptates debitis labore eum minus suscipit earum placeat illo
      </p>
    </div>
  )
}

export default Section