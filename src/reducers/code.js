import {
  UPDATE_CODE,
  files
} from '../action-types.js';
const { HTML, CSS, JS } = files;

const defaultCode = Object.freeze({
  [HTML]: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JSBeach</title>
</head>
<body>
  <p>Hello world!</p>
</body>
</html>`,
  [CSS]: '',
  [JS]: ''
});
function code(state = defaultCode, { type, payload, meta }) {
  switch (type) {
    case UPDATE_CODE:
      return {
        ...state,
        [meta.file]: payload
      }
      break;
  }
  return state;
}

export default code;
