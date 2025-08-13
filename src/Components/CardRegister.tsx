import React from 'react'
import Label from './Label'
import Button from './Button'

const CardRegister = () => {
    return (
        <div className='container-card'>
            <Label nameLabel='email' />
            <Label nameLabel='username' />
            <Label nameLabel='password' />
            <Button name='Submit' func={() => alert("Working")} />
        </div>
    )
}

export default CardRegister