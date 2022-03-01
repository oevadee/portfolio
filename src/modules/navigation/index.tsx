import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const SNav = styled.nav`
  max-width: 1200px;
  padding: 0 11.75rem;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SHeader = styled.h2`
  font-size: 1rem;
`;

const SList = styled.ul`
  display: flex;
  align-items: center;
  gap: 5.375rem;
  list-style: none;

  > li {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Navigation = () => {
  return (
    <SNav>
      <SHeader>Home</SHeader>
      <SList>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/about-me">about me</Link>
        </li>
      </SList>
    </SNav>
  );
};
