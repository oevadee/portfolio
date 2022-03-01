import { StyledButton } from 'components/styled-button';
import { StyledInput } from 'components/styled-input';
import { StyledTextarea } from 'components/styled-textarea';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SSection = styled.section`
  display: grid;
  place-items: center;
  height: calc(100vh - ${({ theme }) => theme.dimentions.nav});
`;

const SForm = styled.form`
  width: 33.25rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SStyledButton = styled(StyledButton)`
  width: 100%;
`;

export const ContactView = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <SSection>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          placeholder="Enter your name"
          register={register}
          name="name"
          label="Name"
        />
        <StyledInput
          placeholder="Enter your e-mail"
          register={register}
          name="email"
          label="E-mail"
          type="email"
          required
        />
        <StyledTextarea
          register={register}
          name="message"
          label="Message"
          placeholder="Write your message"
        />
        <SStyledButton type="submit">Submit</SStyledButton>
      </SForm>
    </SSection>
  );
};
