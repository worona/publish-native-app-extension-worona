import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { setDefaultSettingsSagaWatcher, setIconSrcSagaWatcher } from './settings';

export default function* publishNativeSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setDefaultSettingsSagaWatcher),
    fork(setIconSrcSagaWatcher),
  ];
}
