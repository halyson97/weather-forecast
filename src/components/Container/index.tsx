import React from 'react';

import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
  margin-bottom: 10px;
`;

type PropsTypes = {
  children: React.ReactNode;
};

const Header = ({children}: PropsTypes) => {
  return <Container>{children}</Container>;
};

export default Header;
