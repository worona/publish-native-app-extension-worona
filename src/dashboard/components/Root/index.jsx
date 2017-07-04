import React from 'react';
import Publish from '../Publish';
import * as deps from '../../deps';

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer>
      <h1 className="title">Submit your app to App Store & Google Play</h1>
      <hr />
      <br />
      <Publish />
    </RootContainer>
  );
};
