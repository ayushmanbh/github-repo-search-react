import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Login from './components/Auth/Login';
import Home from './components/Home';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
