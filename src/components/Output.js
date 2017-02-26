import React from 'react';

import { files } from '../action-types.js';

const { HTML, CSS, JS } = files;

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.innerWindow = null;
    this.styleEl = null;
    this.scriptEl = null;

    this.attachRef = iframe => this.innerWindow = iframe.contentWindow;
    this.update = (prevProps = {}) => {
      const { document } = this.innerWindow;

      // only do a full write if HTML or JS changes
      if (prevProps[HTML] !== this.props[HTML] ||
          prevProps[JS] !== this.props[JS]) {
        document.open();
        document.write(this.props[HTML]);
        this.styleEl = document.createElement('style');
        document.head.appendChild(this.styleEl);
        this.scriptEl = document.createElement('script');
        document.body.appendChild(this.scriptEl);
      }

      this.styleEl.textContent = this.props[CSS];
      this.scriptEl.textContent = this.props[JS];
    };
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    this.update(prevProps);
  }

  render() {
    return <iframe
      sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"
      frameBorder="0"
      ref={this.attachRef}
    />;
  }
}

export default Output;
