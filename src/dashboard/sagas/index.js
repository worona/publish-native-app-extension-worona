import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { checkImageAvailabilitySagaWatcher } from './checkImageAvailability';
import { uploadLogoSagaWatcher } from './uploadLogo';
import { setDefaultSettingsSagaWatcher, setIconSrcSagaWatcher } from './settings';

export default function* publishNativeSagas() {
  console.log('inside root saga');
  yield [
    fork(publishSiteWatcher),
    fork(setDefaultSettingsSagaWatcher),
    fork(uploadLogoSagaWatcher),
    fork(setIconSrcSagaWatcher),
    fork(checkImageAvailabilitySagaWatcher),
  ];
}
