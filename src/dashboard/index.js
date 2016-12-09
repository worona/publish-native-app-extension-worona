import * as actions from './actions';
import * as deps from './deps';
import * as types from './types';
import * as reducers from './reducers';
import * as sagas from './sagas';
import * as components from './components';
import * as selectors from './selectors';

const locales = lang => require(`./locales/${lang}.json`);

export {
  actions,
  components,
  deps,
  locales,
  reducers,
  sagas,
  selectors,
  types,
};
