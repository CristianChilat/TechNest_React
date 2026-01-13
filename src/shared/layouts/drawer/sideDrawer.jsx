import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

function SideDrawer({open, onClose}) {
	const iconMapping = {
		'Smartphones': <SmartphoneIcon sx={{color: 'black'}}/>,
		'Computer Details': <DesktopWindowsOutlinedIcon color="black"/>,
		'Gadgets': <WatchOutlinedIcon sx={{color: 'black'}}/>,
	};

	const getIcon = (text) => iconMapping[text] || null;

	const DrawerContent = (
		<Box
			sx={{
				width: 300,
				padding: 1,
			}}
			role="presentation"
			onClick={onClose}
		>
			<Button
				sx={{
					padding: 0,
					justifyContent: 'flex-start',
					color: 'red'
				}}
				onClick={onClose}
			>
				<CloseIcon/>
			</Button>
			<List>
				{"Personal techs"}
				{['Smartphones', 'Computer Details', 'Gadgets'].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{getIcon(text)}
							</ListItemIcon>
							<ListItemText primary={text}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider/>
		</Box>
	);

	return (
		<Drawer
			open={open}
			onClose={onClose}
			anchor="right"
		>
			{DrawerContent}
		</Drawer>
	);
}

export default SideDrawer;