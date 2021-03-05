import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {NativeRouter, Route} from 'react-router-native';

import {connect} from 'react-redux';
import * as locationActions from './redux/actions/location';

import Props from './utils/Props';

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

const mapStateToProps = (state: any) => {
  return {
    location: state.location,
  };
};

export default connect(
  mapStateToProps,
  Props.MapDispatchToProps({
    ...locationActions,
  }),
)(App);
