import React from 'react';
import Publish from '../Publish';
import * as deps from '../../deps';

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer>
      <Publish />
    </RootContainer>
  );
};
