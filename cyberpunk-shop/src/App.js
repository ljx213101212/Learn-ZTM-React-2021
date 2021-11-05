import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import PaymentPage from './pages/payment/payment';
import Header from './components//header/header';
import {
  addWindowEventListeners,
  removeWindowListener,
} from './utils/windowEventListener';
import Auth from './firebase/auth';
import FireBaseDataInit from './firebase/initFirebase';
import Init from './firebase/init';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { loadStripe, StripeCardElement } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//[Strip Integration]
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
import CurrentUserContext from './redux/user/current-user.context';

class App extends Component {
  componentDidMount() {
    addWindowEventListeners();
  }

  componentWillUnmount() {
    removeWindowListener();
  }

  render() {
    return (
      <div className="App">
        <Auth />
        <Init />
        {/* <FireBaseDataInit /> */}
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <CurrentUserContext.Provider value={this.props.currentUser}>
              <Header />
            </CurrentUserContext.Provider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/payment" component={PaymentPage} />
            </Switch>
          </BrowserRouter>
        </Elements>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(App);
