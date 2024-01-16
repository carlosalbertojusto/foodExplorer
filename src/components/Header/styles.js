import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  padding: 1.2rem;
  height: 11.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  gap: 1.6rem;
  justify-content: space-around;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Search = styled.div`
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    #search {
      text-align: center;
    }
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: center;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: fit-content;
    height: 2.8rem;
    object-fit: contain;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 25%;
    > img {
      height: 2.6rem;
      object-fit: contain;
    }
  }
`

export const ButtonContainer = styled.div`
  display: none;
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    width: 15%;
    align-items: center;
    justify-content: center;
  }
`

export const Menu = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  animation-name: topdown;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
      padding: 0 2.8rem;
    }
    .menuHeader {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding: 4rem 2.8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      > p {
        font-size: 2.1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
    .search {
      width: 100%;
      padding: 3.6rem 0;
    }
    .newMeal {
      display: flex;
      padding: 1rem;

      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      > button {
        border: none;
        background: transparent;
        > p {
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-weight: 300;
          line-height: 140%;
        }
      }
    }
    .logOut {
      display: flex;
      padding: 1rem;

      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      > button {
        border: none;
        background: transparent;
        > p {
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-weight: 300;
          line-height: 140%;
        }
      }
    }
  }
  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
