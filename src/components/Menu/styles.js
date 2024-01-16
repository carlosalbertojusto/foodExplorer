import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const MenuHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const Text = styled.p`
  font-size: 2.1rem;
`
