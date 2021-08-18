import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import StripePaymentForm from '../../components/stripe-payment-form/stripe-payment-form';

import './payment.styles.scss';

const PaymentPage: FC<any> = (props) => {
  useEffect(() => {
    console.log('[JX TEST] -  PaymentPage', props);
  }, []);
  const { location } = props;

  return (
    <div className="stripe-area">
      <StripePaymentForm
        url={process.env.REACT_APP_PAYMENT_BACKEND_URL}
        createIntentAPI={process.env.REACT_APP_CREATE_PAYMENT_INTENT_API_NAME}
        getProductDetailAPI={process.env.REACT_APP_GET_PRODUCT_DETAILS_API_NAME}
        amount={location?.state?.amount}
        currency={location?.state?.currency}
      />
    </div>
  );
};

export default connect()(PaymentPage);
