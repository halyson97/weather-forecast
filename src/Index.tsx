import React from 'react';

import App from './App';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Store from './redux/store';

const {store, persistor} = Store();

export default function () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
