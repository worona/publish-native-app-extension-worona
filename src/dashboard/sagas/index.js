import { fork } from 'redux-saga/effects';
import { publishSiteWatcher } from './publishSite';
import { uploadImageSagaWatcher } from './checkImageAvailability';
import { setDefaultSettingsSagaWatcher, setIconSrcSagaWatcher } from './settings';

export default function* publishNativeSagas() {
  yield [
    fork(publishSiteWatcher),
    fork(setDefaultSettingsSagaWatcher),
    fork(setIconSrcSagaWatcher),
    fork(uploadImageSagaWatcher),
  ];
}
