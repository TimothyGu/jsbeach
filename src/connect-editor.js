import { connect } from 'react-redux'

import { updateCode } from './actions.js';

const mapState = (state, ownProps) => {
  return {
    value: state.code[ownProps.file],
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    onChange(value) {
      dispatch(updateCode(ownProps.file, value));
    }
  };
};

export default connect(mapState, mapDispatch);
