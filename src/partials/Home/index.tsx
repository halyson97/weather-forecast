import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getLocation} from '../../utils/Location';

import {connect} from 'react-redux';
import * as weatherActions from '../../redux/actions/weather';
import Props from '../../utils/Props';

import ErroLocation from '../../components/ErroLocation';
import ErroNotData from '../../components/ErroNotData';
import Preloader from '../../components/Preloader';

import {Location} from '../../protocols';

import climatempoApi from '../../api/climatempo';

import {checkConnection} from '../../utils/ConnectionInfo';

const Home = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);
  const [isOfflineAndNotData, setIsOfflineAndNotData] = useState(false);
  const [erroLocation, setErroLocation] = useState(false);

  useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = async () => {
    try {
      setErroLocation(false);
      setIsOfflineAndNotData(false);
      setIsOffline(false);

      if (!props.current) {
        setIsLoading(true);
      }

      const location = await getLocation();

      const isConnected = await checkConnection();

      console.log('internet', isConnected);

      if (isConnected) {
        return getDataClimatempoByLocation(location);
      }

      setIsLoading(false);

      if (props.current) {
        setIsOfflineAndNotData(false);
        setIsOffline(true);
      } else {
        setIsOfflineAndNotData(true);
        setIsOffline(false);
      }
    } catch (erro) {
      setIsLoading(false);
      setErroLocation(true);
    }
  };

  const getDataClimatempoByLocation = async (location: Location) => {
    try {
      if (props.current) {
        setIsLoading(false);
      }

      const responseCity = await climatempoApi.getCityByLocation(location);
      const responseWeather = await climatempoApi.getWeatherCurrentByCityId(
        responseCity.data.id,
      );
      const responseForecast = await climatempoApi.getForecastByCityId(
        responseCity.data.id,
      );

      const updatedAt = new Date();

      props.saveWeather(responseWeather.data, responseForecast.data, updatedAt);

      setIsLoading(false);
    } catch (erro) {
      // TODO: tratar erro
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (isOfflineAndNotData) {
    return <ErroNotData tryAgain={getMyLocation} />;
  }

  if (erroLocation) {
    return <ErroLocation tryAgain={getMyLocation} />;
  }

  return (
    <View>
      <Text>Tela Home</Text>
      <Text>{props.current && props.current.name}</Text>
      {isOffline && <Text>Voce esta offline</Text>}
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    current: state.weather.current,
    forecast: state.weather.forecast,
    updatedAt: state.weather.updatedAt,
  };
};

export default connect(
  mapStateToProps,
  Props.MapDispatchToProps({
    ...weatherActions,
  }),
)(Home);
