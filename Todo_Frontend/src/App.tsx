// Framework Imports
import React from 'react'

// Library Imports
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

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
      <Container maxWidth={'md'}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <p>left menu</p>
          </Grid>
          <Grid xs={8}>
            <h1>Welcome to The Docker Typescript React App thats build using Webpack and Babel separately</h1>
          </Grid>
        </Grid>
      </Container>
      
    </ThemeProvider>
  )
}

export default App
