import React from 'react'
import Label from './Label'
import Button from './Button'

const CardLogin = () => {

  // Uncontroled component  

  return (
    <div className='container-card'>
      <Label nameLabel='username' />
      <Label nameLabel='password' />
      <Button name='Login' func={() => alert('Working!')} />
    </div>

  )
}

export default CardLogin