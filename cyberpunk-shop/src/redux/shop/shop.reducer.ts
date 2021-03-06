import SHOP_DATA from '../../test/shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA,
} as ShopReducerType;

const shopReducer = (
  state = INITIAL_STATE,
  action: ReduxActionType
): ShopReducerType => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
