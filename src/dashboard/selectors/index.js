import * as deps from '../deps';

export const getImageUploaderStatus = state =>
state.publishNative.ImageUploader.imageUploaderStatus;
export const getImageUploaderError = state =>
state.publishNative.ImageUploader.imageUploaderError;
export const getAppName = state =>
  deps.selectorCreators.getSettingCreator('publish-native-app-extension-worona')('appName')(state);
export const getIconSrc = state =>
  deps.selectorCreators.getSettingCreator('publish-native-app-extension-worona')('iconSrc')(state);
