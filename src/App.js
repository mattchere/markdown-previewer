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
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <MarkdownTextBox changeText={this.changeText} />
        <MarkdownPreview markdown={this.state.text} />
      </div>
    );
  }
}

export default App;
