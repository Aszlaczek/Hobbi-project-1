import React, { useRef, useState } from 'react'
import Label from './Label'
import Button from './Button'

const CardLogin = () => {

  type User = {
    username: string,
    password: string
  }
  const [data, setData] = useState<User>()

  const refUser = useRef<HTMLInputElement>(null);
  const refPass = useRef<HTMLInputElement>(null);

  // Uncontroled component  

  const SubmitAction = (event: React.FormEvent) => {
    event.preventDefault()

    setData({ username: refUser.current?.value ?? "", password: refPass.current?.value ?? "" })

    console.log(data, refUser.current?.value, refPass.current?.value)

  }

  return (
    <form onSubmit={SubmitAction} className='container-card'>
      <Label nameLabel='username' ref={refUser} />
      <Label nameLabel='password' ref={refPass} />
      <Button name='Login' func={() => alert('Working!')} />
    </form>

  )
}

export default CardLogin