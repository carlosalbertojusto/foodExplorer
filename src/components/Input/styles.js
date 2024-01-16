import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;

  background: ${({ theme, primary }) =>
    primary ? theme.COLORS.DARK_900 : theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 0.5rem;
  > input {
    height: 4.8rem;
    width: 100%;
    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.6rem;
    }
  }
  > svg {
    width: fit-content;
    margin-left: 1.8rem;
  }
`
