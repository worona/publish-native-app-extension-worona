import request from 'superagent';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { UPLOAD_REQUESTED } from '../types';
import { uploadSucceed, uploadError } from '../actions';

function* uploadLogo(action) {
  const { siteId, file } = action;
  // const queryString = `siteId=${siteId}&imgType=icon&objectName=${file.name}`;

  try {
    const url = yield call(
      request,
      'get',
      'http://localhost:4500/api/v1/s3/sign'

      // [request, 'query'],
      // { siteId, imgType: 'icon', objectName: file.name }
    );

    console.log('url:', url.text);
    // console.log('asking for something');
    // const something = yield call(request, get] 'POST', url.text, file);
    // console.log('waiting for something');

    if (something) {
      console.log(something);
      yield put(uploadSucceed(siteId, file.name));
    } else {
      throw Error('Oops! Something went wrong while uploading your file to our server.');
    }
  } catch (error) {
    console.log('Catchy:', error);

    yield put(uploadError(error));
  }
}

export function* uploadLogoSagaWatcher() {
  yield takeLatest(UPLOAD_REQUESTED, uploadLogo);
}
