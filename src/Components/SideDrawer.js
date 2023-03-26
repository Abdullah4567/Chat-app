import { Avatar, Box, Button, Menu, MenuItem, MenuList, Tooltip, Typography } from '@mui/material'
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

const SideDrawer = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };
    const { userInfo } = useContext(AuthContext)
    const [search, setsearch] = useState("")
    const [searchResult, setsearchResult] = useState("")
    const [loading, setloading] = useState(false)
    const [anchorEl, setanchorEl] = useState(null)
    const [open, setopen] = useState(false)
    const [modal, setmodal] = useState(false)
    const handleClose = () => {
        setanchorEl(null);
        setopen(false);
    }
    const closeModal = () => {
        console.log("I am closed")
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
                        <CardActionArea sx={{
                            border: "2px solid black"
                        }}>
                            <Avatar name={userInfo ? userInfo.user?.name : "Guest user"}
                                src={userInfo ? userInfo.user?.picture : null}
                                sx={{ width: 200, height: 200, border: "2px solid red" }}
                                classes="flex flex-justify-center"
                            />
                            {/* <CardMedia
                                component="img"
                                // height="140"
                                // image="https://res.cloudinary.com/dynlh5chd/image/upload/v1675446418/ChatApp/q6eqkubgtu9ja3nd7qep.jpg"
                                image={userInfo?.user?.picture}
                                alt="loading"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
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