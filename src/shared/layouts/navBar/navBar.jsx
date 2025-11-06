import React from 'react';
import styles from './navBar.module.css';
import logo from '../../../assets/navBarIcons/logoTechNest.png'
import profileIcon from '../../../assets/navBarIcons/profileButtonIcon.svg'
import cartIcon from '../../../assets/navBarIcons/cartButtonIcon.svg'
import promoIcon from '../../../assets/navBarIcons/promoButtonIcon.svg'
import searchIcon from '../../../assets/navBarIcons/searchButtonIcon.svg'
import Button from '@mui/material/Button';
import SideDrawer from '../drawer/sideDrawer';

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
                <div className={styles.searchContainer}>
                    <input id={styles.searchInput} type="text" placeholder="Search your product"/>
                    <button id={styles.searchButton}>
                        <img src={searchIcon} alt=""/>
                    </button>
                </div>
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
                    <Button onClick={toggleDrawer(true)}>

                    </Button>
                    <SideDrawer open={open} onClose={toggleDrawer(false)} />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;