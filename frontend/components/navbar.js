import React from 'react';
import {
    AppBar,
    Box,
    Container,
    Typography,
    Toolbar,
    IconButton,
    Menu,
    Button,
    MenuItem,
    Link
} from "@mui/material";
import {useRouter} from 'next/router'

import {amber} from '@mui/material/colors'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const router = useRouter()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    return (
        <AppBar position='fixed' sx={{backdropFilter: 'blur(10px)', zIndex: 1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}, '&:hover': {cursor: 'pointer'}}}
                    >
                        Jakies LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About us</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => router.push('/login')}>Login</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" onClick={() => router.push('/register')}>Register</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, '&:hover': {cursor: 'pointer'}}}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Link href='#about' variant='body2'
                              onClick={handleCloseNavMenu}
                              sx={{my: 2, display: 'block', fontSize: 18, '&:hover': {fontWeight: 'bold'}}}
                        >
                            About us
                        </Link>
                        <Link href='#contact' variant='body2'
                              onClick={handleCloseNavMenu}
                              sx={{my: 2, ml: 2, fontSize: 18, display: 'block', '&:hover': {fontWeight: 'bold'}}}
                        >
                            Contact
                        </Link>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Button variant='contained' sx={{
                            mr: 1,
                            display: {md: 'inline', xs: 'none'},
                            '&:hover': {backgroundColor: amber[600], color: '#fff'}
                        }} onClick={() => router.push('/login')}>Login</Button>
                        <Button variant='contained' sx={{
                            display: {md: 'inline', xs: 'none'},
                            '&:hover': {backgroundColor: amber[600], color: '#fff'}
                        }} onClick={() => router.push('/register')}>Register</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;