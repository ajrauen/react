import React from 'react'
import { render } from 'react-dom'

import Login from './js/login.js'
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
  render(){
    return <Login/>
  }
}

export default App

