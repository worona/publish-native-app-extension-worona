import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as deps from '../../deps';
import ImageUploader from './ImageUploader';

let PublishButton = ({ requestPublishSite, siteId }) => {
  const Button = deps.components.Button;
  return (
    <Button onClick={requestPublishSite}> Publish Now </Button>
  );
};

PublishButton.propTypes = {
  requestPublishSite: React.PropTypes.func.isRequired,
  siteId: React.PropTypes.string,
};

const mapDispatchToPublishButtonProps = (dispatch, ownProps) => ({
  requestPublishSite: () => dispatch(actions.publishSiteRequested(ownProps.siteId)),
});

PublishButton = connect(null, mapDispatchToPublishButtonProps)(PublishButton);

const Publish = ({ siteId }) => (
    <div>
      <ImageUploader siteId={siteId} />
      <PublishButton siteId={siteId} />
    </div>
);

const mapStateToProps = (state) => ({
  siteId: deps.selectors.getSelectedSiteId(state),
});

Publish.propTypes = {
  siteId: React.PropTypes.string,
};

export default connect(mapStateToProps)(Publish);
