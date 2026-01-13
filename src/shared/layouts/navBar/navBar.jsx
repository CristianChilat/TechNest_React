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
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";


function NavBar() {
    const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const [open, setOpen] = React.useState(false);
	const [searchExpanded, setSearchExpanded] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

	const handleSearchToggle = () => {
		setSearchExpanded(!searchExpanded);
	};

	const searchInput = (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { 
					m: matches ? 0 : 1,
					width: !searchExpanded ? '100%' : 'auto'
				},
				flex: matches ? 1 : 'none',
				display: 'flex',
				alignItems: 'center',
				gap: !searchExpanded ? 1 : 0,
			}}
			noValidate
			autoComplete = "on"
		>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				autoFocus={matches && searchExpanded}
				fullWidth={matches}
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: 'rgba(0,0,0,0.3)',
							transition: 'background-color 0.3s',
							backgroundColor: 'transparent',
						},
						'&.Mui-focused': {
							'& .MuiOutlinedInput-notchedOutline': {
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
			{matches && searchExpanded && (
				<IconButton
					onClick={handleSearchToggle}
					sx={{
						color: 'black',
					}}
				>
					<Button sx={{ minWidth: '0' }} onClick={handleSearchToggle} className={styles.buttons}>
						<SearchIcon sx={{ fontSize: '1.5em', color: 'black' }} />
					</Button>
					<CloseIcon />
				</IconButton>
			)}
		</Box>
	);

	const navContents = (
		<>
			<Link to="/" className={styles.logoSideContainer}>
				<img className={styles.mainLogo} src={logo} alt="No logo :(" draggable={false}/>
				{!matches && <h1>TechNest</h1>}
			</Link>
			
			{matches && searchExpanded ? (
				<>
					<div className={styles.searchExpandedContainer}>
						{searchInput}
					</div>
					<Button onClick={toggleDrawer(true)} className={styles.buttons}>
						<MenuOutlinedIcon  sx={{ color: 'black', fontSize: '2.5em' }} />
					</Button>
					<SideDrawer open={open} onClose={toggleDrawer(false)} />
				</>
			) : (
				<div className={styles.buttonsSideContainer}>
					{!matches && searchInput}

					{matches && (
						<button
							className={styles.buttons}
							onClick={handleSearchToggle}
						>
							<SearchIcon sx={{ fontSize: '2.5em' }} />
						</button>
					)}
					
					<Link to="profile">
						<button className={styles.buttons}>
							<AccountCircleOutlinedIcon sx={{ fontSize: '2.5em' }} />
						</button>
					</Link>
					<button className={styles.buttons}>
						<ShoppingCartOutlinedIcon sx={{ fontSize: '2.5em' }} />
					</button>
					<button className={styles.buttons}>
						<DiscountOutlinedIcon sx={{ fontSize: '2.5em' }} />
					</button>
					<Button onClick={toggleDrawer(true)} className={styles.buttons}>
						<MenuOutlinedIcon  sx={{ color: 'black', fontSize: '2.5em' }} />
					</Button>
					<SideDrawer open={open} onClose={toggleDrawer(false)} />
				</div>
			)}
		</>
	);

    return (
        <nav>
	        {navContents}
        </nav>
    );
}

export default NavBar;