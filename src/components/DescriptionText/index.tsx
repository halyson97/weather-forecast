import React from 'react';

import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
`;

type PropsTypes = {
  text: String;
};

const DescriptionText = ({text}: PropsTypes) => {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default DescriptionText;
