import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as deps from '../../deps';

const DownloadButton = ({ requestPublishSite, siteId, loading }) => {
  const Button = deps.elements.Button;
  const Icon = deps.elements.Icon;
  return (
    <Button
      onClick={requestPublishSite}
      style={{ color: '#7f8c8d' }}
      size="large"
      outlined
      loading={loading}
    >
      <Icon code="download" />
      <span>Download</span>
    </Button>
  );
};

DownloadButton.propTypes = {
  requestPublishSite: React.PropTypes.func.isRequired,
  siteId: React.PropTypes.string,
  loading: React.PropTypes.bool,
};

const mapStateToDownloadButtonProps = (state) => ({
  loading: state.publishNative.Downloading,
});

const mapDispatchToDownloadButtonProps = (dispatch, ownProps) => ({
  requestPublishSite: () => dispatch(actions.publishSiteRequested(ownProps.siteId)),
});

export default connect(mapStateToDownloadButtonProps, mapDispatchToDownloadButtonProps)(DownloadButton);
