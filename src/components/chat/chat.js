import React from 'react';

export default (props) => {
    return (
        <div className='chat-wrapper'>
            <div className="chat-form">
                <input
                    type="text"
                    className="user-input"
                    name='user'
                    value={props.user}
                    onChange={(e) => props.onChange(e)}
                />
                <input
                    type="text"
                    className="message-input"
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