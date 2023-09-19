import React from "react";

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      body : "Ini adalah isi body pertamaku",
      subBody : "Ini adalah sub-body pertamaku"
    }
  }

  render() {
    return(
      <div>
        <p>{this.state.body}</p>
        <p>{this.state.subBody}</p>
      </div>
    )
  }
}

export default Body;