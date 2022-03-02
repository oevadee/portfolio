import { inputStyle, inputWrapperStyle, SLabel } from 'components/styled-input';
import { Placeholder } from 'gatsby-plugin-image';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
  ${inputWrapperStyle}
  height: 10rem;
`;

const STextarea = styled.textarea`
  ${inputStyle}
`;

interface Props {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  placeholder: string;
}

export const StyledTextarea = ({
  register,
  name,
  label,
  placeholder,
}: Props) => (
  <SWrapper>
    {label && <SLabel>{label}</SLabel>}
    <STextarea {...register(name)} placeholder={placeholder} name={name} />
  </SWrapper>
);
