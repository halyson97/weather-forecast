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
import ContentForecastPeriod from '../../components/ForecastPeriod/Content';
import ForecastPeriod from '../../components/ForecastPeriod';
import LastUpdateAt from '../../components/LastUpdateAt';
import ForecastDay from '../../components/ForecastDay';

import {Location} from '../../protocols';

import climatempoApi from '../../api/climatempo';

import {checkConnection} from '../../utils/ConnectionInfo';

import {getIcon} from '../../utils/Icons';
import DescriptionText from '../../components/DescriptionText';
import {getHoursAndMinutes, formatDateFull, getWeekDayAndDate} from '../../utils/Date';

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

  const preparePeriodsDay = () => {
    // TODO: alterar para exibir a previsão para o dia que o usuário selecionar
    let item = props.forecast.data[0];
    let periods = [];

    const namesFormated: {[day: string]: any} = {
      dawn: 'alvorecer',
      morning: 'manhã',
      afternoon: 'tarde',
      night: 'noite',
    };

    const periodsName = ['dawn', 'morning', 'afternoon', 'night'];

    periods = periodsName.map((name) => ({
      name: namesFormated[name],
      icon: item.text_icon.icon[name],
      temperature: item.temperature[name],
    }));

    return periods;
  };

  const getIconByDay = (day: string) => {
    return getIcon(day);
  };

  const formatDateUpdate = (date: string) => {
    return getHoursAndMinutes(date);
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
          {!!props.current && (
            <Container>
              <Header
                title={`${props.current.name}, ${props.current.state}`}
                subTitle={formatDateFull(props.current.data.date)}
              />
              <Main
                temperature={props.current.data.temperature}
                icon={getIconByDay(props.current.data.icon)}
              />
              <DescriptionText text={props.current.data.condition} />

              <ContentForecastPeriod>
                {preparePeriodsDay().map((item, index) => (
                  <ForecastPeriod
                    key={index}
                    date={item.name}
                    sourceImage={getIconByDay(item.icon)}
                    temperatureMax={item.temperature.max}
                    temperatureMin={item.temperature.min}
                  />
                ))}
              </ContentForecastPeriod>

              <LastUpdateAt
                logo={require('../../assets/images/logos/climatempo.png')}
                lastUpdate={formatDateUpdate(props.updatedAt)}
              />

              {props.forecast.data.map((item: any, index: any) => (
                <ForecastDay
                  key={index}
                  date={getWeekDayAndDate(item.date)}
                  sourceImage={getIconByDay(item.text_icon.icon.day)}
                  temperatureMax={item.temperature.max}
                  temperatureMin={item.temperature.min}
                />
              ))}
            </Container>
          )}
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
