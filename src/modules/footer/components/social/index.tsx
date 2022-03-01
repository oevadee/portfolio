import React, { ReactElement } from 'react';
import styled from 'styled-components';

const SWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

const SParahraph = styled.p`
  text-transform: uppercase;
`;

interface Props {
  icon: ReactElement;
  name: string;
  url: string;
}

export const Social = ({ icon, name, url }: Props) => (
  <SWrapper href={url} target="_blank">
    {icon}
    <SParahraph>{name}</SParahraph>
  </SWrapper>
);
