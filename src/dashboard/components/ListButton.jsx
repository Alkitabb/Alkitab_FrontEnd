import { Badge, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function ListButton({ to, inactiveIcon, activeIcon, open, location, primaryItemText, secondaryItemText, notification, onClick }) {
    const isSelected = location.pathname === to;

    return (
        <NavLink to={to}>
            <ListItemButton
                sx={{
                    py: 1.5,
                    borderRadius: 3,
                    "&.Mui-selected": {
                        backgroundColor: "#7017E0",
                        color: '#ffffff'
                    },
                    "&.Mui-hover": {
                        backgroundColor: "#6D83EC",
                        outline: 'none',
                        color: '#ffffff'
                    },
                    // ":hover": {
                    //     backgroundColor: "#7017E0",
                    //     color: '#ffffff'
                    // },
                }}
                selected={isSelected}
                onClick={onClick}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <Badge badgeContent={notification ? notification : null} color='warning'>
                        {isSelected ? activeIcon : inactiveIcon}
                    </Badge>
                </ListItemIcon>

                <ListItemText primary={primaryItemText} secondary={secondaryItemText} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </NavLink>
    );
}

export default ListButton;
