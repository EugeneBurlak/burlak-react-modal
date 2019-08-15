import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../package';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bool: true
    }
  }
  render() {
    return (
      <Modal opened={this.state.bool} onHide={() => {
        this.setState({
          bool: false
        })
      }}>
        ds
      </Modal>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
