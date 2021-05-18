import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const Results = () => {
  const { isLoading, error, results } = useGlobalContext()

  if (isLoading) {
    return < Loading />
  }
  else if (error.state) {
    return (
      <p className='text-danger'>{error.msg}</p>
    )
  }
  else {
    return (
      <>
        <ul className="list-group mb-3">
          {results.items ? results.items.map((item, index) => {
            return (
              <li
                key={index}
                className='list-group-item'>
                <div className="m-1 d-flex justify-content-between" >
                  <div style={{ maxWidth: '100px' }}>
                    <img
                      className='img-fluid rounded-circle shadow border border-dark'
                      src={item.owner.avatar_url}
                      alt={item.name} />
                  </div>
                  <div className="d-flex justify-content-center text-right flex-column">
                    <a href={item.html_url} target='_blanck' rel='noopener noreferrer'>
                      <h3>{item.name}</h3>
                    </a>
                    <p>{item.description}</p>
                  </div>
                </div>
              </li>
            )
          }) : <small className="font-italic">So empty here</small>}
        </ul>
      </>
    )
  }
}

export default Results

//To Do-1: show the list of results from results object
//To Do-1: Handle errors

