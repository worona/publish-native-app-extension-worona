import { combineReducers } from 'redux';
import stringifyError from 'stringify-error-message';
import * as types from '../types';
import * as deps from '../deps';

export const imageUploaderStatus = (state = '', action) => {
  switch (action.type) {
    case types.UPLOAD_REQUESTED: return 'uploading';
    case types.UPLOAD_SUCCEED: return 'succeed';
    case types.UPLOAD_ERROR: return 'error';
    case deps.types.ROUTER_DID_CHANGE: return '';
    default:
      return state;
  }
};

export const imageUploaderError = (state = '', action) => {
  switch (action.type) {
    case types.UPLOAD_ERROR:
      return stringifyError(action.message);
    case types.UPLOAD_REQUESTED: case deps.types.ROUTER_DID_CHANGE:
      return '';
    default:
      return state;
  }
};

export default () => combineReducers({
  imageUploaderStatus,
  imageUploaderError,
});
