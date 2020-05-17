import React from 'react';
import ReactDOM from 'react-dom';

class Model extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div
        onClick={this.props.onClick}
        className='ui dimmer modals visible active'
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className='ui standard modal visible active'
        >
          <div className='header'>{this.props.header}</div>
          <div className='content'>
            <p>{this.props.message}</p>
          </div>
          <div className='actions'>{this.props.actions}</div>
        </div>
      </div>,
      document.getElementById('model')
    );
  }
}

export default Model;
