/* global window, FileReader, Image */
import request from 'superagent';
import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

import { UPLOAD_REQUESTED } from '../types';
import { uploadSucceed, uploadError, sizeWarning } from '../actions';

const checkSmall = file =>
  new Promise(resolve => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      const image = new Image();
      image.src = reader.result;

      image.addEventListener('load', () => {
        resolve(image.width < 1024 || image.height < 1024);
      });
    });

    reader.readAsDataURL(file);
  });

function* uploadImage(action) {
  try {
    const { siteId, file, fileId } = action;
    const fileName = `${fileId}_${file.name}`;
    const backend = window.location.host.startsWith('dashboard') ? 'backend' : 'prebackend';
    const url = (yield request
      .get(`https://${backend}.worona.io/api/v1/s3/sign`)
      .query({ siteId, imgType: 'icon', objectName: fileName })).text;

    if (!/image/.test(file.type)) throw new Error('File should be an image.');

    const isSmall = yield checkSmall(file);
    if (isSmall) yield put(sizeWarning());

    yield request.put(url).set('Content-Type', file.type).send(file);

    yield put(uploadSucceed(fileName, siteId));
  } catch (error) {
    yield put(uploadError(error));
  }
}

export function* uploadImageSagaWatcher() {
  yield takeLatest(UPLOAD_REQUESTED, uploadImage);
}
