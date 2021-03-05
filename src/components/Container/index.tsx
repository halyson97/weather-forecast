import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 32px;
  padding-horizontal: 24px;
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

type PropsTypes = {
  children: React.ReactNode;
};

const Header = ({children}: PropsTypes) => {
  return <Container>{children}</Container>;
};

export default Header;
