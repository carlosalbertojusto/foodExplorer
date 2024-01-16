import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  width: 100%;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;

  border-radius: .5rem;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size:1.4rem;

  > svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`
