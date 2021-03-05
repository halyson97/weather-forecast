import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  padding: 10px 0px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  color: #fff;
`;

type PropsTypes = {
  title: String;
  subTitle: String;
};

const Header = ({title, subTitle}: PropsTypes) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default Header;
