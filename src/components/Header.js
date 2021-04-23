import React from 'react'
import GITHUB from '../assets/github.svg'
import SEARCH from '../assets/search.svg'

const Header = () => {
  return (
    <div>
      <div>
        <img className='App-logo' src={GITHUB} alt="github-logo" />
        <img src={SEARCH} alt="" className="App-logo" />
      </div>

    </div>
  )
}

export default Header
