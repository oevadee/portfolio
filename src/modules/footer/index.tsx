import React from 'react';
import styled from 'styled-components';
import { Social } from './components/social';
import Gmail from 'assets/ic-gmail.svg';
import LinkedIn from 'assets/ic-linkedin.svg';
import Github from 'assets/ic-github.svg';
import { githubUrl, linkedInUrl } from 'constants/links';

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
    url: '',
  },
  {
    icon: <LinkedIn />,
    name: 'LinkedIn',
    url: linkedInUrl,
  },
  {
    icon: <Github />,
    name: 'Github',
    url: githubUrl,
  },
];

export const Footer = () => {
  return (
    <SFooter>
      <SSocialsWrapper>
        {socials.map(({ icon, name, url }) => (
          <Social icon={icon} name={name} url={url} />
        ))}
      </SSocialsWrapper>
    </SFooter>
  );
};
