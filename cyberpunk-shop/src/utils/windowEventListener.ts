import { auth } from '../firebase/firebase.utils';

const signoutHandler = (event: Event): void => {
  console.log('[USER ACTION]: SIGN_OUT', event);
  auth.signOut();
};

export const addWindowEventListeners = (): void => {
  window.addEventListener('SIGN_OUT', signoutHandler, true);
};

export const removeWindowListener = (): void => {
  window.removeEventListener('SIGN_OUT', signoutHandler);
};
