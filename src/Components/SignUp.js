import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, IconButton, Input, InputLabel, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        console.log(showPassword);
    };
    const ShowButton = () => {
        const noPointer = { cursor: 'pointer' };
        return (
            <IconButton style={noPointer} onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton >
        )
    }
    return (
        <>
            <Box sx={{
                marginTop: '2%',
                display: "flex",
                justifyContent: "center",
            }}>
                <Avatar color="success" sizes='large' sx={{
                    bgcolor: "green",
                }} variant="circular">
                    <LockOutlinedIcon />
                </Avatar>
            </Box>
            <Box component={"form"} sx={{
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        autoComplete='off'
                        size='small'
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        autoComplete='off'
                        size='small'
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        size='small'
                        InputProps={{ endAdornment: <ShowButton /> }}
                        type={`${showPassword ? 'text' : 'password'}`}
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 1,
                        paddingLeft: 1,
                    }}>
                        <Typography variant="p" component="span" fontFamily="sans-serif" marginTop={1} fontWeight={"light"}>
                            Upload Your picture
                        </Typography>
                        <Input type="File" disableUnderline />
                    </Box>

                </div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                }}>
                    <Button variant="contained" size="medium" color='info' sx={{
                        marginBottom: "2%"
                    }} onClick={(e) => {
                        e.preventDefault();
                    }}>
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Login
