import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: '',
      messages: []
    }
  }
  render() {
    return (
      <div className="App">
          <Chat message={this.state.message}/>
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