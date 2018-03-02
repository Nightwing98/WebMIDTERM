import React, { Component } from 'react';

import './Panel.css';

class Panel extends Component {
  state = {
    clicked:true
    
  }
  btnClicked = event => {
  	var result;
    this.setState.clicked({ clicked:false }) 
    this.props.text = result;    
  }
  render() {
    return (
      <div className="App">
        <ul>
        <button className="Btn" onClick="clicked">Chocolate <span>1000$</span></button>
        <button className="Btn" onClick="clicked">Chocolate <span>2000$</span></button>
        <button className="Btn" onClick="clicked">Chocolate <span>400$</span></button>
        <button className="Btn" onClick="clicked">Chocolate <span>500$</span></button>
        <button className="Btn" onClick="clicked">Chocolate <span>500$</span></button>
        <div className="Btn">result</div>

        </ul>
      </div>
    );
  }
}

export default Panel;
