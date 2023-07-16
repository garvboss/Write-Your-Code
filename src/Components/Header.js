import React from 'react'
import { AppBar, Toolbar, styled} from '@mui/material'
import logo from '../Images/l10.jfif';
function Header() {

    const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    `
  return (
    <div>
      <Container position="static">
        <Toolbar>
            <img className="logo" src={logo} alt="logo_image" style={{width: 40}}/>
        </Toolbar>
      </Container>
    </div>
  )
}

export default Header
