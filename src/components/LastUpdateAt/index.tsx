import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30;
  padding-bottom: 10;
  margin-bottom: 10;
  border-bottom-width: 1;
  border-color: rgba(255, 255, 255, 0.7);
`;

export const ImageStyled = styled.Image`
  width: 80px;
  height: 20px;
`;

export const UpdateText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  opacity: 0.6;
`;

type PropsTypes = {
  lastUpdate: React.ReactNode;
  logo: any;
};

const Header = ({lastUpdate, logo}: PropsTypes) => {
  return (
    <Container>
      <ImageStyled width={100} height={20} source={logo} />

      <UpdateText>Última atualização: {lastUpdate}</UpdateText>
    </Container>
  );
};

export default Header;
