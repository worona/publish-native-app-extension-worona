import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { setIconSiteWatcher } from './setIconSite';

export default function* siteSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setIconSiteWatcher),
  ];
}
