import React from 'react';
import {StatusBar} from 'react-native';

import {NativeRouter, Route} from 'react-router-native';

import Home from './partials/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    </>
  );
};

export default App;
