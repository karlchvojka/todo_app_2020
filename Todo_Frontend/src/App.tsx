// Framework Imports
import React from 'react'

// Library Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Component Imports
import Header from 'modules/Header/Header'

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
      <CssBaseline />
      <Header />
      <h1>Welcome to The Docker Typescript React App thats build using Webpack and Babel separately</h1>
    </ThemeProvider>
  )
}

export default App
