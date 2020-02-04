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
    console.log(this.state.bool);
    return (
      <div className="wrap">
        <div className="wrap-inner-1">
          <button
            onClick={() => {
              this.setState({
                bool: true
              });
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
            opened={this.state.bool}
            onHide={() => {
              this.setState({
                bool: false
              });
            }}
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
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
