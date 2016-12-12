import * as deps from '../deps';

export default (state = false, action) => {
  if (action.type === deps.types.SAVE_SETTINGS_REQUESTED) return true;
  else if (action.type === deps.types.SAVE_SETTINGS_SUCCEED) return false;
  return state;
};
