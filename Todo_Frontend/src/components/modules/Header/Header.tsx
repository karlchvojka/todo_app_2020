// Framework Imports
import React from 'react'

// Library Imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// CSS Imports
import StyledHeader from './StyledHeader'

/**
 * This the Header component.
 */
const Header = () => {
  return (
    <StyledHeader>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BurnNet Todos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </StyledHeader>
  )
}

export default Header
