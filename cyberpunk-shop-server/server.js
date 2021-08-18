const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

//obsoleted
/* #region  obsoleted */
app.post('/payment', (req, res) => {
  console.log('[JX TEST] - payment API', req.body);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

/* #endregion */

app.post('/create-checkout-session', async (req, res) => {
  const body = {
    amount: req.body.amount,
    currency: 'usd',
  };
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: body.currency,
          product_data: {
            name: 'test-from-postman',
          },
          unit_amount: body.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success.html',
    cancel_url: 'http://localhost:3000/cancel.html',
  });

  res.redirect(303, session.url);
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;
  console.log('[JX TEST] - create-payment-intent API', { amount, currency });
  // Create a PaymentIntent with the order amount and currency.
  const params = {
    amount: amount,
    currency: currency,
  };

  const paymentIntent = await stripe.paymentIntents.create(params);

  // Send publishable key and PaymentIntent client_secret to client.
  res.send({
    clientSecret: paymentIntent.client_secret,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

//dummy config.
const checkProductValidation = (amount, currency) => {
  return true;
};
const getProductDetails = (amount, currency) => {
  if (checkProductValidation(amount, currency)) {
    return { currency, amount };
  }
  return null;
};

/**
 * amount:  (cent)
 * currency:  sgd
 */
app.post('/get-product-details', async (req, res) => {
  console.log('[JX TEST] - get-product-details API', req.query);
  const { amount, currency } = req.body;

  const data = getProductDetails(amount, currency);
  if (!data) {
    res.status(500).send({ error: 'Product detail is invalid' });
    return;
  }
  res.send(data);
});
