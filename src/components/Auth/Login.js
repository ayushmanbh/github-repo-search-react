import { Redirect, useHistory } from 'react-router-dom'
import { githubAuthProvider, googleAuthProvider } from '../../config/auth-method'
import { useGlobalContext } from '../../context'
import socialMediaAuth from '../../services/auth'

const Login = () => {
  const { user, setUser, error, showError } = useGlobalContext()
  const history = useHistory()

  const handleOnClick = async (provider) => {
    const result = await socialMediaAuth(provider)
    console.log(result);
    if (result.code) {
      showError(true, 'Error: ' + result.message + ' Please try again.')
    } else if (result.email) {
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
    <div className='d-flex justify-content-center align-items-center' style={{ height: '300px' }}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <button type='button' className='btn btn-danger btn-block' onClick={() => handleOnClick(googleAuthProvider)}>
          <i className="fab fa-google"></i>  Sign in with <b>Google</b>
        </button>
        <button type='button' className='btn btn-light btn-block' onClick={() => handleOnClick(githubAuthProvider)}>
          <i className="fab fa-github"></i>  Sign in with <b>Github</b></button>
      </div>
      { errormsg}
    </div>
  )
  if (user.isLoggedIn) {
    loginOptions = <Redirect to='/' />
  }

  return loginOptions
}

export default Login
