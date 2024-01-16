import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: "column";
  width: 100%;
  position: relative;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  > div {
    grid-area: "content";
    overflow-x: hidden;
    width: 100%;

    .meals {
      width: 140%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      --swiper-navigation-color: white;
      --swiper-navigation-size: 4rem;
      --swiper-navigation-bg: white;
      --swiper-pagination-color: white;

      --swiper-pagination-bullet-inactive-color: ${({ theme }) =>
        theme.COLORS.LIGHT_500};

      animation-name: topdown;
      animation-duration: 700ms;
    }

    .meal:hover {
      transform: scale(1.1);
      opacity: 0.9;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      .meals {
        max-width: 65rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      .meals {
        max-width: 28rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      align-items: center;
      .meals {
        max-width: 35rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      .meals {
        max-width: 75rem;
        margin: 3rem;
        position: relative;
      }

      .meal {
        z-index: 1;
      }

      .meals::before {
        content: "";

        position: absolute;
        z-index: 2;

        left: 0rem;

        top: 0px;
        bottom: 30px;
        background: linear-gradient(
          90deg,
          rgba(6, 6, 6, 0.8379726890756303) 15%,
          rgba(6, 6, 6, 0.21612394957983194) 100%,
          rgba(0, 0, 0, 1) 100%
        );
        width: 10rem;
      }

      .meals::after {
        content: "";
        position: absolute;
        z-index: 1;

        right: 0rem;

        top: 0px;
        bottom: 40px;

        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.5830707282913166) 15%,
          rgba(0, 0, 0, 0.21612394957983194) 100%,
          rgba(0, 0, 0, 1) 100%
        );
        width: 10rem;
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
  }
`
export const Banner = styled.div`
  display: flex;
  grid-area: "content";

  align-self: center;
  justify-self: center;
  background: linear-gradient(to bottom, #091e26, #00131c);

  width: 100%;

  height: 110px;

  margin-bottom: 3rem;

  animation: downtop 500ms 350ms backwards;

  > img {
    width: 160px;
    height: 130px;

    position: relative;

    bottom: 15px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 75%;
    align-self: center;
    justify-self: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 75%;
    align-self: center;
    justify-self: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    align-self: center;
    justify-self: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    height: 210px;
    width: 100%;
    place-content: center;
    margin-top: 13rem;

    > img {
      width: 450px;
      height: 320px;

      position: relative;
      left: -55px;
      bottom: 100px;
    }
  }
`

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-right: 2rem;

  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h1 {
    font-weight: 600;
    font-size: 1.8rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-right: 0rem;
    margin-left: 2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > h1 {
      font-weight: 400;
      font-size: 1.8rem;
    }
  }
`

export const Paragraph = styled.div`
  text-align: center;
  > a {
    font-size: 1.4rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
