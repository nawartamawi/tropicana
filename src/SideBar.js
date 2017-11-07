import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Schedule from './Schedule'
import ThreeJsCanvas from './ThreeJsCanvas.js';
import AboutUs from './AboutUs';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const SideBar = () => (
  <div className="side-bar">
    <Switch>
      <Route path='/AboutUs' component={AboutUs} />
    </Switch>
  </div>
)

export default SideBar
