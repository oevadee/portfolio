import React from 'react';
import styled from 'styled-components';
import { Social } from './components/social';
import Gmail from 'assets/ic-gmail.svg';
import LinkedIn from 'assets/ic-linkedin.svg';
import GitHub from 'assets/ic-github.svg';

const SFooter = styled.footer`
  margin: 17.5rem 0 5.75rem;
  display: grid;
  place-items: center;
`;

const SSocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5rem;
`;

const socials = [
  {
    icon: <Gmail />,
    name: 'Gmail',
  },
  {
    icon: <LinkedIn />,
    name: 'LinkedIn',
  },
  {
    icon: <GitHub />,
    name: 'Github',
  },
];

export const Footer = () => {
  return (
    <SFooter>
      <SSocialsWrapper>
        {socials.map(({ icon, name }) => (
          <Social icon={icon} name={name} />
        ))}
      </SSocialsWrapper>
    </SFooter>
  );
};
