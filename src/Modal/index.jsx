import React, { Component } from 'react';
import './styles/styles.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      opened: props.opened || false,
      contentShow: false,
      className: props.className || '',
      maxWidth: props.maxWidth || 768,
      buttons: props.buttons || false,
      title: props.title || false,
      theme: props.theme || '',
      dark: props.dark || false,
      disabledClose: props.disabledClose || false,
      ignoredProps: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  componentDidMount() {
    this.state.opened && setTimeout(this.open, 0);
  }
  open() {
    this.props.beforeShow && this.props.beforeShow(this);
    clearTimeout(this.timeout);
    this.setState(
      {
        open: true,
        contentShow: true,
        ignoredProps: false,
      },
      () => {
        this.props.onShow && this.props.onShow(this);
      }
    );
  }
  close() {
    this.props.beforeHide && this.props.beforeHide(this);
    this.setState(
      {
        open: false,
        ignoredProps: true,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState(
            {
              contentShow: false,
              ignoredProps: false,
            },
            () => {
              this.props.onHide && this.props.onHide(this);
            }
          );
        }, 600);
      }
    );
  }
  static getDerivedStateFromProps(props, state) {
    if (state.ignoredProps) return null;
    let newState = {};
    if (props.opened !== state.opened) {
      newState.opened = props.opened;
    }
    if (props.maxWidth !== state.maxWidth) {
      newState.maxWidth = props.maxWidth;
    }
    if (props.buttons !== state.buttons) {
      newState.buttons = props.buttons;
    }
    if (props.title !== state.title) {
      newState.title = props.title;
    }
    if (props.theme !== state.theme) {
      newState.theme = props.theme;
    }
    if (props.dark !== state.dark) {
      newState.dark = props.dark;
    }
    if (props.disabledClose !== state.disabledClose) {
      newState.disabledClose = props.disabledClose;
    }
    return Object.keys(newState).length ? newState : null;
  }

  beforeRender() {
    setTimeout(() => {
      let { open, opened, ignoredProps } = this.state;
      if (!ignoredProps && open !== opened) {
        opened ? this.open() : this.close();
      }
    }, 0);
  }

  render() {
    this.beforeRender();
    let {
      open,
      contentShow,
      className,
      maxWidth,
      buttons,
      title,
      theme,
      dark,
      disabledClose,
    } = this.state;
    maxWidth = parseInt(maxWidth);
    return (
      <div
        className={[
          'modal',
          'modal__' + (open ? 'open' : 'close'),
          dark ? 'modal__dark' : '',
          theme ? 'modal__' + theme : '',
          this.props.centered ? 'modal__centered' : '',
          !title ? 'modal__no-title' : '',
          className,
        ].join(' ')}
        onClick={!disabledClose && this.close}
      >
        <div
          className="modal-content"
          style={{
            maxWidth: maxWidth + 'px',
          }}
        >
          <div
            className="modal-content-inner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              {!disabledClose && (
                <button className="modal-close" onClick={this.close}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z" />
                  </svg>
                </button>
              )}
            </div>
            <div className="modal-children">
              {contentShow && this.props.children}
            </div>
            {buttons && (
              <div className="modal-buttons">
                {buttons.map((button, index) => {
                  if (button) button.tag = button.tag || 'button';
                  return !button || button.hidden ? null : (
                    <div key={index} className="modal-buttons-col">
                      <button.tag
                        className={[
                          'modal-button',
                          button.type ? 'modal-button__' + button.type : '',
                        ].join(' ')}
                        disabled={button.disabled || false}
                        onClick={(e) => {
                          button.onClick && button.onClick(e, this);
                        }}
                        {...(button.attributes || {})}
                      >
                        {button.text}
                      </button.tag>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
