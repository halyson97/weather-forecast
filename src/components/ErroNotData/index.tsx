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

const ErroNotData = ({tryAgain}: PropsTypes) => {
  return (
    <Container>
      <Title>Não foi possível obter os dados</Title>

      <ContentImage>
        <LottieView
          source={require('../../assets/lottie/offline.json')}
          autoPlay
          loop
        />
      </ContentImage>

      <View>
        <Info>Verifique a sua conexão com a Internet e tente novamente</Info>

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

export default ErroNotData;
