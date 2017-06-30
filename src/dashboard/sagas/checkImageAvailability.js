import request from 'superagent';
import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';

function* checkImageAvailability(action) {
  const { fileId, siteId } = action;
  const url = `https://worona.imgix.net/sites/${siteId}/icon/${fileId}`;
  let res;
  do {
    res = yield request.head(url);
  } while (res.status !== 200);
  yield put(actions.uploadAvailable(fileId, siteId));
}

export function* uploadImageSagaWatcher() {
  yield takeEvery(types.UPLOAD_SUCCEED, checkImageAvailability);
}
