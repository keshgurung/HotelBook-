import { userSelector, useSelector, useStore } from 'react-redux'

const Home = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { error, loading, userInfo } = userLogin

  return (
    <div className='container-fluid h1 p-5 text-center'>
      welcome {JSON.stringify(userLogin.userInfo)}
    </div>
  )
}

export default Home
