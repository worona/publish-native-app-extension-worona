import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

import * as deps from '../deps';
import * as types from '../types';

export function* setIconSrcSaga(action) {
  const { siteId, fileId } = action;
  const name = 'publish-native-app-extension-worona';
  const woronaInfo = { siteId, name };
  yield deps.sagaHelpers.waitForConnectionEstablished();
  yield put(deps.actions.saveSettingsRequested({ iconSrc: `https://worona.imgix.net/sites/${siteId}/icon/${fileId}` }, woronaInfo));
}

export function* setIconSrcSagaWatcher() {
  yield* takeEvery(types.UPLOAD_SUCCEED, setIconSrcSaga);
}

export function* initPublishNativeSettings(action) {
  if (action.name !== 'publish-native-app-extension-worona') return;
  const { name, siteId } = action;
  yield deps.sagaHelpers.waitForConnectionEstablished();
  const site = yield select(deps.selectors.getSite(siteId));
  const appName = site.name;
  const iconSrc = 'https://worona.imgix.net/splashes/watermark/logo-1024.png';
  const defaultSettings = {
    appName,
    iconSrc,
  };
  const woronaInfo = { siteId, name };
  yield put(deps.actions.saveSettingsRequested(defaultSettings, woronaInfo));
}


export function* setDefaultSettingsSagaWatcher() {
  yield* takeEvery(deps.types.DEFAULT_SETTINGS_NEEDED, initPublishNativeSettings);
}
