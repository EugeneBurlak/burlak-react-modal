import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../package';

class App extends Component {
  render() {
    return (
      <Modal opened={true}>
        ds
      </Modal>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
