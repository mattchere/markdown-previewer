import React, { Component } from 'react';
import '../stylesheets/MarkdownTextBox.css';

class MarkdownTextBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const text = e.target.value;
    this.props.changeText(text);
  }

  render() {
    return (
      <textarea className="box" onChange={this.handleChange} />
    );
  }
}

export default MarkdownTextBox;

