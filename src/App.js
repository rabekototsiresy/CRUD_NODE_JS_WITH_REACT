import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import ListMusic from './components/ListMusic'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ ListMusic} />
      </Switch>
    </Router>
  )
}

export default App
