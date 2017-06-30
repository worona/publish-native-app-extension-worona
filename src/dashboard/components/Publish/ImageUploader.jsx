import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import styles from './style.css';

import * as actions from '../../actions';
import * as selectors from '../../selectors';
import * as deps from '../../deps';
//
// class ImageUploaderClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { progress: 0 };
//     this.onUploadProgress = this.onUploadProgress.bind(this);
//     this.style = { cursor: 'pointer', padding: '10px' };
//     this.activeStyle = { backgroundColor: '#fff9cd' };
//     this.ProgressComponent = this.ProgressComponent.bind(this);
//   }
//
//   onUploadProgress(percent) {
//     this.setState({ progress: percent });
//   }
//
//   ProgressComponent() {
//     return (
//       <div className={styles.progress}>
//         <progress className="progress is-primary" value={this.state.progress} max="100" />
//       </div>
//     );
//   }
//
//   render() {
//     switch (this.props.status) {
//       case 'error':
//         this.style.backgroundColor = '#ffcdcd';
//         this.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2),0 0 0 1px #c34949';
//         break;
//       case 'succeed':
//         this.style.backgroundColor = '#cdffd8';
//         this.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2),0 0 0 1px #49c359';
//         break;
//       case 'uploading':
//         this.style.backgroundColor = '#fff9cd';
//         this.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2)';
//         break;
//       default:
//         this.style.backgroundColor = '#f5f5f5';
//         this.style.boxShadow = 'inset 0 0 10px rgba(0,0,0,0.2)';
//         break;
//     }
//
//     const uploaderProps = {
//       style: this.style,
//       activeStyle: this.activeStyle,
//       server: 'http://localhost:4500',
//       signingUrl: '/api/v1/s3/sign',
//       signingUrlQueryParams: { siteId: this.props.siteId, imgType: 'icon' },
//       accept: 'image/*',
//       multiple: false,
//       signingUrlHeaders: { additional: 'Access-Control-Allow-Origin' },
//       progressComponent: this.ProgressComponent,
//     };
//
//     const Icon = deps.elements.Icon;
//     const isUploading = this.props.status === 'uploading';
//
//     return (
//       <div>
//         <label className="label" htmlFor="uploadIcon">Icon</label>
//         <p className="control" />
//         <DropzoneS3Uploader
//           onFinish={this.props.handleFinishedUpload}
//           onError={this.props.handleUploadError}
//           onProgress={this.onUploadProgress}
//           preprocess={this.props.handleUploadStart}
//           hideErrorMessage
//           {...uploaderProps}
//           className="card"
//         >
//         </DropzoneS3Uploader>
//       </div>
//     );
//   }
// }

const ImageUploader = ({
  siteId,
  status,
  isUploading,
  errorMessage,
  handleDrop,
}) => {
  const Icon = deps.elements.Icon;

  return (
    <div>
      <Dropzone
        className={`${styles.dropzone} ${styles[status]}`}
        onDrop={file => {
          handleDrop(siteId, file[0]);
        }}
      >
        <div className={`card-content ${isUploading && styles.uploading}`}>
          <div className="content has-text-centered">
            <button
              id="uploadIcon"
              className={`button is-medium is-outlined ${isUploading && 'is-loading'}`}
              style={{ marginTop: '10px' }}
              type="button"
            >
              <Icon small code="cloud-upload" />
              <span>&nbsp;Browse files</span>
            </button>
            <br />
            <br />
            {!isUploading ? <span>Drag your icon here or select a file</span> : null}
          </div>
        </div>
      </Dropzone>
      <span className="help is-danger">
        {errorMessage}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  siteId: deps.selectors.getSelectedSiteId(state),
  status: selectors.getImageUploaderStatus(state),
  isUploading: selectors.getImageUploaderStatus(state) === 'uploading',
  errorMessage: selectors.getImageUploaderError(state),
});

const mapDispatchToProps = dispatch => ({
  handleDrop(siteId, fileName) {
    dispatch(actions.uploadRequested(siteId, fileName));
  },
});

ImageUploader.propTypes = {
  siteId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isUploading: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleDrop: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
