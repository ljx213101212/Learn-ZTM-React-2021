import React, { FC, ReactElement, SyntheticEvent } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header: FC<any> = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={(event: SyntheticEvent) => {
            const signOutEvent = new CustomEvent('SIGN_OUT', {
              detail: {
                timerTick: new Date().getTime(),
              },
            });
            window.dispatchEvent(signOutEvent);
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
