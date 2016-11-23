import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { setIconSiteSagaWatcher } from './setIconSite';

export default function* siteSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setIconSiteSagaWatcher),
  ];
}
