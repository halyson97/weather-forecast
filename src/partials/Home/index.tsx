import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getLocation} from '../../utils/Location';

import {connect} from 'react-redux';
import * as locationActions from '../../redux/actions/location';
import Props from '../../utils/Props';

const Home = () => {
  useEffect(() => {
    async function getMyLocation() {
      const location = await getLocation();

      console.log(location);
    }

    getMyLocation();
  }, []);
  return (
    <View>
      <Text>Tela Home</Text>
    </View>
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
)(Home);
