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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function SideDrawer({ open, onClose }) {
    const iconMapping = {
        'Smartphones': <SmartphoneIcon sx={{ color: 'black' }} />,
        'Computer Details': <DesktopWindowsOutlinedIcon color="black" />,
        'Gadgets': <WatchOutlinedIcon sx={{color: 'black'}} />,
    };

    const getIcon = (text) => iconMapping[text] || null;

    const DrawerContent = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
                {"Personal techs"}
                {['Smartphones', 'Computer Details', 'Gadgets'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {getIcon(text)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={onClose}>
            {DrawerContent}
        </Drawer>
    );
}

export default SideDrawer;