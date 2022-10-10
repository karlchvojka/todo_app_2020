// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <h1>Welcome to The Docker Typescript React App thats build using Webpack and Babel separately</h1>
    </StyledApp>
  )
}

export default App
