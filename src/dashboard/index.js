import * as actions from './actions';
import * as types from './types';
import * as reducers from './reducers';
import * as sagas from './sagas';
import * as components from './components';

const locales = lang => require(`./locales/${lang}.json`);

export {
  actions,
  components,
  locales,
  reducers,
  sagas,
  types,
};
