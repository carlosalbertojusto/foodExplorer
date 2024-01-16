import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.section`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: fit-content;
  height: fit-content;

  padding: 1rem;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  margin-bottom: 2rem;

  > a > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.4rem;
  }

  > a > svg:hover {
    filter: brightness(0.5);
  }

  .favorite {
    margin-top: 1rem;
    margin-left: 9rem;
  }

  .favorite:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }

  .edit {
    margin-left: 8rem;
    margin-bottom: 1rem;
    margin-top: -2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 18rem;
    height: fit-content;

    padding: 2rem;
  }
`

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.5rem;

  > img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }

  border-radius: 8px;

  > p {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .pDescription {
    display: none;
  }

  .pPrice {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }

  > footer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .buttonInclude {
    width: 70%;
    height: 3.6rem;
    margin-top: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .pTitle {
      font-weight: bold;
      font-size: 2.4rem;
    }

    .pDescription {
      display: flex;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 400;
    }

    .pPrice {
      font-size: 3.2rem;
    }
  }
`
