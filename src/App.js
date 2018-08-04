import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messages: []
    }
    this.socket = io('localhost:4001');
    this.socket.on('RECEIVE_MESSAGE', (a, b, c) => {
      console.log(a)
      console.log(b)
      console.log(c)
    })
  }
  componentDidMount() {
    this.socket.emit('SEND_MESSAGE', {})
  }
  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Chat message={this.state.message} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;

const Chat = (props) => {
  return (
    <div>
      <h3>chat component</h3>
      <input type="text" value={props.message} onChange={(e) => props.onChange(e)} />
      <button>Send</button>
    </div>
  )
}