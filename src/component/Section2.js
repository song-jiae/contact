import React from 'react'

const Section = (props) => {
  return (
    <div className='Section'>
      <h1 style={{
        display:'inline-block'
      }}
      >{props.animal}의 소리</h1>
      <span style={{
        fontSize:'2rem'
      }}>{props.message}</span>
    </div>
  )
}

export default Section