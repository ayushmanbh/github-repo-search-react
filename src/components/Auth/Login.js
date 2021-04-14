import { Redirect, useHistory } from 'react-router-dom'
import { githubAuthProvider, googleAuthProvider } from '../../config/auth-method'
import { useGlobalContext } from '../../context'
import socialMediaAuth from '../../services/auth'

const Login = () => {
  const { user, setUser } = useGlobalContext()
  const history = useHistory()

  const handleOnClick = async (provider) => {
    try {
      const result = await socialMediaAuth(provider)
      console.log(result);
      const userInfo = {
        uid: result?.uid,
        displayName: result?.displayName,
        email: result?.email,
        photoUrl: result?.photoUrl
      }
      setUser({ isLoggedIn: true, userInfo })
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  let loginOptions = (
    <div>
      <button onClick={() => handleOnClick(googleAuthProvider)}>Google</button>
      <button onClick={() => handleOnClick(githubAuthProvider)}>Github</button>
    </div>
  )
  if (user.isLoggedIn) {
    loginOptions = <Redirect to='/' />
  }

  return loginOptions
}

export default Login
