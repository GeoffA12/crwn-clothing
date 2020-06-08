import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // Object.keys() will return an array filled with keys of the collections object which is holding
  // the string values of the nested shop_data object items.
  // This expression will return an array of values based on the hash key in the map function.
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    // Here we are simply querying the collections object that's storing our shop items in an object
    // and returning an inner nested object corresponding to the key parameter passed into the selector
    (collections) => collections[collectionUrlParam]
  );
