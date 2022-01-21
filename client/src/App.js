import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './booking/Header'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  )
}

export default App
