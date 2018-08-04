import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Chat/>
      </div>
    );
  }
}

export default App;

const Chat = (props) => {
  return(
    <div>
      <h3>chat component</h3>
      <input type="text" value={props.message}/>
      <button>Send</button>
    </div>
  )
}