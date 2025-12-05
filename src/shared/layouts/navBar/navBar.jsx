import React from 'react';
import styles from './navBar.module.css';
import logo from '../../../assets/navBarIcons/logoTechNest.png'
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SideDrawer from '../drawer/sideDrawer';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router';


function NavBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <nav>
            <div className={styles.logoSideContainer}>
                <img className={styles.mainLogo} src={logo} alt="No logo :(" draggable={false}/>
                <h1>TechNest</h1>
            </div>
            <div className={styles.buttonsSideContainer}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete = "on"
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Search" 
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.3)',
                                    transition: 'background-color 0.3s', // Smooth transition
                                    backgroundColor: 'transparent', // Default background
                                },
                                '&.Mui-focused': {
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)', // White background on focus
                                    }
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(0,0,0,0.7)',
                                '&.Mui-focused': {
                                    color: 'white',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                                position: 'relative',
                                zIndex: 1,
	                            height: '50%',
                            },
                            borderRadius: '8px',

                        }}
                    />
                </Box>
	            <Link to="/profile">

                    <button className={styles.buttons}>
                        <AccountCircleOutlinedIcon fontSize="large" />
                    </button>
	            </Link>

                    <button className={styles.buttons}>
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </button>
                    <button className={styles.buttons}>
                        <DiscountOutlinedIcon fontSize="large" />
                    </button>
                    <Button onClick={toggleDrawer(true)} className={styles.buttons}>
                        <MenuOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
                    </Button>
                    <SideDrawer open={open} onClose={toggleDrawer(false)} />
            </div>
        </nav>
    );
}

export default NavBar;