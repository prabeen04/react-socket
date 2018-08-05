import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      message: '',
      messages: [],
      isTyping: false,
      typingUser: ''
    }
    this.socket = io('localhost:4001');
    this.socket.on('RECEIVE_MESSAGE', (message) => {
      console.log(message)
      this.setState({
        messages: [...this.state.messages, message]
      })
      console.log(message)
    })
    this.socket.on('USER_TYPING', (user) => {
      console.log(user)
      this.setState({
        typingUser: user.typingUser
      })
    })
  }
  onSend = () => {
    console.log(this.state.message)
    this.socket.emit('SEND_MESSAGE', {
      user: this.state.user,
      message: this.state.message,
    })
    this.setState({
      isTyping: false
    })
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onKeyPress = (e) => {
    this.socket.emit('TYPING', { typingUser: this.state.user })
    this.setState({
      isTyping: true
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.messages.length
          ? this.state.messages.map((message, index) => {
            return <p key={index}>{message.user}: {message.message}</p>
          })
          : null
        }
        <Chat
          message={this.state.message}
          onChange={this.onChange}
          onClick={this.onSend}
          onKeyPress={this.onKeyPress} />
          {this.state.isTyping &&this.state.typingUser && <p>{this.state.typingUser}</p>}
      </div>
    );
  }
}

export default App;

const Chat = (props) => {
  return (
    <div>
      <h3>chat component</h3>
      <input
        type="text"
        name='user'
        value={props.user}
        onChange={(e) => props.onChange(e)}
      />
      <input
        type="text"
        name='message'
        value={props.message}
        onChange={(e) => props.onChange(e)}
        onKeyPress={(e) => props.onKeyPress(e)}
      />
      <button onClick={() => props.onClick()}>Send</button>
    </div>
  )
}