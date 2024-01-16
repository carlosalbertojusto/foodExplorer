import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { AuthProvider } from './hooks/auth'
import GlobalStyle from './styles/global'
import theme from './styles/themes'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)