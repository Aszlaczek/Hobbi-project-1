import React, { useRef } from 'react'
import Label from './Label'
import Button from './Button'

const CardRegister = () => {
    const refEmail = useRef<HTMLInputElement>(null);
    const refUser = useRef<HTMLInputElement>(null);
    const refPass = useRef<HTMLInputElement>(null);
    return (
        <div className='container-card'>
            <Label nameLabel='email' ref={refEmail} />
            <Label nameLabel='username' ref={refUser} />
            <Label nameLabel='password' ref={refPass} />
            <Button name='Submit' func={() => alert("Working")} />
        </div>
    )
}

export default CardRegister