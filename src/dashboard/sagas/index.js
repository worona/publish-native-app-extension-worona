import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { setIconSiteSagaWatcher } from './settings';

export default function* publishNativeSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setIconSiteSagaWatcher),
  ];
}
