import { Redirect } from 'react-router'
import { useGlobalContext } from '../context'
import Results from './Results'
import SearchBar from './SearchBar'

const Home = () => {
  const { user } = useGlobalContext()
  return user?.isLoggedIn ? (
    <>
      <SearchBar />
      <Results />
    </>
  ) : <Redirect to='/login' />
}

export default Home
