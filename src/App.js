import React, { Component } from 'react';
import './stylesheets/App.css';
import MarkdownTextBox from './components/MarkdownTextBox';
import MarkdownPreview from './components/MarkdownPreview';
import marked from 'marked';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({
      text: marked(text)
    });
  }

  render() {
    const placeholder = "Heading\n=======\n Sub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Matthew Cheah](https://freecodecamp.com/matthewcheah)*\n";

    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <MarkdownTextBox changeText={this.changeText} placeholder={placeholder}/>
        <MarkdownPreview markdown={this.state.text} />
      </div>
    );
  }
}

export default App;
