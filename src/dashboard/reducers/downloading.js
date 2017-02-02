import * as types from '../types';

export default (state = false, action) => {
  switch (action.type) {
    case types.PUBLISH_SITE_REQUESTED:
      return true;
    case types.PUBLISH_SITE_SUCCEED:
    case types.PUBLISH_SITE_FAILED:
      return false;
    default:
      return state;
  }
};
