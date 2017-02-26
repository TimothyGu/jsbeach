import React from 'react';

import ThemedEditor from '../containers/ThemedEditor.js';

import 'codemirror/mode/htmlmixed/htmlmixed.js';

function HTMLEditor(props) {
  return <ThemedEditor {...props} />;
}

HTMLEditor.defaultProps = {
  mode: 'htmlmixed'
};

export default HTMLEditor;
