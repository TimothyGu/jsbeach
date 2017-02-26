import { combineReducers } from 'redux';
import code from './code.js';
import editorConfig from './editor-config.js';

export default combineReducers({
  code,
  editorConfig
});
