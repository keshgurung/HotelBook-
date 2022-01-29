import Message from '../components/Message'
import LoginForm from '../components/LoginForm'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { error, loading, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [navigate, userInfo])

  const handleSumbit = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <>
      <div className='container-fluid p-5 text-center'>
        <h1>Login</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm
              handleSumbit={handleSumbit}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
