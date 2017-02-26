import React from 'react';
import CodeMirror from 'react-code-mirror';
import 'codemirror/lib/codemirror.css';

function betterTab(cm) {
  if (cm.somethingSelected()) {
    cm.indentSelection('add');
  } else {
    cm.execCommand(
      cm.getOption('indentWithTabs') ? 'insertTab' : 'insertSoftTab'
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.attachRef = comp => this.editor = comp;
    this.onChange = ({ target: { value } }) => {
      if (this.props.onChange)
        return this.props.onChange(value);
    };
    this.refresh = () => this.cm && this.cm.refresh();
    this.setSize = (w, h) => this.cm && this.cm.refresh(w, h);

    this.cm = null;
    this.editor = null;
  }

  componentDidMount() {
    this.cm = this.editor.editor;
  }

  render() {
    return <CodeMirror
      {...this.props}
      extraKeys={{
        ...this.props.extraKeys,
        Tab: betterTab
      }}
      viewportMargin={100}
      onChange={this.onChange}
      ref={this.attachRef}
    />;
  }
}

export default Editor;
