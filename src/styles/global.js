import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

body, html {
  width: 100%;
  height: 100%;
}

body{
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  -webkit-font-smoothing: antialised;
  font-size:1.6rem;
}

body, button, input, textarea {
  font-family: 'Roboto', serif;
  font-size: 16px;
  outline: none;
}

a{
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s
}

button:hover, a:hover {
  filter: brightness(0.9)
}
`
