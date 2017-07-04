import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import styles from './style.css';

import * as actions from '../../actions';
import * as selectors from '../../selectors';
import * as deps from '../../deps';

const ImageUploader = ({ siteId, status, isUploading, errorMessage, sizeMessage, handleDrop }) => {
  const Icon = deps.elements.Icon;

  return (
    <div>
      <Dropzone
        className={`${styles.dropzone} ${styles[status]}`}
        onDrop={file => {
          handleDrop(siteId, file[0], Date.now());
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
      <span className="help is-danger">
        {sizeMessage}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  siteId: deps.selectors.getSelectedSiteId(state),
  status: selectors.getImageUploaderStatus(state),
  isUploading: selectors.getImageUploaderStatus(state) === 'uploading',
  errorMessage: selectors.getImageUploaderError(state),
  sizeMessage: selectors.getImageUploaderSize(state),
});

const mapDispatchToProps = dispatch => ({
  handleDrop(siteId, file, fileId) {
    dispatch(actions.uploadRequested(siteId, file, fileId));
  },
});

ImageUploader.propTypes = {
  siteId: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isUploading: PropTypes.bool,
  errorMessage: PropTypes.string,
  sizeMessage: PropTypes.string,
  handleDrop: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);
