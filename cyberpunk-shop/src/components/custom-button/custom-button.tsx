import React, { FC, ReactElement } from 'react';
import './custom-buttom.styles.scss';

const CustomButton: FC<any> = ({ children, ...otherprops }): ReactElement => (
  <button className="custom-button" {...otherprops}>
    {children}
  </button>
);

export default CustomButton;
