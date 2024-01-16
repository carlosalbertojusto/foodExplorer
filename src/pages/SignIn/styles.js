import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  > img {
      width: 27rem;
      height: 4rem;
      object-fit: contain;
    }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > img {
      width: 26rem;
      height: 26rem;
      object-fit: contain;
    }
  }
`

export const TextLogin = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    > h1 {
      font-size: 3.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem;
  gap: 3.2rem;
  border-radius: 1.6rem;
  max-width: 52rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 6.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};
  }
`

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Paragraph = styled.div`
  text-align: center;
  > a {
    font-size: 1.4rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
