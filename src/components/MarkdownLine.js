import React, { Component } from 'react';

class MarkdownLine extends Component {
  render() {
    return (
      <p>{this.props.markdown}</p>
    );
  }
}

export default MarkdownLine;

