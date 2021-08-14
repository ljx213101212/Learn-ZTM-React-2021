import React, { FC, ReactElement } from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton: FC<any> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}): ReactElement => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
