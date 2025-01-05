import MenuIcon from '@mui/icons-material/Menu';
import { TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile',  'Logout'];

function Dashboard() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleMenuClick = (setting) => {
    handleCloseUserMenu(); // Close the menu

    if (setting === 'Logout') {
      // Perform logout logic if needed
      console.log('Logging out...');
      navigate('/'); // Navigate to the Login page
    }
  };

  return (
    <AppBar position="static" 
          sx={{
        background: "linear-gradient(to left, #4B4D51,rgb(187, 187, 192))",
        // backgroundColor:"#4B4D51",
      height:"60px",
      zIndex: 1200, 

      

      }}
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <TextField
            // value={searchQuery}
            // onChange={handleSearchChange}
            placeholder="Search here..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              width: 200,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
           
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight:"3px"  }}
              >
                {page}
              </Button>
            ))}
            
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

               <img
          src="logo.png"
          alt="Logo"
          style={{
            // padding:0,
            // position: "absolute",
            // left: "850px",
            width: "50px",
            height: "50px",
          }}
        />
              </IconButton> 

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} */}

{settings.map((setting) => (
        <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
          <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
        </MenuItem>
      ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Dashboard;
