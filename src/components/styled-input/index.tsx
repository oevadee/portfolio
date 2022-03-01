import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ContactFormValues } from 'src/types';
import styled, { css } from 'styled-components';

export const inputWrapperStyle = css`
  width: 100%;
  border: 1px solid #bdebea;
  border-radius: 0.375rem;
  position: relative;
`;

const SWrapper = styled.div`
  ${inputWrapperStyle}
  height: 48px;
`;

export const SLabel = styled.label`
  position: absolute;
  left: 0;
  top: -1.75rem;
`;

export const inputStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  background: transparent;
  border: none;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.white};

  &:placeholder {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.placeholderTexts};
  }
`;

const SInput = styled.input`
  ${inputStyle}
`;

const SRequired = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.small};
  position: absolute;
  bottom: -1.75rem;
  right: 0;
  color: ${({ theme }) => theme.colors.red};
`;

interface Props {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  required?: boolean;
}

export const StyledInput = ({
  name,
  label,
  type = 'text',
  register,
  placeholder,
  required = false,
}: Props) => (
  <SWrapper>
    {label && <SLabel htmlFor={name}>{label}</SLabel>}
    <SInput
      required={required}
      {...register(name)}
      placeholder={placeholder}
      type={type}
      name={name}
    />
    {required && <SRequired>input required</SRequired>}
  </SWrapper>
);
