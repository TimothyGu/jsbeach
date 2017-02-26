import {
  files,
  UPDATE_CODE,
  CHANGE_EDITOR_CONFIG,
  TOGGLE_VISIBILITY,
  RESIZE
} from './action-types.js';

export function updateCode(file, val) {
  if (files[file] !== file)
    throw new Error(`Invalid file ${file}`);
  return {
    type: UPDATE_CODE,
    payload: val,
    meta: {
      file
    }
  };
}

export function changeEditorConfig(obj) {
  return {
    type: CHANGE_EDITOR_CONFIG,
    payload: obj
  };
}

export function toggleVisibility(file) {
  return {
    type: TOGGLE_VISIBILITY,
    payload: file
  };
}

export function resize() {
  return {
    type: RESIZE
  };
}
