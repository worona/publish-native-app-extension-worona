import * as deps from '../deps';

export const getImageUploaderStatus = state => state.publishNative.imageUploader.status;
export const getImageUploaderError = state => state.publishNative.imageUploader.error;
export const getAppName = state =>
  deps.selectorCreators.getSetting('publishNative', 'appName')(state);
export const getIconSrc = state =>
  deps.selectorCreators.getSetting('publishNative', 'iconSrc')(state);
export const getVersion = state =>
  deps.selectorCreators.getSetting('publishNative', 'version')(state) || '1.0.0';
