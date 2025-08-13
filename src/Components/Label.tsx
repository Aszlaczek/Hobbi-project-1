import React from 'react'

const Label = (props: { nameLabel: string, ref: any }) => {
  return (
    <div className='container-label'>
      <label htmlFor={props.nameLabel}><h2>{props.nameLabel}</h2></label>
      <input type="text" name={props.nameLabel} id={props.nameLabel} ref={props.ref} />
    </div>
  )
}

export default Label