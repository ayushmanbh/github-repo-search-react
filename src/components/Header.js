import React from 'react'
import { Link } from 'react-router-dom'
import GITHUB from '../assets/github.svg'
import SEARCH from '../assets/search.svg'
import { useGlobalContext } from '../context'

const Header = () => {
  const { user, logout } = useGlobalContext()

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={GITHUB} width="100" height="30" alt="" />
        <img src={SEARCH} width="30" height="30" alt="" />
      </Link>
      {
        user.userInfo ? (
          <div className='d-flex align-items-center'>
            <div>
              <img className='rounded-circle img-fluid' width='40' height='40' src={user?.userInfo?.photoUrl} alt={user.userInfo.displayName} />
            </div>
            <div className='d-flex align-items-end'>
              <button type='button' className='btn btn-outline-dark mx-1' onClick={logout}>Logout</button>
            </div>
          </div>
        ) : null
      }
    </nav>
  )
}

export default Header
