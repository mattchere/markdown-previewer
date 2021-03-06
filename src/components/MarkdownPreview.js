import React, { Component } from 'react';
import '../stylesheets/App.css';
import renderHTML from 'react-render-html';

class MarkdownPreview extends Component {
  render() {
    return (
      <div className="box">{renderHTML(this.props.markdown)}</div>
    );
  }
}

export default MarkdownPreview;
