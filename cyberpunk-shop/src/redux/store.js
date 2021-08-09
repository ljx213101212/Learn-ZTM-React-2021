import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// const composeSetup =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         trace: true,
//         traceLimit: 25,
//       })
//     : compose;

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
  // composeSetup
);

export const persistor = persistStore(store);

export default { store, persistStore };
