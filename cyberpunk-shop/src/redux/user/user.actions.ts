import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: any): ReduxActionType => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user: any) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: any) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword: any) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: any) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (emailAndPasswordAndDisplayName: any) => {
  console.log('[JX TEST] - user.actions.ts - signUpStart');
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: emailAndPasswordAndDisplayName,
  };
};

export const signUpSuccess = (emailAndPassword: any) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: emailAndPassword,
});

export const signUpFailure = (error: any) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
