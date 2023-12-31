import { Badge, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function ListButton({ to, inactiveIcon, activeIcon, open, location, primaryItemText, secondaryItemText, notification, onClick }) {
    const isSelected = location.pathname === to;

    return (
        <NavLink to={to}>
            <Tooltip title={primaryItemText} placement="right" arrow
                sx={{
                    display: open ? 'block' : 'none',
                }}
            >
                <ListItemButton
                    sx={{
                        py: 1,
                        borderRadius: 2,
                        marginBottom: 0.5,
                        "&.Mui-selected": {
                            backgroundColor: "#2C2D33",
                            color: '#ffffff'
                        },
                        "&.Mui-hover": {
                            backgroundColor: "#6D83EC",
                            outline: 'none',
                            color: '#ffffff'
                        },
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
            </Tooltip>
        </NavLink >
    );
}

export default ListButton;
