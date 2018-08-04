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
    this.socket.on('RECEIVE_MESSAGE', (message) => {
      console.log(message)
    })
  }
  componentDidMount() {
    this.socket.emit('SEND_MESSAGE',{})
  }
  onSend = () => {
    console.log(this.state.message)
  }
  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Chat message={this.state.message} onChange={this.onChange} onClick = {this.onSend} />
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
      <button onClick={() => props.onClick()}>Send</button>
    </div>
  )
}