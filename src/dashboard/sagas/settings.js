import { takeEvery } from 'redux-saga';
import { put, select } from 'redux-saga/effects';

import * as deps from '../deps';
import * as types from '../types';

export function* setIconSrcSaga({ siteId, fileId }) {
  yield deps.sagaHelpers.waitForConnectionEstablished();
  yield put(
    deps.actions.saveSettingsRequested(
      { iconSrc: `https://worona.imgix.net/sites/${siteId}/icon/${fileId}` },
      { siteId, name: 'publish-native-app-extension-worona' }
    )
  );
}

export function* setIconSrcSagaWatcher() {
  yield* takeEvery(types.UPLOAD_AVAILABLE, setIconSrcSaga);
}

export function* initPublishNativeSettings({ name, siteId }) {
  yield deps.sagaHelpers.waitForConnectionEstablished();
  const site = yield select(deps.selectorCreators.getSite(siteId));
  yield put(
    deps.actions.saveSettingsRequested(
      {
        appName: site.name,
        iconSrc: 'https://worona.imgix.net/splashes/watermark/logo-1024.png',
        version: '1.0.0',
      },
      { siteId, name }
    )
  );
}

export function* setDefaultSettingsSagaWatcher() {
  yield* takeEvery(
    action =>
      action.type === deps.types.DEFAULT_SETTINGS_NEEDED &&
      action.name === 'publish-native-app-extension-worona',
    initPublishNativeSettings
  );
}
