import request from 'superagent';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { UPLOAD_REQUESTED } from '../types';
import { uploadSucceed, uploadError } from '../actions';

function* uploadImage(action) {
  try {
    const { siteId, file, fileId } = action;
    const fileName = `${fileId}_${file.name}`;
    const url = (yield request
      .get('https://backend.worona.io/api/v1/s3/sign')
      .query({ siteId, imgType: 'icon', objectName: fileName })).text;

    yield request.put(url).send(file);

    yield put(uploadSucceed(fileName, siteId));
  } catch (error) {
    yield put(uploadError(error));
  }
}

export function* uploadImageSagaWatcher() {
  yield takeLatest(UPLOAD_REQUESTED, uploadImage);
}
