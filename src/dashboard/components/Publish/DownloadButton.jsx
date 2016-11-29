import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as deps from '../../deps';

const DownloadButton = ({ requestPublishSite, siteId }) => {
  const Button = deps.elements.Button;
  return (
    <Button onClick={requestPublishSite}> Publish Now </Button>
  );
};

DownloadButton.propTypes = {
  requestPublishSite: React.PropTypes.func.isRequired,
  siteId: React.PropTypes.string,
};

const mapDispatchToPublishButtonProps = (dispatch, ownProps) => ({
  requestPublishSite: () => dispatch(actions.publishSiteRequested(ownProps.siteId)),
});

export default connect(null, mapDispatchToPublishButtonProps)(DownloadButton);
