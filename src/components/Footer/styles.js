import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
  grid-area: "footer";

  > main {
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    #logoFooter {
      object-fit: contain;
    }

    > p {
      font-family: "DM Sans", sans-serif;
      font-weight: 100;
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > main {
      justify-content: space-between;
      > p {
        font-size: 1.4rem;
      }
    }
  }
`
