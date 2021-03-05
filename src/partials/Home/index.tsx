import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import {getLocation} from '../../utils/Location';

import {connect} from 'react-redux';
import * as weatherActions from '../../redux/actions/weather';
import Props from '../../utils/Props';

import ErroLocation from '../../components/ErroLocation';
import ErroNotData from '../../components/ErroNotData';
import Preloader from '../../components/Preloader';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Container from '../../components/Container';

import {Location} from '../../protocols';

import climatempoApi from '../../api/climatempo';

import {checkConnection} from '../../utils/ConnectionInfo';

import {getIcon} from '../../utils/Icons';

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

  const getIconByDay = (day: string) => {
    return getIcon(day);
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
    <View style={{backgroundColor: 'green', flex: 1}}>
      <SafeAreaView>
        <ScrollView>
          <Container>
            <Header
              title={`${props.current.name}, ${props.current.state}`}
              subTitle={props.current.data.date}
            />
            <Main
              temperature={props.current.data.temperature}
              icon={getIconByDay(props.current.data.icon)}
            />
            <Text>Tela Home</Text>
            <Text>{props.current && props.current.name}</Text>
            {isOffline && <Text>Voce esta offline</Text>}
          </Container>
        </ScrollView>
      </SafeAreaView>
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
