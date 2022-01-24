import React from 'react'

const RegisterForm = ({
  handleSumbit,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
}) => {
  return (
    <form onSubmit={handleSumbit} className='mt-3'>
      <div className='form-group mb-3'>
        <label className='form-label'>Your username</label>
        <input
          type='text'
          className='form-control'
          placeholder='enter name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className='form-group mb-3'>
        <label className='form-label'>Your email</label>
        <input
          type='text'
          className='form-control'
          placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className='form-group mb-3'>
        <label className='form-label'>Type password again</label>
        <input
          type='text'
          className='form-control'
          placeholder='enter password again'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        ></input>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default RegisterForm
