import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './stripe-payment-form.styles.scss';
import { StripeCardElement } from '@stripe/stripe-js';
import axios, { Method } from 'axios';

const apiCall = async (
  baseUrl: string,
  url: string,
  method: Method,
  data: any
) => {
  return new Promise((resolve, reject) => {
    axios({
      baseURL: baseUrl,
      url: url,
      method: method,
      data: data,
    })
      .then((response) => {
        console.log('[JX TEST] - apiCall - response', response);
        resolve(response);
      })
      .catch((error) => {
        console.log('[JX TEST] - apiCall - error', error);
        reject(error);
      });
  });
};

const getProductDetailsAPI = async (
  baseUrl: string,
  url: string,
  amount: number,
  currency: string
) => {
  console.log('[JX TEST] - getProductDetailsAPI', url, amount, currency);
  return await apiCall(baseUrl, url, 'post', { amount, currency });
};

const createPaymentIntentAPI = async (
  baseUrl: string,
  url: string,
  amount: number,
  currency: string
) => {
  console.log('[JX TEST] - createPaymentIntentAPI', url, amount, currency);
  return await apiCall(baseUrl, url, 'post', { amount, currency });
};

export default function StripePaymentForm(props: any) {
  const [amount, setAmount] = useState(props.amount);
  const [currency, setCurrency] = useState(props.currency);
  const [clientSecret, setClientSecret] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const { url, amount, currency, createIntentAPI, getProductDetailAPI } =
      props;

    console.log('[JX TEST] - StripePaymentForm - constructor', props);
    // Step 1: Fetch product details such as amount and currency from
    // API to make sure it can't be tampered with in the client.
    getProductDetailsAPI(
      String(url),
      String(getProductDetailAPI),
      Number(amount),
      currency
    )
      .then(() => {
        // Step 2: Create PaymentIntent over Stripe API
        createPaymentIntentAPI(
          String(url),
          String(createIntentAPI),
          Number(amount),
          currency
        )
          .then((clientSecret) => {
            setClientSecret(clientSecret);
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [props.amount, props.currency]);

  const cardElement = elements?.getElement(CardElement);
  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    setProcessing(true);

    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()
    const payload = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement as StripeCardElement,
        billing_details: {
          name: ev.target.name.value,
        },
      },
    });

    if (payload?.error) {
      setError(`Payment failed: ${payload?.error?.message}`);
      setProcessing(false);
      console.log('[error]', payload.error);
    } else {
      setError(null);
      setSucceeded(true);
      setProcessing(false);
      setMetadata(payload?.paymentIntent);
      console.log('[PaymentIntent]', payload?.paymentIntent);
    }
  };

  const renderSuccess = () => {
    return (
      <div className="sr-field-success message">
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        <pre className="sr-callout">
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
    );
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      },
    };

    return (
      <form onSubmit={handleSubmit}>
        <h1>
          {props.currency.toLocaleUpperCase()}{' '}
          {props.amount.toLocaleString(navigator.language, {
            minimumFractionDigits: 2,
          })}{' '}
        </h1>
        <h4>Pre-order the Pasha package</h4>

        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="cardholder"
              className="sr-input"
            />
          </div>

          <div className="sr-combo-inputs-row">
            <CardElement
              className="sr-input sr-card-element"
              options={options}
            />
          </div>
        </div>

        {error && <div className="message sr-field-error">{error}</div>}

        <button
          className="btn"
          disabled={processing || !clientSecret || !stripe}
        >
          {processing ? 'Processing…' : 'Pay'}
        </button>
      </form>
    );
  };

  return (
    <div className="checkout-form">
      <div className="sr-payment-form">
        <div className="sr-form-row" />
        {succeeded ? renderSuccess() : renderForm()}
      </div>
    </div>
  );
}
