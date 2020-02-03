import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../package';
import './styles.scss';
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Title ' + +new Date(),
      time: +new Date()
    };
  }
  render() {
    return (
      <div className="wrap">
        <div className="wrap-inner-1">
          <button
            onClick={() => {
              this.refs.modal1.open();
            }}
          >
            open1
          </button>
          <Modal
            ref="modal1"
            dark
            centered
            title={this.state.title}
            maxWidth={400}
            buttons={[
              {
                text: 'Send',
                type: 'success',
                onClick: () => {
                  alert('send');
                }
              },
              {
                text: 'Cancel',
                type: 'error',
                onClick: () => {
                  alert('cancel');
                }
              }
            ]}
          >
            32
          </Modal>
          <span>23131</span>
        </div>
        <div className="wrap-inner-2">
          <button
            onClick={() => {
              this.refs.modal2.open();
            }}
          >
            open2
          </button>
          <Modal ref="modal2" maxWidth={400}>
            2
          </Modal>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
