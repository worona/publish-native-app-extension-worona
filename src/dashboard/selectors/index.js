import * as deps from '../deps';

export const getImageUploaderStatus = state =>
  state.publishNative.ImageUploader.imageUploaderStatus;
export const getImageUploaderError = state => state.publishNative.ImageUploader.imageUploaderError;
export const getAppName = state =>
  deps.selectorCreators.getSetting('publishNative', 'appName')(state);
export const getIconSrc = state =>
  deps.selectorCreators.getSetting('publishNative', 'iconSrc')(state);
