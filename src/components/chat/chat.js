import React from 'react';
import Typing from './typing';
import ChatFeed from './chartFeed';

export default (props) => {
    return (
        <div className='chat-wrapper'>
            <div className="chat-feed">
                {props.feed.length
                    ? props.feed.map((message, index) => {
                        return <ChatFeed key={index} feed={message} />
                    })
                    : null
                }
            </div>
            <div className="chat-form">
            {props.typingUser && <Typing typingUser={props.typingUser} />}
                <input
                    type="text"
                    className="user-input"
                    name='user'
                    value={props.user}
                    onChange={(e) => props.onChange(e)}
                />
                <input
                    type="text"
                    className="user-input"
                    name='message'
                    value={props.message}
                    onChange={(e) => props.onChange(e)}
                    onKeyPress={(e) => props.onKeyPress(e)}
                />
                <button className='send-btn' onClick={() => props.onClick()}>Send</button>
            </div>
        </div>
    )
}