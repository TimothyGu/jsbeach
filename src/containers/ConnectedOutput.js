import Output from '../components/Output.js';

import { connect } from 'react-redux'

const mapState = state => {
  return state.code;
};

export default connect(mapState)(Output);
