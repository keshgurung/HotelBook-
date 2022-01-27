// import from react-redux and redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// create user reducer function
// - this is initiated in the reducers file - userLoginReducers and imported here....
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

// combine multiple reducer ... import from reducers and can add here
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]

// create redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

//  provide redux store to the entire app.
// - import in the index.js page and add inside react dom.
