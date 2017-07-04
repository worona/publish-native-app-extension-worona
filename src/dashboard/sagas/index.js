import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { checkImageAvailabilitySagaWatcher } from './checkImageAvailability';
import { uploadImageSagaWatcher } from './uploadImage';
import { setDefaultSettingsSagaWatcher, setIconSrcSagaWatcher } from './settings';

export default function* publishNativeSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setDefaultSettingsSagaWatcher),
    fork(uploadImageSagaWatcher),
    fork(setIconSrcSagaWatcher),
    fork(checkImageAvailabilitySagaWatcher),
  ];
}
