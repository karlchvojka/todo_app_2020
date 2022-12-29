// Framework Imports
import React from 'react'

// Library Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'

// Component Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {

  // METHODS
  
  /**
   * Declares the color mode as dark for Material-UI
   */
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledApp>
        <GlobalStyle />
        <Header />
        <h1>Welcome to The Docker Typescript React App thats build using Webpack and Babel separately</h1>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
