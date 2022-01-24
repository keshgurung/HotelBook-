import React from 'react'
import { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import axios from 'axios'
import Message from '../components/Message'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [message, setMessage] = useState('')

  const history = useHistory()

  const handleSumbit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:4000/api/register`, {
        username: username,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      })
      history.push('/login')
      console.log(response)
    } catch (err) {
      setMessage(err.message)
    }
  }
  console.log('err here', message)
  return (
    <>
      <div className='container-fluid p-5 text-center'>
        <h1>Register</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {/* {error && <Message variant='danger'>{error}</Message>} */}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <RegisterForm
              handleSumbit={handleSumbit}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordConfirmation={passwordConfirmation}
              setPasswordConfirmation={setPasswordConfirmation}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
