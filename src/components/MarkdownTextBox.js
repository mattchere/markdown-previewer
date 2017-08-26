import React, { Component } from 'react';
import '../stylesheets/App.css';

class MarkdownTextBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const text = e.target.value;
    this.props.changeText(text);
  }

  componentWillMount() {
    this.props.changeText(this.props.placeholder);
  }

  render() {
    return (
      <textarea className="box" onChange={this.handleChange}>{this.props.placeholder}</textarea>
    );
  }
}

export default MarkdownTextBox;

