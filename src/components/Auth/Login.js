import { Redirect, useHistory } from 'react-router-dom'
import { githubAuthProvider, googleAuthProvider } from '../../config/auth-method'
import { useGlobalContext } from '../../context'
import socialMediaAuth from '../../services/auth'

const Login = () => {
  const { user, setUser, error, showError } = useGlobalContext()
  const history = useHistory()

  const handleOnClick = async (provider) => {
    const result = await socialMediaAuth(provider)
    if (result.email) {
      const userInfo = {
        uid: result?.uid,
        displayName: result?.displayName,
        email: result?.email,
        photoUrl: result?.photoURL
      }
      setUser({ isLoggedIn: true, userInfo })
      history.push('/')
    } else {
      showError(true, 'Oops something went wrong :( Please try again.')
    }
  }
  let errormsg = null
  if (error.state) {
    errormsg = (
      <div>
        <p className='text-danger'>{error.msg}</p>
      </div>
    )
  }

  let loginOptions = (
    <>
      <div>
        <button onClick={() => handleOnClick(googleAuthProvider)}>Google</button>
        <button onClick={() => handleOnClick(githubAuthProvider)}>Github</button>
      </div>
      {errormsg}
    </>
  )
  if (user.isLoggedIn) {
    loginOptions = <Redirect to='/' />
  }

  return loginOptions
}

export default Login
