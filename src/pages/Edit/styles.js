import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;

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
  flex-direction: column;
  padding: 1rem;
  gap: 3.2rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 auto;
    width: 112rem;
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
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > label {
    width: fit-content;
    display: flex;
    height: 4.8rem;
    align-items: center;
    gap: 0.5rem;
    padding: 1.2rem 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    > input {
      display: none;
    }
    > p {
      font-size: 1.4rem;
      width: 100%;
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

export const Label = styled.label`
  font-size: 1.6rem;
  text-align: start;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .buttonSave {
    width: fit-content;
  }
  .buttonRemove {
    width: fit-content;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  justify-content: space-between;
  border-radius: 0.8rem;

  .ingredients {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;

    .ingredients {
      flex-direction: row;
    }
  }
`

export const SelectCategory = styled.div`
  border-radius: 0.8rem;
  .input-select {
    display: flex;

    gap: 1rem;
    width: 100%;
    height: 3.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;

    > select {
      width: 100%;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};

      border: none;

      > option {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
