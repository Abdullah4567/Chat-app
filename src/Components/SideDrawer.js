import { Avatar, Box, Button, Drawer, Menu, MenuItem, MenuList, Tooltip, Typography } from '@mui/material'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../contextProvider/AuthProvider';
import { Modal, Backdrop } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';


const SideDrawer = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        borderRadius: 2
    };
    const { userInfo, handleLogout } = useContext(AuthContext)
    const navigate = useNavigate();
    const [search, setsearch] = useState("")
    const [searchResult, setsearchResult] = useState("")
    const [loading, setloading] = useState(false)
    const [anchorEl, setanchorEl] = useState(null)
    const [open, setopen] = useState(false)
    const [modal, setmodal] = useState(false)
    const [isDrawerOpen, setisDrawerOpen] = useState(false)
    const handleClose = () => {
        setanchorEl(null);
        setopen(false);
    }

    const closeModal = () => {
        // console.log("I am closed")
        setmodal(false);
    }
    return (
        <>
            <Modal
                open={modal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card >
                        <CardActionArea>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Avatar name={userInfo.user ? userInfo.user?.name : "Guest user"}
                                    src={userInfo ? userInfo.user?.picture : null}
                                    sx={{ width: 150, height: 150 }}
                                />
                            </Box>
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"

                                }}>
                                    {userInfo.user != null ? userInfo.user.name : "Anonymous"}
                                </Typography>
                                <Typography variant="h6" component="div" color="text.secondary" sx={{
                                    padding: "2px",
                                    marginTop: "2px"
                                }}>
                                    Email :  {userInfo.user != null ? userInfo.user.email : "anonymous"}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Modal>
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
                        <Typography variant="button" component="" onClick={() => setisDrawerOpen(true)}>
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
                        <Avatar name={userInfo ? userInfo.user?.name : "Guest user"}
                            src={userInfo ? userInfo.user?.picture : null} />
                        <ArrowDropDownRoundedIcon fontSize="medium" />
                    </Button>
                    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                        <MenuList>
                            <MenuItem onClick={handleClose} divider={true} >
                                <span onClick={() => setmodal(true)}> My Profile</span>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <span onClick={handleLogout}>
                                    Logout
                                </span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
                <Box p={2}>
                    <Typography variant="h5" component="div">
                        <TextField
                            // required
                            name="search"
                            value={search}
                            // id="outlined-required"
                            label="Search by Name or email"
                            // autoComplete='off'
                            size='small'
                            onChange={(e) => setsearch(e.target.value)}
                        />
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default SideDrawer