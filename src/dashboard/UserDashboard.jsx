import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
// import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
// import { BsGrid } from 'react-icons/bs'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ListButton from './components/ListButton';



// Drawer Section ==========>>>>>>>>>>
const drawerWidth = 296;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: 'hidden',
  width: `calc(${theme.spacing(11)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


// AppBar Section ==========>>>>>>>>>>
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),

    ...(!open && {
      [theme.breakpoints.down('sm')]: {
        width: 0,
        '& .MuiDrawer-paper': {
          width: 0,
        },
      },
      [theme.breakpoints.up('sm')]: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    }),
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (

    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Customize the dropdown's box shadow here
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <NavLink to={'/Settings'}>
        <MenuItem onClick={handleMenuClose}>
          My account
        </MenuItem>
      </NavLink>
    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Customize the dropdown's box shadow here
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* <<<<<<<<<<========== App Bar Section ==========>>>>>>>>>> */}
      {/* <<<<<<<<<<===================>>>>>>>>>> */}
      <AppBar position="fixed" open={open}
        sx={{
          backgroundColor: 'white',
          color: '#45464E',
          boxShadow: 'none',
          // width: `calc(100% - ${open ? '' :  89}px)`,
          // width: '100%', // Set width to 100% on mobile screens
          [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${open ? drawerWidth : 89}px)`, // Set width for larger screens
          },
        }}
      >
        <Toolbar>

          <span className='lg:hidden md:hidden flex'>
            <IconButton onClick={handleDrawerOpen}
              sx={{
                mx: 'auto',
                ...(open && { display: 'none' }),
                padding: 1,
                mr: 0.5
              }}
            >
              <MenuIcon />
            </IconButton>
          </span>

          <Typography variant="h3" noWrap component="div">
            <h3 className='text-paragraph-1 lg:text-sub-heading-3 font-medium'>
              {location.pathname.slice(1)}
            </h3>
          </Typography>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            {/* <<<<<<<<<<========== Notifications ==========>>>>>>>>>> */}
            {/* <<<<<<<<<<====================>>>>>>>>>> */}
            <IconButton
              aria-label="new notifications"
              size="large"
              color="inherit"
            >
              <Badge badgeContent={1} color="warning">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4749 9.70444C15.8662 8.99357 15.5896 8.37753 15.5896 7.33095V6.9751C15.5896 5.61127 15.2757 4.73254 14.5932 3.85382C13.5414 2.48915 11.7706 1.66666 10.0372 1.66666H9.96347C8.26645 1.66666 6.55121 2.45138 5.48115 3.76066C4.76143 4.65701 4.4111 5.5735 4.4111 6.9751V7.33095C4.4111 8.37753 4.15269 8.99357 3.52573 9.70444C3.06441 10.2281 2.91699 10.9012 2.91699 11.6297C2.91699 12.3591 3.15635 13.0498 3.63671 13.6113C4.26367 14.2844 5.14904 14.7141 6.05345 14.7888C7.36287 14.9382 8.67228 14.9944 10.0007 14.9944C11.3284 14.9944 12.6378 14.9004 13.948 14.7888C14.8516 14.7141 15.737 14.2844 16.3639 13.6113C16.8435 13.0498 17.0837 12.3591 17.0837 11.6297C17.0837 10.9012 16.9362 10.2281 16.4749 9.70444Z" fill="#7017E0" />
                  <path opacity="0.4" d="M11.6745 16.0236C11.2579 15.9347 8.71937 15.9347 8.30278 16.0236C7.94664 16.1059 7.56152 16.2972 7.56152 16.7169C7.58223 17.1172 7.81661 17.4706 8.14128 17.6946L8.14045 17.6955C8.56035 18.0228 9.05314 18.2309 9.56912 18.3056C9.84409 18.3434 10.124 18.3417 10.4089 18.3056C10.9241 18.2309 11.4169 18.0228 11.8368 17.6955L11.836 17.6946C12.1606 17.4706 12.395 17.1172 12.4157 16.7169C12.4157 16.2972 12.0306 16.1059 11.6745 16.0236Z" fill="#7017E0" />
                </svg>
              </Badge>
            </IconButton>

            {/* <<<<<<<<<<========== Account of current User ==========>>>>>>>>>> */}
            {/* <<<<<<<<<<====================>>>>>>>>>> */}
            <IconButton
              aria-label="account of current user"
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Bulk/Profile">
                  <g id="Profile">
                    <path id="Fill 1" d="M11.997 15.1743C7.684 15.1743 4 15.8543 4 18.5743C4 21.2953 7.661 21.9993 11.997 21.9993C16.31 21.9993 19.994 21.3203 19.994 18.5993C19.994 15.8783 16.334 15.1743 11.997 15.1743" fill="#7017E0" />
                    <path id="Fill 4" opacity="0.4" d="M11.9971 12.5835C14.9351 12.5835 17.2891 10.2285 17.2891 7.29151C17.2891 4.35451 14.9351 1.99951 11.9971 1.99951C9.06008 1.99951 6.70508 4.35451 6.70508 7.29151C6.70508 10.2285 9.06008 12.5835 11.9971 12.5835" fill="#7017E0" />
                  </g>
                </g>
              </svg>
            </IconButton>

          </Box>


          {/* <<<<<<<<<<========== Mobile Menu ==========>>>>>>>>>> */}
          {/* <<<<<<<<<<====================>>>>>>>>>> */}
          <Box sx={{ display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              aria-label="show more"
              size="large"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{
                padding: 1
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>

        <Divider />

        {/* <<<<<<<<<<========== Second Toolbar ==========>>>>>>>>>> Start */}
        {/* <<<<<<<<<<==========
        
        This one shows file path:
        ... gives visual path to users on where they currently ar on the software.
        
        ==========>>>>>>>>>> */}
        <Toolbar variant=''
          sx={{
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >

          {/* <<<<<<<<<<========== This button would help to return to the main page (home page of your vurrent path) ==========>>>>>>>>> */}
          <NavLink to={'/'} title={'Home'}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.09615 13.8548V11.8102C6.09614 11.2921 6.51744 10.8711 7.03928 10.8679H8.9554C9.47957 10.8679 9.9045 11.2898 9.9045 11.8102V13.8488C9.90449 14.2982 10.2697 14.6634 10.7223 14.6667H12.0295C12.6401 14.6682 13.2262 14.4285 13.6584 14.0005C14.0907 13.5724 14.3337 12.9912 14.3337 12.385V6.57724C14.3336 6.0876 14.115 5.62315 13.7367 5.30901L9.29564 1.78286C8.51933 1.16609 7.41057 1.18602 6.65725 1.83027L2.31167 5.30901C1.91549 5.61389 1.67869 6.07972 1.66699 6.57724V12.3791C1.66699 13.6425 2.69858 14.6667 3.97111 14.6667H5.24852C5.46644 14.6682 5.67598 14.5834 5.83064 14.431C5.9853 14.2785 6.07228 14.0711 6.07227 13.8548H6.09615Z" fill="#7017E0" />
            </svg>
          </NavLink>

          <NavLink to={'#'}>
            <p className='text-label-1'>
              {'/  ' + location.pathname.slice(1)}
            </p>
          </NavLink>

        </Toolbar>
        {/* <Divider /> */}

      </AppBar>
      {renderMobileMenu}
      {renderMenu}


      {/* <<<<<<<<<<========== Side Menu section (Menu Buttons) ==========>>>>>>>>>> */}
      {/* <<<<<<<<<<====================>>>>>>>>>> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className='transition-all duration-300'>
          {
            open ?

              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
              :
              <IconButton onClick={handleDrawerOpen}
                sx={{
                  mx: 'auto',
                  ...(open && { display: 'none' }),
                  // backgroundColor: 'white'
                }}
              >
                <MenuIcon />
              </IconButton>
          }
        </DrawerHeader>


        {/* <<<<<<<<<<========== Menu Item List ==========>>>>>>>>>> */}
        {/* <<<<<<<<<<====================>>>>>>>>>> */}
        <List
          sx={{
            px: open ? 3 : 2,
          }}
          className='transition-all duration-300'
        >
          <ListItem disablePadding sx={{ display: 'block' }} >

            {/* Dashboard Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/'}
              primaryItemText={'Dashboard'}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="white" />
                </svg>
              }
            />


            {/* Sales Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/Sales'}
              primaryItemText={'Sales'}
              notification={3}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.5134 21.5H8.16555C5.09919 21.5 2.74679 20.3925 3.41498 15.9348L4.19301 9.8936C4.60491 7.66934 6.02367 6.81808 7.26852 6.81808H17.447C18.7102 6.81808 20.0466 7.73342 20.5225 9.8936L21.3006 15.9348C21.8681 19.889 19.5797 21.5 16.5134 21.5Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.6502 6.5984C16.6502 4.21233 14.716 2.27804 12.3299 2.27804V2.27804C11.1809 2.27317 10.0773 2.7262 9.26308 3.53695C8.44889 4.34771 7.9912 5.44939 7.99121 6.5984H7.99121" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.296 11.1018H15.2502" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.46492 11.1018H9.41916" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.9133 14.3147L17.1444 8.12007C16.676 5.90964 15.3503 5 14.0865 5H3.93171C2.65022 5 1.28034 5.84597 0.882639 8.12007L0.104905 14.3147C-0.531424 18.8629 1.81062 20 4.86853 20H13.1585C16.2075 20 18.4789 18.3535 17.9133 14.3147ZM6.097 10.1486C5.60889 10.1486 5.21321 9.74131 5.21321 9.23893C5.21321 8.73655 5.60889 8.32929 6.097 8.32929C6.5851 8.32929 6.98079 8.73655 6.98079 9.23893C6.98079 9.74131 6.5851 10.1486 6.097 10.1486ZM11.002 9.23893C11.002 9.74131 11.3977 10.1486 11.8858 10.1486C12.3739 10.1486 12.7696 9.74131 12.7696 9.23893C12.7696 8.73655 12.3739 8.32929 11.8858 8.32929C11.3977 8.32929 11.002 8.73655 11.002 9.23893Z" fill="white" />
                  <path opacity="0.4" d="M13.9739 4.77432C13.977 4.85189 13.9621 4.92913 13.9303 5H12.4932C12.4654 4.92794 12.4506 4.85153 12.4497 4.77432C12.4497 2.85682 10.8899 1.30238 8.96575 1.30238C7.04164 1.30238 5.48184 2.85682 5.48184 4.77432C5.49502 4.84898 5.49502 4.92535 5.48184 5H4.00989C3.9967 4.92535 3.9967 4.84898 4.00989 4.77432C4.12172 2.10591 6.32499 0 9.00494 0C11.6849 0 13.8882 2.10591 14 4.77432H13.9739Z" fill="white" />
                </svg>
              }
            />

            {/* Staffs Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/Staffs'}
              primaryItemText={'Staffs'}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59102 15.2068C13.28 15.2068 16.433 15.7658 16.433 17.9988C16.433 20.2318 13.301 20.8068 9.59102 20.8068C5.90102 20.8068 2.74902 20.2528 2.74902 18.0188C2.74902 15.7848 5.88002 15.2068 9.59102 15.2068Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.59108 12.0198C7.16908 12.0198 5.20508 10.0568 5.20508 7.6348C5.20508 5.2128 7.16908 3.2498 9.59108 3.2498C12.0121 3.2498 13.9761 5.2128 13.9761 7.6348C13.9851 10.0478 12.0351 12.0108 9.62208 12.0198H9.59108Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.4824 10.8816C18.0834 10.6566 19.3164 9.2826 19.3194 7.6196C19.3194 5.9806 18.1244 4.6206 16.5574 4.3636" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5947 14.7322C20.1457 14.9632 21.2287 15.5072 21.2287 16.6272C21.2287 17.3982 20.7187 17.8982 19.8947 18.2112" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.34933 11.8579C3.38553 11.8579 0 12.4702 0 14.9175C0 17.3668 3.364 18.0002 7.34933 18.0002C11.3131 18.0002 14.6987 17.3879 14.6987 14.9405C14.6987 12.4913 11.3347 11.8579 7.34933 11.8579Z" fill="white" />
                  <path opacity="0.4" d="M7.34935 9.52482C10.049 9.52482 12.2124 7.40617 12.2124 4.76241C12.2124 2.11865 10.049 0 7.34935 0C4.65072 0 2.48633 2.11865 2.48633 4.76241C2.48633 7.40617 4.65072 9.52482 7.34935 9.52482Z" fill="white" />
                  <path opacity="0.4" d="M14.1738 4.84873C14.1738 6.19505 13.7609 7.45129 13.0368 8.4948C12.9614 8.60212 13.028 8.74682 13.1591 8.76981C13.3411 8.79952 13.528 8.81773 13.7188 8.82156C15.617 8.87043 17.3205 7.6736 17.7912 5.87116C18.4888 3.19674 16.4419 0.79541 13.8342 0.79541C13.5515 0.79541 13.2804 0.824157 13.0162 0.87686C12.98 0.884526 12.9409 0.901774 12.9213 0.932437C12.8959 0.971725 12.9145 1.02251 12.9399 1.05605C13.7237 2.13214 14.1738 3.44205 14.1738 4.84873Z" fill="white" />
                  <path d="M19.7794 12.1693C19.4321 11.4439 18.5935 10.9465 17.3176 10.7022C16.7158 10.5585 15.0857 10.3544 13.57 10.3831C13.5475 10.386 13.5348 10.4013 13.5328 10.4109C13.5299 10.4262 13.5368 10.4492 13.5661 10.4655C14.2667 10.8047 16.9741 12.2804 16.6336 15.3927C16.619 15.5288 16.7295 15.6438 16.8675 15.6246C17.5338 15.5317 19.2481 15.1704 19.7794 14.0474C20.074 13.4533 20.074 12.7634 19.7794 12.1693Z" fill="white" />
                </svg>
              }
            />

            {/* Inventory Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/Inventory'}
              primaryItemText={'Inventory'}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.419 15.7321C21.419 19.3101 19.31 21.4191 15.732 21.4191H7.95C4.363 21.4191 2.25 19.3101 2.25 15.7321V7.9321C2.25 4.3591 3.564 2.2501 7.143 2.2501H9.143C9.861 2.2511 10.537 2.5881 10.967 3.1631L11.88 4.3771C12.312 4.9511 12.988 5.2891 13.706 5.2901H16.536C20.123 5.2901 21.447 7.1161 21.447 10.7671L21.419 15.7321Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.48145 14.463H16.2164" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M16.8843 5.11485H13.9413C13.2081 5.11969 12.512 4.79355 12.0474 4.22751L11.0782 2.88762C10.6214 2.31661 9.9253 1.98894 9.19321 2.00028H7.11261C3.37819 2.00028 2.00001 4.19201 2.00001 7.91884V11.9474C1.99536 12.3904 21.9956 12.3898 21.9969 11.9474V10.7761C22.0147 7.04924 20.6721 5.11485 16.8843 5.11485Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8321 6.54329C21.1521 6.91737 21.3993 7.34768 21.5612 7.81219C21.8798 8.76687 22.0273 9.77012 21.9969 10.7759V16.0289C21.9956 16.4714 21.963 16.9132 21.8991 17.3511C21.7775 18.1238 21.5057 18.8653 21.0989 19.5339C20.9119 19.8569 20.6849 20.155 20.4231 20.4213C19.2383 21.5087 17.665 22.0747 16.0574 21.9919H7.93061C6.32049 22.0741 4.74462 21.5083 3.55601 20.4213C3.2974 20.1545 3.07337 19.8564 2.88915 19.5339C2.48475 18.8658 2.21869 18.1236 2.1067 17.3511C2.03549 16.914 1.99981 16.4718 2 16.0289V10.7759C1.99983 10.3372 2.02357 9.89878 2.07113 9.46264C2.08113 9.38612 2.09614 9.31084 2.11098 9.23635C2.13573 9.11216 2.16005 8.99014 2.16005 8.86812C2.25031 8.34179 2.41496 7.83092 2.64908 7.35077C3.34261 5.86891 4.76525 5.11467 7.09481 5.11467H16.8754C18.1802 5.01376 19.4753 5.40656 20.5032 6.21498C20.6215 6.31535 20.7316 6.42515 20.8321 6.54329ZM6.97033 15.5409H17.0355H17.0533C17.2741 15.5505 17.4896 15.4715 17.6517 15.3214C17.8137 15.1714 17.9088 14.9628 17.9157 14.7423C17.9282 14.5485 17.8644 14.3575 17.7379 14.2099C17.5924 14.0116 17.3618 13.8932 17.1155 13.8905H6.97033C6.51365 13.8905 6.14343 14.2599 6.14343 14.7157C6.14343 15.1714 6.51365 15.5409 6.97033 15.5409Z" fill="white" />
                </svg>
              }
            />

            {/* Notifications Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/Notifications'}
              primaryItemText={'Notifications'}
              notification={16}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.9398 12.413H15.9488" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.9301 12.413H11.9391" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.92128 12.413H7.93028" stroke="#53545C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9802 13.2896C11.2702 13.2796 10.7002 12.7096 10.7002 11.9996C10.7002 11.2996 11.2802 10.7196 11.9802 10.7296C12.6902 10.7296 13.2602 11.2996 13.2602 12.0096C13.2602 12.7096 12.6902 13.2896 11.9802 13.2896ZM7.36984 13.2896C6.66984 13.2896 6.08984 12.7096 6.08984 12.0096C6.08984 11.2996 6.65984 10.7296 7.36984 10.7296C8.07984 10.7296 8.64984 11.2996 8.64984 12.0096C8.64984 12.7096 8.07984 13.2796 7.36984 13.2896ZM15.31 12.0096C15.31 12.7096 15.88 13.2896 16.59 13.2896C17.3 13.2896 17.87 12.7096 17.87 12.0096C17.87 11.2996 17.3 10.7296 16.59 10.7296C15.88 10.7296 15.31 11.2996 15.31 12.0096Z" fill="white" />
                </svg>
              }
            />

            {/* Settings Button ==========>>>>>>>>>> */}
            <ListButton
              to={'/Settings'}
              primaryItemText={'Settings'}
              open={open}
              location={location}
              onClick={open ? handleDrawerClose : null}
              inactiveIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.8064 7.62386L20.184 6.54377C19.6574 5.62985 18.4905 5.31456 17.5753 5.83896V5.83896C17.1397 6.09559 16.6198 6.1684 16.1305 6.04133C15.6411 5.91427 15.2224 5.59776 14.9666 5.16162C14.8021 4.88439 14.7137 4.56864 14.7103 4.24628V4.24628C14.7251 3.72947 14.5302 3.22865 14.1698 2.85791C13.8094 2.48718 13.3143 2.27811 12.7973 2.27832H11.5433C11.0367 2.27831 10.5511 2.48016 10.1938 2.83919C9.83644 3.19822 9.63693 3.68484 9.63937 4.19136V4.19136C9.62435 5.23717 8.77224 6.07706 7.72632 6.07695C7.40397 6.0736 7.08821 5.98519 6.81099 5.82065V5.82065C5.89582 5.29626 4.72887 5.61154 4.20229 6.52546L3.5341 7.62386C3.00817 8.53664 3.31916 9.70285 4.22975 10.2326V10.2326C4.82166 10.5743 5.18629 11.2058 5.18629 11.8893C5.18629 12.5728 4.82166 13.2043 4.22975 13.5461V13.5461C3.32031 14.0722 3.00898 15.2356 3.5341 16.1456V16.1456L4.16568 17.2348C4.4124 17.68 4.82636 18.0085 5.31595 18.1477C5.80554 18.2868 6.3304 18.2251 6.77438 17.9763V17.9763C7.21084 17.7216 7.73094 17.6518 8.2191 17.7824C8.70725 17.9131 9.12299 18.2333 9.37392 18.6719C9.53845 18.9491 9.62686 19.2649 9.63021 19.5872V19.5872C9.63021 20.6438 10.4867 21.5003 11.5433 21.5003H12.7973C13.8502 21.5003 14.7053 20.6494 14.7103 19.5964V19.5964C14.7079 19.0883 14.9086 18.6003 15.2679 18.241C15.6272 17.8817 16.1152 17.6809 16.6233 17.6834C16.9449 17.692 17.2594 17.78 17.5387 17.9396V17.9396C18.4515 18.4656 19.6177 18.1546 20.1474 17.244V17.244L20.8064 16.1456C21.0615 15.7077 21.1315 15.1863 21.001 14.6966C20.8704 14.207 20.55 13.7896 20.1108 13.5369V13.5369C19.6715 13.2842 19.3511 12.8668 19.2206 12.3772C19.09 11.8875 19.16 11.3661 19.4151 10.9282C19.581 10.6386 19.8211 10.3984 20.1108 10.2326V10.2326C21.0159 9.70314 21.3262 8.54374 20.8064 7.63301V7.63301V7.62386Z" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12.1752" cy="11.8891" r="2.63616" stroke="#53545C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              activeIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0117 14.8297C10.4073 14.8297 9.10938 13.5797 9.10938 12.0097C9.10938 10.4397 10.4073 9.17969 12.0117 9.17969C13.6162 9.17969 14.8834 10.4397 14.8834 12.0097C14.8834 13.5797 13.6162 14.8297 12.0117 14.8297Z" fill="white" />
                  <path opacity="0.4" d="M21.2301 14.37C21.036 14.07 20.76 13.77 20.4023 13.58C20.1162 13.44 19.9322 13.21 19.7687 12.94C19.2475 12.08 19.5541 10.95 20.4228 10.44C21.4447 9.87 21.7718 8.6 21.179 7.61L20.4943 6.43C19.9118 5.44 18.6344 5.09 17.6226 5.67C16.7233 6.15 15.5685 5.83 15.0473 4.98C14.8838 4.7 14.7918 4.4 14.8122 4.1C14.8429 3.71 14.7203 3.34 14.5363 3.04C14.1582 2.42 13.4735 2 12.7172 2H11.2763C10.5302 2.02 9.84553 2.42 9.4674 3.04C9.27323 3.34 9.16081 3.71 9.18125 4.1C9.20169 4.4 9.10972 4.7 8.9462 4.98C8.425 5.83 7.27019 6.15 6.38109 5.67C5.35913 5.09 4.09191 5.44 3.49917 6.43L2.81446 7.61C2.23194 8.6 2.55897 9.87 3.57071 10.44C4.43937 10.95 4.74596 12.08 4.23498 12.94C4.06125 13.21 3.87729 13.44 3.59115 13.58C3.24368 13.77 2.93709 14.07 2.77358 14.37C2.39546 14.99 2.4159 15.77 2.79402 16.42L3.49917 17.62C3.87729 18.26 4.58245 18.66 5.31825 18.66C5.66572 18.66 6.0745 18.56 6.40153 18.36C6.65702 18.19 6.96361 18.13 7.30085 18.13C8.31259 18.13 9.16081 18.96 9.18125 19.95C9.18125 21.1 10.1215 22 11.3069 22H12.6968C13.872 22 14.8122 21.1 14.8122 19.95C14.8429 18.96 15.6911 18.13 16.7029 18.13C17.0299 18.13 17.3365 18.19 17.6022 18.36C17.9292 18.56 18.3278 18.66 18.6855 18.66C19.411 18.66 20.1162 18.26 20.4943 17.62L21.2097 16.42C21.5776 15.75 21.6083 14.99 21.2301 14.37Z" fill="white" />
                </svg>
              }
            />


          </ListItem>
        </List>


        {/* <<<<<<<<<<========== Second Menu Item List ==========>>>>>>>>>> */}
        {/* <<<<<<<<<<====================>>>>>>>>>> */}
        <List
          sx={{
            px: open ? 3 : 2,
            marginTop: 'auto'
          }}
          className='transition-all duration-300'
        >
          <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} >

            {/* Support Button ==========>>>>>>>>>> */}
            <ListItemButton
              sx={{
                py: 1.5,
                width: '100%',
                borderRadius: 3,
                backgroundColor: '#DEEEE8',
                "&.Mui-selected": {
                  backgroundColor: "#7017E0",
                  color: '#ffffff'
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "#6D83EC",
                  outline: 'none',
                  color: '#ffffff',
                },
                // ":hover": {
                //     backgroundColor: "#7017E0",
                //     color: '#ffffff'
                // },
              }}
            // selected={isSelected}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={'Contact Support'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            {/* Gift Awaits you Button ==========>>>>>>>>>> */}
            <ListItemButton
              sx={{
                py: 1.5,
                width: '100%',
                borderRadius: 3,
                backgroundColor: '#FFF2E2',
                "&.Mui-selected": {
                  backgroundColor: "#7017E0",
                  color: '#ffffff'
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "#6D83EC",
                  outline: 'none',
                  color: '#ffffff'
                },
                // ":hover": {
                //     backgroundColor: "#7017E0",
                //     color: '#ffffff'
                // },
              }}
            // selected={isSelected}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 7H2V12H22V7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={'Free Gift Awaits You!'} secondary={open ? 'Upgrade your account' : ''} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            {/* Log Out Button ==========>>>>>>>>>> */}
            <ListItemButton
              sx={{
                py: 1.5,
                width: '100%',
                borderRadius: 3,
                "&.Mui-selected": {
                  backgroundColor: "#7017E0",
                  color: '#ffffff'
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "#6D83EC",
                  outline: 'none',
                  color: '#ffffff'
                },
                // ":hover": {
                //     backgroundColor: "#7017E0",
                //     color: '#ffffff'
                // },
              }}
            // selected={isSelected}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z" fill="#CC5F5F" />
                  <path d="M21.7792 11.4548L18.9334 8.5458C18.6393 8.2458 18.166 8.2458 17.8728 8.5478C17.5807 8.8498 17.5816 9.3368 17.8748 9.6368L19.434 11.2298H17.9391H9.54875C9.13483 11.2298 8.79883 11.5748 8.79883 11.9998C8.79883 12.4258 9.13483 12.7698 9.54875 12.7698H19.434L17.8748 14.3628C17.5816 14.6628 17.5807 15.1498 17.8728 15.4518C18.0199 15.6028 18.2118 15.6788 18.4046 15.6788C18.5955 15.6788 18.7873 15.6028 18.9334 15.4538L21.7792 12.5458C21.9204 12.4008 22.0003 12.2048 22.0003 11.9998C22.0003 11.7958 21.9204 11.5998 21.7792 11.4548Z" fill="#CC5F5F" />
                </svg>
              </ListItemIcon>
              <ListItemText primary={'Logout'} sx={{ opacity: open ? 1 : 0, color: '#CC5F5F' }} />
            </ListItemButton>

          </ListItem>
        </List>

      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, py: 3, px: 2 }} className='bg-background w-full min-h-screen h-fit'>
        <DrawerHeader className='mb-5' />
        <Outlet />
      </Box>
    </Box>
  );
}
