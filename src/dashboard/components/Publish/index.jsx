import React from 'react';
import { connect } from 'react-redux';

import * as deps from '../../deps';
import ImageUploader from './ImageUploader';
import DownloadButton from './DownloadButton';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import questions from './questions';
import styles from './style.css';

const Publish = ({ siteId }) => (
  <div>
    <div className="column is-12-tablet is-9-desktop">
      <div id="EnterNameIcon">
        <h1 className="title">1. Enter your app name and icon</h1>
        <div className="subtitle">
          Enter a name and icon for your mobile app and let users easily identify it amongst other apps.
        </div>
        <div className="columns">
          <div className="column is-4">
            <label className="label">App name</label>
            <p className="control">
              <input className="input is-medium" type="text" placeholder="App name" value="Site Name" />
            </p>
            <span className="help">
              We recommend keeping your app name to around <strong>12 characters</strong> or less.
                Long names may be truncated, which means users will not see all the characters on their phones or tablets.
            </span>
          </div>
          <div className="column is-4 is-offset-1">
            <label className="label">Icon</label>
            <p className="control">
              <button className="button is-medium is-outlined">
                <span className="icon is-small"><i className="fa fa-cloud-upload"></i></span>
                <span>upload</span>
              </button>
              <span className="help">
                This shall be a square image with at least <strong>1024x1024px</strong> resolution.
                <br />
                Try using your logo, or a unique shape or symbol to make your icon easily recognizable.
              </span>
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div id="Preview">
        <h1 className="title">2. Preview</h1>
        <div className="subtitle">
          See what your icon and splash screen will look like before publishing.
        </div>
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <br />
            <img className={styles.splash} src="./worona-splash.png" alt="" />
            <br /><br />
            <span className="help">
              <strong>Splash Screen</strong>
            </span>
            <span className="help">
              This is the first image that is seen when your app is opened.
            </span>
          </div>
          <div className="column is-4 is-offset-1 has-text-centered" style={{ marginTop: '173px' }}>
            <br />
            <img src="./worona-icon.png" style={{ width: '128px' }} alt="" />
            <br />
            <span className="help"><strong>App Icon</strong></span>
          </div>
        </div>
        <hr />
      </div>
      <div id="Publish">
        <h1 className="title">3. Publish</h1>
        <div className="subtitle">
          Here you can choose whether you want to publish your app by yourself, or if you prefer us to do the work for you.
        </div>
        <br />
        <div className="columns">
          <div className="column is-6">
            <div className={`card is-fullwidth ${styles.DIYPublish}`}>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <br />
                    <p className="title is-4 has-text-centered">
                      Do it yourself </p>
                    <p className="subtitle is-6 has-text-centered" style={{ paddingTop: '10px' }}>A solution for developers</p>
                  </div>
                </div>
                <hr />
                <div className="content has-text-centered">
                  <deps.elements.Icon code="exclamation-circle" color="#bdc3c7" />
                    &nbsp;Google Developer Account required - <strong>$35</strong>
                  <br /><br />
                  <deps.elements.Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;Apple Developer Account required - <strong>$99/yr</strong>
                  <br /><br />
                  <deps.elements.Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;Compile the app source code using <a href="https://build.phonegap.com" target="_blank">Phonegap Build</a>.
                  <br /><br />
                  <deps.elements.Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;You need a Mac computer to upload the iOS app to the Apple App Store.
                  <br />
                </div>
                <hr />
                <div className="has-text-centered">
                  <a className="button is-large is-outlined" style={{ color: '#7f8c8d' }}>
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                  <span className="help" style={{ marginTop: '15px' }}>This may take a while, please don't refresh the page.</span>
                </div>
                <br />
              </div>
            </div>
            <br />
            <div className="content">
              <blockquote>
                After downloading your .zip file above, check out our <a href="https://docs.worona.org">Help Documentation</a>.<br />
              It will guide you through the next steps.
              </blockquote>
            </div>
          </div>
          <div className="column is-5">
            <div className={`card is-fullwidth ${styles.woronaPublish}`}>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <br />
                    <p className="title is-4 has-text-centered">Worona Publish </p><p className="subtitle is-6 has-text-centered" style={{ paddingTop: '10px' }}>
                      We take care of everything
                    </p>
                  </div>
                </div>
                <hr />
                <div className="content has-text-centered">
                  <deps.elements.Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;Premium support <br /><br />
                  <deps.elements.Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;Your app published in 7 days <br /><br />
                  <deps.elements.Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;No developer accounts required <br /><br />
                  <deps.elements.Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;290€&nbsp;one time payment <br />
                </div>
                <hr />
                <div className="has-text-centered">
                  <a className="button is-large is-success" style={{ backgroundColor: '#27ae60' }}>
                    <deps.elements.Icon code="check" />
                    <span>Get it now</span>
                  </a>
                  <span className="help" style={{ marginTop: '15px' }}>
                    Questions or doubts? <a href="https://www.worona.org/get-help" target="_blank">Contact us</a> any time.
                  </span>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuestionsAndAnswers questions={questions} />
    </div>
    <ImageUploader siteId={siteId} />
    <DownloadButton siteId={siteId} />
  </div>
);

const mapStateToProps = (state) => ({
  siteId: deps.selectors.getSelectedSiteId(state),
});

Publish.propTypes = {
  siteId: React.PropTypes.string,
};

export default connect(mapStateToProps)(Publish);
