import React from 'react';
import styles from './navBar.module.css';
import logo from '../../../assets/navBarIcons/logoTechNest.png'
import profileIcon from '../../../assets/navBarIcons/profileButtonIcon.svg'
import cartIcon from '../../../assets/navBarIcons/cartButtonIcon.svg'
import promoIcon from '../../../assets/navBarIcons/promoButtonIcon.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SideDrawer from '../drawer/sideDrawer';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import TextField from '@mui/material/TextField';

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
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // White background on focus
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
                            },
                            borderRadius: '8px',
                        }}
                    />
                </Box>
                <div>
                    <button className={styles.buttons}>
                        <img src={profileIcon} alt=""/>
                    </button>
                </div>
                <div>
                    <button className={styles.buttons}>
                        <img src={cartIcon} alt=""/>
                    </button>
                </div>
                <div>
                    <button className={styles.buttons}>
                        <img src={promoIcon} alt=""/>
                    </button>
                </div>
                <div>
                    <Button onClick={toggleDrawer(true)} className={styles.buttons}>
                        <MenuOutlinedIcon sx={{ color: 'black' }} />
                    </Button>
                    <SideDrawer open={open} onClose={toggleDrawer(false)} />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;