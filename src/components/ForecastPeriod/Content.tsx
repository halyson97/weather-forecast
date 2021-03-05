import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
`;

type PropsTypes = {
  children: React.ReactNode;
};

const Header = ({children}: PropsTypes) => {
  return <Container>{children}</Container>;
};

export default Header;
