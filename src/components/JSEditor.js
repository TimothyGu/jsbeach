import React from 'react';

import ThemedEditor from '../containers/ThemedEditor.js';

import 'codemirror/mode/javascript/javascript.js';

function JSEditor(props) {
  return <ThemedEditor {...props} />;
}

JSEditor.defaultProps = {
  mode: 'javascript'
};

export default JSEditor;
