import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: UserReducerType): ReduxActionType => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
