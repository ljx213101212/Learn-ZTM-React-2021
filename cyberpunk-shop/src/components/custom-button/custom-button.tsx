import React, { FC, ReactElement } from 'react';
import './custom-buttom.styles.scss';

const CustomButton: FC<any> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}): ReactElement => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
