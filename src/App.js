import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";
import Chat from './components/chat/chat';
import Typing from './components/chat/typing';
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
    this.socket = io('https://react-express-socket.herokuapp.com/');
    this.socket.on('RECEIVE_MESSAGE', (message) => {
      console.log(message)
      this.setState({
        messages: [...this.state.messages, message],
        typingUser: ''
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
      user: this.state.user.toUpperCase(),
      message: this.state.message,
    })
    this.setState({
      typingUser: '',
      message: ''
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
        <Chat
          {...this.state} 
          message={this.state.message}
          onChange={this.onChange}
          onClick={this.onSend}
          onKeyPress={this.onKeyPress}
          typingUser={this.state.typingUser}
          feed={this.state.messages}
          />
          
      </div>
    );
  }
}

export default App;

