import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Header from './pages/Header'
import Dashboard from './user/Dashboard'
import { useSelector } from 'react-redux'

import DashboardSeller from './user/DashboarsSeller'
import New from './hotels/New'

function App() {
  const { userLogin } = useSelector((state) => ({ ...state }))
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/dashboard'
          element={
            userLogin.userInfo && userLogin.userInfo.token ? (
              <Dashboard />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/dashboard/seller'
          element={
            userLogin.userInfo && userLogin.userInfo.token ? (
              <DashboardSeller />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/hotels/new'
          element={
            userLogin.userInfo && userLogin.userInfo.token ? (
              <New />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
