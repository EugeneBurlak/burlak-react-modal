import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../package';
import './styles.scss';
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Title ' + +new Date(),
      time: +new Date(),
      bool: true
    };
  }
  componentDidMount(){
    setInterval(() => {
      this.forceUpdate();
    }, 100)
  }
  render() {
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
                text: 'Send '+Math.random().toFixed(2),
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
            {Math.random()}
          </Modal>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
