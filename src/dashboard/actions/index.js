import stringifyError from 'stringify-error-message';
import * as types from '../types';
// Edit Site actions:
export const publishSiteRequested = siteId =>
  ({ type: types.PUBLISH_SITE_REQUESTED, siteId });
export const publishSiteStatusChanged = status =>
  ({ type: types.PUBLISH_SITE_STATUS_CHANGED, status });
export const publishSiteSucceed = siteId =>
  ({ type: types.PUBLISH_SITE_SUCCEED, siteId });
export const publishSiteFailed = errorObj =>
  ({ type: types.PUBLISH_SITE_FAILED, error: stringifyError(errorObj) });
export const uploadSucceed = (fileId, siteId) => ({ type: types.UPLOAD_SUCCEED, fileId, siteId });
export const uploadError = (status) => ({ type: types.UPLOAD_ERROR, status });