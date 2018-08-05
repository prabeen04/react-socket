import React, { Component } from 'react'

class chartFeed extends Component {
    render() {
        return (
            <div className="single-feed">
                <span className="user">{this.props.feed.user}</span>
                <span className="message">{this.props.feed.message}</span>
            </div>
        )
    }
}
export default chartFeed;