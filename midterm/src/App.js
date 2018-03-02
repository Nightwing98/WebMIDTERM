import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    clicked:true
  }
  btnClicked = event =>{
    this.setState.clicked({ clicked:false })
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <ul>
        <button className="Btn" Onclick="clicked">Menu</button>
        <button className="Btn" Onclick="clicked">About</button>
        <button className="Btn" Onclick="clicked">Settings</button>
        </ul>
      </div>
    );
  }
}

export default App;
