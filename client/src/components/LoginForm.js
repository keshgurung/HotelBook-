import React from 'react'

const LoginForm = ({
  handleSumbit,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <form onSubmit={handleSumbit} className='mt-3'>
      <div className='form-group mb-3'>
        <label className='form-label'>Your username</label>
        <input
          type='text'
          className='form-control'
          placeholder='enter username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your Password</label>
        <input
          type='text'
          className='form-control'
          placeholder='enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button disabled={!username || !password} className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default LoginForm
