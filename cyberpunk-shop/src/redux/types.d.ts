interface ReduxActionType {
  type: string | null;
  payload?: any;
}

interface RootReducerType {
  pageState: any;
  user: userReducer;
  cart: cartReducer;
  directory: directoryReducer;
  shop: shopReducer;
}
