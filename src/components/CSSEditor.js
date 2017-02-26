import React from 'react';

import ThemedEditor from '../containers/ThemedEditor.js';

import 'codemirror/mode/css/css.js';

function CSSEditor(props) {
  return <ThemedEditor {...props} />;
}

CSSEditor.defaultProps = {
  mode: 'css'
};

export default CSSEditor;
