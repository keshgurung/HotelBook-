import React from 'react'
import Message from '../components/Message'
import LoginForm from '../components/LoginForm'

const Login = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Login</h1>
        {/* {message && <Message variant='danger'>{message}</Message>} */}
        {/* {error && <Message variant='danger'>{error}</Message>} */}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm
              handleSumbit={handleSumbit}
              // email={email}
              // setEmail={setEmail}
              // password={password}
              // setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
