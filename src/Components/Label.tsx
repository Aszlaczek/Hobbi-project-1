import React from 'react'

const Label = (props: {nameLabel:string}) => {
  return (
    <div className='container-label'>
        <label htmlFor={props.nameLabel}><h2>{props.nameLabel}</h2></label>
        <input type="text" name={props.nameLabel} id={props.nameLabel} />
    </div>
  )
}

export default Label