import { combineReducers } from 'redux';
import stringifyError from 'stringify-error-message';
import * as types from '../types';
import * as deps from '../deps';

export const status = (state = '', action) => {
  switch (action.type) {
    case types.UPLOAD_REQUESTED:
      return 'uploading';
    case types.UPLOAD_SUCCEED:
      return 'succeed';
    case types.UPLOAD_ERROR:
      return 'error';
    case deps.types.ROUTER_DID_CHANGE:
      return '';
    default:
      return state;
  }
};

export const error = (state = '', action) => {
  switch (action.type) {
    case types.UPLOAD_ERROR:
      return stringifyError(action.message);
    case types.UPLOAD_REQUESTED:
    case deps.types.ROUTER_DID_CHANGE:
      return '';
    default:
      return state;
  }
};

export const size = (state = '', action) => {
  switch (action.type) {
    case types.SIZE_WARNING:
      return 'Icon uploaded succesfully, but image size should be equal or greater than 1024x1024 for better performance.';
    case types.UPLOAD_REQUESTED:
      return '';
    default:
      return state;
  }
};

export default () =>
  combineReducers({
    status,
    error,
    size,
  });
