import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getLocation} from '../../utils/Location';

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

export default Home;
