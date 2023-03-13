import { Avatar, Box, Button, Menu, MenuItem, MenuList, Tooltip, Typography } from '@mui/material'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../contextProvider/AuthProvider';

const SideDrawer = () => {
    const { userInfo } = useContext(AuthContext)
    const [search, setsearch] = useState("")
    const [searchResult, setsearchResult] = useState("")
    const [loading, setloading] = useState(false)
    const [anchorEl, setanchorEl] = useState(null)
    const [open, setopen] = useState(false)
    const handleClose = () => {
        setanchorEl(null);
        setopen(false);
    }
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: "white",
                    borderWidth: "10px",
                    width: "100%",
                }}
            >
                <Tooltip title="Search User" placement="bottom">
                    <Button variant="">
                        <SearchIcon fontSize="small" />
                        <Typography variant="button" component="">
                            Search User
                        </Typography>
                    </Button>
                </Tooltip>
                <Typography variant="button" component="">
                    Quick Chat
                </Typography>
                <Box>
                    <Button >
                        <NotificationsNoneRoundedIcon fontSize="medium" />
                    </Button>
                    <Button variant="button" component="" onClick={(e) => {
                        setanchorEl(e.currentTarget);
                        setopen(true);
                    }}>
                        <Avatar name={userInfo ? userInfo.user.name : "Guest user"}
                            src={userInfo ? userInfo.user.picture : null} />
                        <ArrowDropDownRoundedIcon fontSize="medium" />
                    </Button>
                    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                        <MenuList>
                            <MenuItem onClick={handleClose} divider={true} >
                                My Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}

export default SideDrawer