import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getLocation} from '../../utils/Location';

import {connect} from 'react-redux';
import * as locationActions from '../../redux/actions/location';
import Props from '../../utils/Props';

import ErroLocation from '../../components/ErroLocation';
import Preloader from '../../components/Preloader';

import {Location} from '../../protocols';

import climatempoApi from '../../api/climatempo';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [erroLocation, setErroLocation] = useState(false);

  useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = async () => {
    try {
      setErroLocation(false);
      setIsLoading(true);

      const location = await getLocation();

      getDataClimatempoByLocation(location);
    } catch (erro) {
      console.log(erro);
      setIsLoading(false);
      setErroLocation(true);
    }
  };

  const getDataClimatempoByLocation = async (location: Location) => {
    try {
      const responseCity = await climatempoApi.getCityByLocation(location);
      const responseWeather = await climatempoApi.getWeatherCurrentByCityId(
        responseCity.data.id,
      );
      const responseForecast = await climatempoApi.getForecastByCityId(
        responseCity.data.id,
      );

      setIsLoading(false);
    } catch (erro) {
      // TODO: tratar erro
      console.log('erro', erro);
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (erroLocation) {
    return <ErroLocation tryAgain={getMyLocation} />;
  }

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
