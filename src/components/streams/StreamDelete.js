import React from 'react';
import Model from '../Model';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  modelMessage = 'Are you sure you want to delete this Stream?';

  onClickOutside = () => {
    history.push('/');
  };
  onDeleteButtonClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderButtons = () => {
    return (
      <React.Fragment>
        <button
          onClick={this.onDeleteButtonClick}
          className='ui approve button negative'
        >
          Delete
        </button>
        <Link to={`/`} className='ui cancel button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  render() {
    if (!this.props.stream) {
      return null;
    }
    return (
      <div>
        <Model
          header='Delete Stream'
          message={this.modelMessage}
          actions={this.renderButtons()}
          onClick={this.onClickOutside}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
