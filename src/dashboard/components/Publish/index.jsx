import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Imgix from 'react-imgix';

import * as deps from '../../deps';
import * as selectors from '../../selectors';
import ImageUploader from './ImageUploader';
import DownloadButton from './DownloadButton';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import cn from 'classnames';
import questions from './questions';
import styles from './style.css';
import defaultPixel from './1pxgreyimg.png';

let EnterNameAndIconForm = ({ handleSubmit, pristine, siteId, waiting }) => {
  const Button = deps.elements.Button;
  const Input = deps.elements.Input;
  return (
    <div>
      <form
        onSubmit={handleSubmit((values, dispatch) =>
          dispatch(deps.actions.saveSettingsRequested({ appName: values.name }, { siteId, name: 'publish-native-app-extension-worona' })))}
      >
        <div className="columns">
          <div className="column is-4">
            <Field
              name="name"
              label="App name"
              component={Input}
              type="text"
              size="medium"
            />
            <span className="help">
              We recommend keeping your app name to around <strong>12 characters</strong> or less.
                Long names may be truncated, which means users will not see all the characters on their phones or tablets.
            </span>
            <br />
            <Button
              color="primary"
              size="medium"
              disabled={pristine}
              type="submit"
              loading={waiting}
            >
              <span><strong>Save</strong></span>
            </Button>
          </div>
          <div className="column is-4 is-offset-1">
            <ImageUploader />
            <br />
            <span className="help">
              This shall be a square image with at least <strong>1024x1024px</strong> resolution.
              <br />
              Try using your logo, or a unique shape or symbol to make your icon easily recognizable.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

EnterNameAndIconForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  waiting: React.PropTypes.bool,
  siteId: React.PropTypes.string,
  pristine: React.PropTypes.bool,
  initialValues: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};

const mapStateToFormProps = state => ({
  initialValues: { name: selectors.getAppName(state) },
  waiting: state.settings.savingSettings === 'publish-native-app-extension-worona',
});

EnterNameAndIconForm = reduxForm({
  form: 'EnterNameAndIconForm',
  fields: ['name'],
  getFormState: state => state.theme.reduxForm,
  enableReinitialize: true,
})(EnterNameAndIconForm);
EnterNameAndIconForm = connect(mapStateToFormProps)(EnterNameAndIconForm);

const SeparateSteps = () => (
  <span>
    <br />
    <hr style={{ marginRight: '15%' }} />
    <br />
  </span>
);

const StepTitle = ({ step, title, subtitle }) => (
  <div>
    <div className={cn('subtitle', styles.step)} >
      Step {step} - {title}
    </div>
    <span>
      {subtitle}
    </span>
  </div>
);

StepTitle.propTypes = {
  step: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

const Publish = ({ iconSrc, siteId }) => {
  const Icon = deps.elements.Icon;
  let splashSrc;
  if (iconSrc === defaultPixel) splashSrc = defaultPixel;
  else splashSrc = `https://images.worona.io/splashes/watermark/worona-splash.png?markalign=center%2Cmiddle&markscale=45&markfit=max&mark=${iconSrc}`;
  return (
    <div>
      <div id="EnterNameIcon">
        <StepTitle
          step="1" title="Enter your app name and icon"
          subtitle="Enter a name and icon for your mobile app and let users easily
          identify it amongst other apps."
        />
        <br />
        <EnterNameAndIconForm siteId={siteId} />
      </div>
      <SeparateSteps />
      <div id="Preview">
        <StepTitle
          step="2"
          title="Preview the icon & splash screen"
          subtitle="Note that the icon & splash screen can't be edited after your
            app has been submitted to the stores."
        />
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <br />
            <div width="267px" height="462px">
              <img
                className={styles.splash}
                src={splashSrc}
                alt="SplahScreen preview for the app"
              />
            </div>
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
            <div width="128px" height="128px">
              <Imgix src={iconSrc} height="128" width="128" imgProps={{ alt: 'App icon preview' }} />
            </div>
            <br />
            <span className="help"><strong>App Icon</strong></span>
          </div>
        </div>
      </div>
      <SeparateSteps />
      <div id="Publish">
        <StepTitle
          step="3"
          title="Publish"
          subtitle="Here you can choose whether you want to publish your app by yourself,
          or if you prefer us to do the work for you."
        />
        <br /><br />
        <div className="columns">
          <div className="column is-5">
            <div className={`card is-fullwidth ${styles.DIYPublish}`} style={{ maxWidth: '400px', margin: '0 auto' }}>
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
                <div className="content">
                  <Icon code="exclamation-circle" color="#bdc3c7" />
                    &nbsp;Google Developer Account required - <strong>$25</strong>
                  <br /><br />
                  <Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;Apple Developer Account required - <strong>$99/yr</strong>
                  <br /><br />
                  <Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;Compile the app source code using <a href="https://build.phonegap.com" target="_blank" rel="noopener noreferrer">Phonegap Build</a>.
                  <br /><br />
                  <Icon code="exclamation-circle" color="#bdc3c7" />
                  &nbsp;You need a Mac computer to upload the iOS app to the Apple App Store.
                  <br />
                </div>
                <hr />
                <div className="has-text-centered">
                  <DownloadButton siteId={siteId} />
                  <span className="help" style={{ marginTop: '15px' }}>This may take a while, please don&apos;t refresh the page.</span>
                  <hr />
                  <span>
                    After downloading it, check our {' '}
                    <a href="https://docs.worona.org/dashboard/publish/do-it-yourself.html" target="_blank" rel="noopener noreferrer">Documentation</a>.
                  </span>
                </div>
              </div>
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
                <div className="content" style={{ marginLeft: '10%' }}>
                  <Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;Premium support <br /><br />
                  <Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;Your app published in 7 days <br /><br />
                  <Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;No developer accounts required <br /><br />
                  <Icon code="check" color="#27ae60" />
                  &nbsp;&nbsp;290€&nbsp;one time payment <br />
                </div>
                <hr />
                <div className="has-text-centered">
                  <a className="button is-large is-success" style={{ backgroundColor: '#27ae60' }}>
                    <Icon code="check" />
                    <span>Get it now</span>
                  </a>
                  <span className="help" style={{ marginTop: '15px' }}>
                    Questions or doubts?
                    &nbsp;<a href="https://www.worona.org/get-help" target="_blank" rel="noopener noreferrer">Contact us</a>
                  &nbsp;at any time.
                  </span>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <SeparateSteps />
        <QuestionsAndAnswers questions={questions} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  siteId: deps.selectors.getSelectedSiteId(state),
  iconSrc: selectors.getIconSrc(state),
});

Publish.propTypes = {
  siteId: React.PropTypes.string,
  iconSrc: React.PropTypes.string,
};

Publish.defaultProps = {
  iconSrc: defaultPixel,
};

export default connect(mapStateToProps)(Publish);
