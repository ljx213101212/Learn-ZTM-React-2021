import React, { FC, ReactElement } from 'react';

import SignIn from '../../components/sign-in/sign-in';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage: FC<void> = (): ReactElement => (
  <div className="sign-in-and-sign-up">
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;
