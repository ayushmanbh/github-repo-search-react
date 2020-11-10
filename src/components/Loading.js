import React from 'react'
import loading from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='text-center'>
      <img className='img-fluid' src={loading} alt="loading" />
    </div>
  )
}

export default Loading
