import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import stringifyError from 'stringify-error-message';

import * as deps from '../deps';
import * as actions from '../actions';

export function* setIconSiteSaga(action) {
  try {
    const { siteId, fileId } = action;
    yield deps.sagaHelpers.waitForConnectionEstablished();
    yield call(deps.libs.setSiteIcon, { _id: siteId, fileId });
  } catch (error) {
    yield put(actions.uploadError(stringifyError(error)));
  }
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

export function* setIconSiteSagaWatcher() {
  yield* takeEvery(deps.types.DEFAULT_SETTINGS_NEEDED, initPublishNativeSettings);
}
