import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {NativeRouter, Route} from 'react-router-native';

import Home from './partials/Home';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <NativeRouter>
            <Route exact path="/" component={Home} />
          </NativeRouter>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
