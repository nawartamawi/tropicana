import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar.js';
import ThreeJsCanvas from './ThreeJsCanvas.js';
import Header from './Header'
import Main from './Main';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
// import THREE from 'three';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aboutUs: 'now we are'
    }

  }
  render() {
    return (
      <div className="app">
        <NavBar aboutUs={this.state.aboutUs}/>
        {/* <Header /> */}
        <Main />
        <SideBar/>
      </div>
      // <div className="App">
      //   <NavBar />
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <ThreeJsCanvas />
        
      // </div>
    );
  }
}

export default App;
