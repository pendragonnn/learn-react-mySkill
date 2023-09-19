import React from "react";

// Class Component Header
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "belajar Reactjs",
      subTitle: "Panduan step by step Reactjs untuk pemula",
    };
  }

  changeTitle = () => {
    this.setState({
      title: "Tutorial Reactjs Myskill",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah Judul</button>
      </div>
    );
  }
}

export default Header;
