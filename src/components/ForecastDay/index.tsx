import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components/native';

export const ContentDay = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  border-radius: 6px;
`;

export const DayText = styled.Text`
  color: #ffffff;
`;

export const ImageElement = styled.Image`
  width: 30px;
  height: 30px;
  margin: 15px 0px;
`;

export const TemperatureTextMin = styled.Text`
  font-size: 18px;
  color: #f0f0f0;
  font-weight: 300;
  opacity: 0.8;
`;

export const TemperatureTextMax = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
`;

type PropsTypes = {
  date: String;
  sourceImage: any;
  temperatureMax: String;
  temperatureMin: String;
};

const ForecastDay = ({
  date,
  sourceImage,
  temperatureMax,
  temperatureMin,
}: PropsTypes) => {
  return (
    <ContentDay>
      <DayText>{date}</DayText>
      <ImageElement width={30} height={30} source={sourceImage} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TemperatureTextMax>{temperatureMax}°</TemperatureTextMax>
        <Text>/</Text>
        <TemperatureTextMin>{temperatureMin}°</TemperatureTextMin>
      </View>
    </ContentDay>
  );
};

export default ForecastDay;
