import request from 'superagent';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { UPLOAD_REQUESTED } from '../types';
import { uploadSucceed, uploadError } from '../actions';

function* uploadLogo(action) {
  try {
    const { siteId, file } = action;
    const url = (yield request
      .get('http://localhost:4500/api/v1/s3/sign')
      .query({ siteId, imgType: 'icon', objectName: file.name })).text;

    yield request.put(url).send(file);

    yield put(uploadSucceed(file.name, siteId));
  } catch (error) {
    yield put(uploadError(error));
  }
}

export function* uploadLogoSagaWatcher() {
  yield takeLatest(UPLOAD_REQUESTED, uploadLogo);
}
