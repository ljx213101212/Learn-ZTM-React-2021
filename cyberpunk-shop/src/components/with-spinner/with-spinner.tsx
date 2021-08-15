import React, { FC, ReactElement } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner =
  <P extends Record<string, any>>(
    WrappedComponent: React.ComponentType<P>
  ): React.FC<P> =>
  ({ isLoading, ...otherProps }) => {
    console.log(otherProps);
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...(otherProps as P)} />
    );
  };

export default WithSpinner;
