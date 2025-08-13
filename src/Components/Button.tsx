import React from 'react'

const Button = (props: { name: string, func: any }) => {
  return (
    <div className='container-button'>
      <button onClick={props.func} className='button'>{props.name}</button>
    </div>
  )
}

export default Button