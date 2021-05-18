import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchBar = () => {
  const inputRef = useRef(null)
  const { query, setQuery, setIsLoading, showError, setResults } = useGlobalContext()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const fetchResults = async () => {
    const repoResults = await fetch('https://api.github.com/search/repositories?q=' + query + '&per_page=20')
    if (!repoResults) {
      throw new Error('Something Went Wrong')
    }
    console.log(repoResults);
    const data = await repoResults.json()
    return data
  }

  const handleClick = () => {
    if (!query) {
      setIsLoading(false)
      showError(true, 'Please try again with a valid query')
      return
    }
    fetchResults()
      .then(data => {
        console.log(data);
        setIsLoading(false)
        if (data.total_count === 0) {
          showError(true, 'No results found.')
          return
        }
        showError()
        setResults(data)
      })
      .catch(error => {
        console.log(error.message);
        setIsLoading(false)
        showError(true, error.message)
      })

    setIsLoading(true)
  }

  return (
    <div className="input-group my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search Github Repositories"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleClick}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar
