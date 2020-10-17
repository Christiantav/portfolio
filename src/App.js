import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Landing from './components/Landing'
import TodoApp from './components/TodoApp'
import Pin from './components/Pin'
import Csx from './components/Csx'
import CredCap from './components/CredCap'

function App() {
  return (
    <>
      <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>

            <Route path="/todoapp">
              <TodoApp/>
            </Route>
            
            <Route path="/pin">
              <Pin/>
            </Route>

            <Route path="/csx">
              <Csx/>
            </Route>

            <Route path="/credibilitycapital">
              <CredCap/>
            </Route>
          </Switch>
        </Router>
      <Footer />
    </>
  );
}

export default App;
