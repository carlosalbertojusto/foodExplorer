import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 700;
  }
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
export const Title = styled.h1`
  font-size: 3.2rem;
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5.6rem;
  gap: 2.4rem;

  .ingredients {
    gap: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      width: fit-content;
      padding: 0.8rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      > p {
        font-size: 1.4rem;
      }
    }
  }

  .description {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .contentWrap {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .buttonEdit {
    width: 100%;
  }

  .buttonRemove {
    width: fit-content;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    margin: 0 auto;
    padding: 3.2rem 5.6rem;
    .wrap {
      width: fit-content;

      flex-direction: row;
    }
    .contentWrap {
      width: 70vw;
      height: 100%;
    }
    .buttonEdit {
      width: fit-content;
    }
    .description {
      font-size: 2.4rem;
      text-overflow: ellipsis;
      white-space: break-spaces;
    }
    .ingredients{
      justify-content: start;
    }
  }
`

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const ImageMeals = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  > img {
    width: 100%;
    max-width: 40rem;
    object-fit: contain;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 40rem;
    height: fit-content;
    > img {
      max-height: 40rem;
      justify-content: center;
      align-self: flex-start;
    }
  }
`

export const FormControl = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .price {
    width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-self: end;
  }
`

export const Label = styled.h1`
  font-size: 2.7rem;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-weight: 500;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    text-align: start;
    font-size: 4rem;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  justify-content: space-between;
  border-radius: 0.8rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;

    .ingredients {
      flex-direction: row;
    }
  }
`
