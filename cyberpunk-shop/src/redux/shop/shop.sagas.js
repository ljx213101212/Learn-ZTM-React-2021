import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    console.log('[JX TEST] - fetchCollectionsAsync - success');
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    console.log('[JX TEST] - fetchCollectionsAsync - failure');
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  console.log('[JX TEST] - fetchCollectionsStart');
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  let effectObj = call(fetchCollectionsStart);
  console.log('[JX TEST] - shopSagas - call', effectObj);
  let allEffectObj = all([effectObj]);
  console.log('[JX TEST] - shopSagas - all', allEffectObj);
  yield allEffectObj;
}
