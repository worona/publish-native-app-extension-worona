import { combineReducers } from 'redux';
import stringifyError from 'stringify-error-message';
import * as types from '../types';

export const imageUploaderStatus = (state = '', action) => {
  switch (action.type) {
    case types.UPLOAD_REQUESTED: return 'uploading';
    case types.UPLOAD_SUCCEED: return 'succeed';
    case types.UPLOAD_ERROR: return 'error';
    default:
      return '';
  }
};

export const imageUploaderError = (state = '', action) => {
  if (action.type === types.UPLOAD_ERROR) return stringifyError(action.message);
  return '';
};

export default combineReducers({
  imageUploaderStatus,
  imageUploaderError,
});
