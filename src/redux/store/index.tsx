import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import reducers from '../reducers/index';

const persistConfig = {
  key: 'weather',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return {store, persistor};
};
