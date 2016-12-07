import * as types from '../types';

export default (state = false, action) => {
  if (action.type === types.PUBLISH_SITE_REQUESTED) return true;
  else if (action.type === types.PUBLISH_SITE_SUCCEED) return false;
  return state;
};
