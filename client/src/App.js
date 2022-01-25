import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './pages/Header'

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
