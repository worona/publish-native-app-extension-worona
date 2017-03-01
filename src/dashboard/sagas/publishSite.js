import JSZip from 'jszip';
import FileSaver from 'file-saver';
import JSZipUtils from 'jszip-utils';
import semver from 'semver';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as deps from '../deps';
import * as types from '../types';
import * as actions from '../actions';
import * as selectors from '../selectors';
import generateConfigXML from '../templates/config.xml.js';
import generateImagesArray from '../templates/images.js';

export const requestFunc = url => new Promise((resolve, reject) => {
  JSZipUtils.getBinaryContent(url, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

function getAllImagesPromise(images) {
  const imageRequests = images.map(({ url }) => requestFunc(url));
  return Promise.all(imageRequests);
}

function generateAppId(rawUrl) {
  const noProtocolURI = new RegExp('http[s]?://');
  const noDoubleSlashesRegExp = new RegExp('/[/]+', 'g');
  let url = rawUrl.toLowerCase();
  url = url.replace(noProtocolURI, '');
  // remove http(s)://
  url = url.replace(noDoubleSlashesRegExp, '/');
  // site//something -> site/something
  if (url[url.length - 1] === '/') {
    // remove trailing slash/
    url = url.slice(0, -1);
  }
  const directories = url.split('/');
  const domains = directories.shift().split('.');
  domains.reverse();
  const appId = domains.concat(directories.concat(['app'])).join('.');
  return appId;
}

function createZipFile(
  { siteId, site, user, images, imagesData, indexHtml, appName, chcpJson, chcpManifest, version }
) {
  /* Creating the zip file */
  const zip = new JSZip();
  const www = zip.folder('www');

  /* Generate config.xml file */
  const configParams = {
    appId: generateAppId(site.url),
    appName,
    siteURL: site.url,
    userEmail: user.email,
    userName: user.name,
    siteId,
    version,
  };
  const xmlFile = generateConfigXML(configParams);
  www.file('config.xml', xmlFile);

  /* Generate files */
  www.file('index.html', indexHtml);
  www.file('chcp.json', chcpJson);
  www.file('chcp.manifest', chcpManifest);

  /* Platform icons and screens */
  images.forEach((item, index) => {
    www.file(`res/${item.type}/${item.platform}/${item.fileName}`, imagesData[index], {
      binary: true,
    });
  });
  www.file('res/.pgbomit', '');

  // Reduces the size of the packaged app removing unnecessary resources.
  return zip;
}

export function* publishSiteSaga({ siteId }) {
  try {
    const site = yield select(deps.selectors.getSite(siteId));
    if (site.id !== siteId)
      throw new Error('Trying to publish a site different than the current one.');
    const iconSrc = yield select(selectors.getIconSrc);
    const appName = yield select(selectors.getAppName);
    const lastVersion = yield select(selectors.getVersion);
    const currentMajorVersion = '1.0.0';
    const version = semver.lt(lastVersion, currentMajorVersion)
      ? currentMajorVersion
      : semver.inc(lastVersion, 'patch');
    const user = yield select(deps.selectors.getNameAndEmail);
    const images = generateImagesArray(iconSrc);
    yield put(actions.publishSiteStatusChanged('Downloading images...'));
    const imagesData = yield call(getAllImagesPromise, images);
    yield put(actions.publishSiteStatusChanged('Downloading files...'));
    const indexHtml = yield call(
      requestFunc,
      `https://cdn.worona.io/api/v1/chcp/site/${siteId}/index.html`
    );
    const chcpJson = yield call(
      requestFunc,
      `https://cdn.worona.io/api/v1/chcp/site/${siteId}/chcp.json`
    );
    const chcpManifest = yield call(
      requestFunc,
      `https://cdn.worona.io/api/v1/chcp/site/${siteId}/chcp.manifest`
    );
    yield put(actions.publishSiteStatusChanged('All images and index.html dowloaded!'));

    yield put(actions.publishSiteStatusChanged('Generating zip file...'));
    const zip = createZipFile({
      siteId,
      site,
      user,
      images,
      imagesData,
      indexHtml,
      appName,
      chcpJson,
      chcpManifest,
      version,
    });
    const content = yield zip.generateAsync({ type: 'blob' });
    yield put(actions.publishSiteStatusChanged('Zip generated!'));

    FileSaver.saveAs(content, `${appName}.zip`);
    yield put(actions.publishSiteStatusChanged('Zip downloaded!'));
    yield put(actions.publishSiteSucceed({ siteId, version }));
  } catch (error) {
    yield put(actions.publishSiteFailed(error));
  }
}

export function* increaseVersion({ siteId, version }) {
  yield put(
    deps.actions.saveSettingsRequested(
      { version },
      { siteId, name: 'publish-native-app-extension-worona' },
    )
  );
}

export function* publishSiteWatcher() {
  yield takeEvery(types.PUBLISH_SITE_REQUESTED, publishSiteSaga);
  yield takeEvery(types.PUBLISH_SITE_SUCCEED, increaseVersion);
}
