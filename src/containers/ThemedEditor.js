import React from 'react';
import { connect } from 'react-redux'

import Editor from '../components/Editor.js';

const mapState = (state, ownProps) => {
  return {
    ...ownProps,
    ...state.editorConfig
  };
};

const ThemedEditor = connect(mapState)(Editor);

export default ThemedEditor;
