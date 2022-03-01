import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
  width: 532px;
  height: 48px;
  border: 1px solid #bdebea;
  border-radius: 0.375rem;
  position: relative;
`;

const SLabel = styled.label`
  position: absolute;
  left: 0;
  top: -1.75rem;
`;

const SInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  background: transparent;
  border: none;
  padding: 0 1rem;

  &:placeholder {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.placeholderTexts};
  }
`;

interface Props {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  placeholder?: string;
}

export const StyledInput = ({
  name,
  label,
  type = 'text',
  register,
  placeholder,
}: Props) => {
  return (
    <SWrapper>
      {label && <SLabel htmlFor={name}>{label}</SLabel>}
      <SInput
        {...register(name)}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </SWrapper>
  );
};
