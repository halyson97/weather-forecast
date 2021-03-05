import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const ImageStyled = styled.Image`
  width: 50px;
  height: 50px;
  margin: 15px 15px 15px 0px;
`;

export const TemperatureText = styled.Text`
  font-size: 56px;
  color: #ffffff;
  font-weight: 300;
`;

type PropsTypes = {
  temperature: String;
  icon: String;
};

const Main = ({temperature, icon}: PropsTypes) => {
  return (
    <Container>
      <ImageStyled width={50} height={50} source={icon} />

      <TemperatureText>{temperature}°</TemperatureText>
    </Container>
  );
};

export default Main;
