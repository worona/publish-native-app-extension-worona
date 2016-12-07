import React from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import cn from 'classnames';

import styles from './style.css';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import * as deps from '../../deps';

class ImageUploaderClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
    this.onUploadProgress = this.onUploadProgress.bind(this);
  }

  onUploadProgress(percent) {
    this.setState({ progress: percent });
  }

  render() {
    const style = {
      cursor: 'pointer',
      padding: '10px',
    };
    switch (this.props.status) {
      case 'error': style.backgroundColor = '#ffcdcd'; style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2),0 0 0 1px #c34949'; break;
      case 'succeed': style.backgroundColor = '#cdffd8'; style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2),0 0 0 1px #49c359'; break;
      case 'uploading': style.backgroundColor = '#fff9cd'; style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2)'; break;
      default: style.backgroundColor = '#f5f5f5'; style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2)'; break;
    }

    const activeStyle = {
      backgroundColor: '#fff9cd',
    };

    const uploaderProps = {
      style,
      activeStyle,
      server: 'https://backend.worona.io',
      signingUrl: '/api/v1/s3/sign',
      signingUrlQueryParams: { siteId: this.props.siteId, imgType: 'icon' },
      accept: 'image/*',
      multiple: false,
      signingUrlHeaders: { additional: 'Access-Control-Allow-Origin' },
      progressComponent: () => (
        <div className={styles.progress}>
          <progress className="progress is-primary" value={this.state.progress} max="100" />
        </div>
      ),
    };
    const Icon = deps.elements.Icon;
    const isUploading = this.props.status === 'uploading';
    return (
      <div>
        <label className="label" htmlFor="uploadIcon">Icon</label>
        <p className="control" />
        <DropzoneS3Uploader
          onFinish={this.props.handleFinishedUpload}
          onError={this.props.handleUploadError}
          onProgress={this.onUploadProgress}
          preprocess={this.props.handleUploadStart}
          hideErrorMessage
          {...uploaderProps}
          className="card"
        >
          <div
            className={cn(
              'card-content',
              { [styles.uploading]: isUploading }
            )}
          >
            <div className="content has-text-centered">
              <button
                id="uploadIcon"
                className={cn(
                  'button', 'is-medium', 'is-outlined',
                  { 'is-loading': isUploading }
                )}
                style={{ marginTop: '10px' }}
              >
                <Icon small code="cloud-upload" />
                <span>&nbsp;Browse files</span>
              </button>
              <br /><br />
              {(!isUploading) ? (<span>Drag your icon here or select a file</span>) : null}
            </div>
          </div>
        </DropzoneS3Uploader>
        <span className="help is-danger">{this.props.errorMessage}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  siteId: deps.selectors.getSelectedSiteId(state),
  status: selectors.getImageUploaderStatus(state),
  errorMessage: selectors.getImageUploaderError(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleFinishedUpload: (signResult) => dispatch(
    actions.uploadSucceed(signResult.filename, ownProps.siteId)
  ),
  handleUploadStart: (file, next) => {
    dispatch(actions.uploadRequested(ownProps.siteId));
    next(file);
  },
  handleUploadError: (message) => dispatch(actions.uploadError(message)),
});

ImageUploaderClass.propTypes = {
  handleFinishedUpload: React.PropTypes.func.isRequired,
  handleUploadStart: React.PropTypes.func.isRequired,
  handleUploadError: React.PropTypes.func.isRequired,
  siteId: React.PropTypes.string,
  status: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploaderClass);
