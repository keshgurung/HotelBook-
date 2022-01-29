import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('login')
  }
  return (
    <div className='nav bg-light d-flex justify-content-between'>
      <Link className='nav-link' to='/'>
        Home
      </Link>

      {userInfo ? (
        <button
          className='nav-link'
          style={{ border: 0, backgroundColor: 'white' }}
          onClick={logoutHandler}
        >
          Logout
        </button>
      ) : (
        <>
          <Link className='nav-link' to='/register'>
            Register
          </Link>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </>
      )}
    </div>
  )
}

export default Header
