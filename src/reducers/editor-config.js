import { CHANGE_EDITOR_CONFIG } from '../action-types.js';

const defaultEditorConfig = Object.freeze({
  indentUnit: 2,
  tabSize: 2,
  indentWithTabs: false,
  theme: 'default'
});
function editorConfig(state = defaultEditorConfig, { type, payload }) {
  switch (type) {
    case CHANGE_EDITOR_CONFIG:
      return {
        ...state,
        ...payload
      }
      break;
  }
  return state;
}

export default editorConfig;
