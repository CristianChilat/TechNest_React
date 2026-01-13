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
import {Dialog, DialogContent, IconButton} from "@mui/material";


function NavBar() {
    const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const [open, setOpen] = React.useState(false);
	const [searchDialogOpen, setSearchDialogOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

	const searchInput = (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { 
					m: matches ? 0 : 1, 
					width: matches ? '100%' : '25ch' 
				},
				flex: matches ? 1 : 'none',
			}}
			noValidate
			autoComplete = "on"
		>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				autoFocus={matches}
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
								backgroundColor: matches ? 'transparent' : 'rgba(255, 255, 255, 0.05)',
							}
						},
						'&.Mui-focused fieldset': {
							borderColor: matches ? 'black' : 'white',
						},
					},
					'& .MuiInputLabel-root': {
						color: 'rgba(0,0,0,0.7)',
						'&.Mui-focused': {
							color: matches ? 'black' : 'white',
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
	);

	const navContents = (
		<>
			<Link to="/" className={styles.logoSideContainer}>
				<img className={styles.mainLogo} src={logo} alt="No logo :(" draggable={false}/>

				{matches ? (
					<></>
				) : (
					<h1>TechNest</h1>
				)}

			</Link>
			<div className={styles.buttonsSideContainer}>
				{matches ? (
					<button
						className={styles.buttons}
						onClick={() => setSearchDialogOpen(true)}
					>
						<SearchIcon sx={{ fontSize: '2.5em' }} />
					</button>
				) : (
					searchInput
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
		</>
	)

	if (matches) return (
		<nav>
			{navContents}

			<Dialog
				open={searchDialogOpen}
				onClose={() => setSearchDialogOpen(false)}
				fullWidth
				maxWidth="md"
				sx={{
					'& .MuiDialog-container': {
						alignItems: 'flex-start',
					},
					'& .MuiDialog-paper': {
						margin: 0,
						marginTop: '0px',
						borderRadius: '0 0 16px 16px',
						maxHeight: '200px',
					}
				}}
			>
				<DialogContent
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 1,
						padding: 2,
					}}
				>
					{searchInput}
					<IconButton
						edge="end"
						color="inherit"
						onClick={() => {
							// Handle search logic here
							console.log('Search clicked');
						}}
						aria-label="search"
						sx={{
							color: 'black',
							flexShrink: 0,
						}}
					>
						<SearchIcon />
					</IconButton>
					<IconButton
						edge="end"
						color="inherit"
						onClick={() => setSearchDialogOpen(false)}
						aria-label="close"
						sx={{
							color: 'black',
							flexShrink: 0,
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogContent>
			</Dialog>
		</nav>
	)

    return (
        <nav>
	        {navContents}
        </nav>
    );
}

export default NavBar;