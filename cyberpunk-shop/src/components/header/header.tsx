import React, { FC, SyntheticEvent, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import CurrentUserContext from '../../redux/user/current-user.context';

import './header.styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';
import { auth } from '../../firebase/firebase.utils';

const Header: FC<any> = ({ hidden }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <div
            style={{ cursor: 'pointer' }}
            className="option"
            onClick={(_event: SyntheticEvent) => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector<any, any, any>({
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
