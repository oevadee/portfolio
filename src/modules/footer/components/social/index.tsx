import React, { ReactElement } from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
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
}

export const Social = ({ icon, name }: Props) => {
  return (
    <SWrapper>
      {icon}
      <SParahraph>{name}</SParahraph>
    </SWrapper>
  );
};
