import React from 'react';
import {Button, GestureResponderEvent, View} from 'react-native';

import LottieView from 'lottie-react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 32px;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 18px;
  text-align: center;
`;

const ContentImage = styled.View`
  flex: 1;
`;

const Info = styled.Text`
  font-size: 14px;
  text-align: center;
  padding-bottom: 24px;
`;

type PropsTypes = {
  tryAgain: (event: GestureResponderEvent) => void;
};

const ErroLocation = ({tryAgain}: PropsTypes) => {
  return (
    <Container>
      <Title>Não foi possível obter a localização</Title>

      <ContentImage>
        <LottieView
          source={require('../../assets/lottie/location-permission.json')}
          autoPlay
          loop
        />
      </ContentImage>

      <View>
        <Info>Verifique as permissões e tente novamente</Info>

        <Button
          onPress={tryAgain}
          title="Tentar novamente"
          color="#009688"
          accessibilityLabel="Tentar novamente acessar o recurso"
        />
      </View>
    </Container>
  );
};

export default ErroLocation;
