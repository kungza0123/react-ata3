import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar';

import { AuthProvider } from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          
          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
