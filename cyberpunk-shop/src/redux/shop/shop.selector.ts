import { createSelector } from 'reselect';

const selectShop = (state: RootReducerType): ShopReducerType => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
