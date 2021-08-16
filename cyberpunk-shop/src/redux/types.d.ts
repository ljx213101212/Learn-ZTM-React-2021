interface ReduxActionType {
  type: string | null;
  payload?: any;
}

interface RootReducerType {
  pageState: PageStateReducer;
  user: userReducer;
  cart: cartReducer;
  directory: directoryReducer;
  shop: shopReducer;
}
