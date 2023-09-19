import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <hr/>
      {/* access props and display it to page */}
        <small>{this.props.sender}:</small>
        <p>{this.props.content}</p>
        <hr/>
      </div>
    )
  }
}

export default Message;