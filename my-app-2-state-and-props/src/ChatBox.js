import React from "react";
import Message from "./Message";

class ChatBox extends React.Component {
  render() {
    return (
      <div>
        {/*use Message component and send props (sender & content) */}
        <Message sender="Jon" content="Sudah makan belum?."/>
        <Message sender="Sarah" content="Sudah, kamu bagaimana, Jon?." />
        <Message sender="Jon" content="Sudah juga, Sarah."/>
      </div>  
    )
  }
}

export default ChatBox;