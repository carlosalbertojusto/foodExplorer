import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.section`
  grid-area: "section";
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > h2 {
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 1rem;
  }

  > ul {
    display: flex;
    gap: 1rem;

    border-radius: 8px;

    list-style: none;

    > li {
      display: flex;
      align-items: center;

      padding: 2rem 1rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_300};

      gap: 1rem;

      > a > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.4rem;
        margin-left: 8rem;
      }

      > img {
        width: 30rem;
      }

      > p {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      .pPrice {
        font-family: "Roboto", sans-serif;
        font-size: 3.2rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-items: center;

    > h2 {
      width: 100%;
      justify-content: start;
      font-size: 3.2rem;
    }
  }
`
