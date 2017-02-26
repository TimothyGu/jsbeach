import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';

import { files } from '../action-types.js';
import connectEditor from '../connect-editor.js';
import HTMLEditor from '../components/HTMLEditor.js';
import CSSEditor from '../components/CSSEditor.js';
import JSEditor from '../components/JSEditor.js';
import ConnectedOutput from '../containers/ConnectedOutput.js';

const { HTML, CSS, JS } = files;

const ConnectedCSSEditor = connectEditor(CSSEditor);
const ConnectedJSEditor = connectEditor(JSEditor);
const ConnectedHTMLEditor = connectEditor(HTMLEditor);

function CodeArea(props) {
  return <ReflexContainer orientation="vertical">
    <ReflexElement>
      <ConnectedHTMLEditor file={HTML} />
    </ReflexElement>
    <ReflexSplitter propagate={true} />
    <ReflexElement>
      <ConnectedCSSEditor file={CSS} />
    </ReflexElement>
    <ReflexSplitter propagate={true} />
    <ReflexElement>
      <ConnectedJSEditor file={JS} />
    </ReflexElement>
    <ReflexSplitter propagate={true} />
    <ReflexElement>
      <ConnectedOutput />
    </ReflexElement>
  </ReflexContainer>;
}

export default CodeArea;
