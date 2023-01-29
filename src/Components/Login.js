import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [Info, setInfo] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setInfo({
            ...Info,
            [e.target.name]: e.target.value,
        });
    }
    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const ShowButton = () => {
        const noPointer = { cursor: 'pointer' };
        return (
            <IconButton style={noPointer} onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton >
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Info)
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
                    <LoginIcon />
                </Avatar>
            </Box>
            <Box component={"form"} sx={{
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }}>
                <div>
                    <TextField
                        required
                        name="email"
                        value={Info.email}
                        id="outlined-required"
                        label="Email Address"
                        autoComplete='off'
                        size='small'
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="password"
                        value={Info.password}
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        size='small'
                        InputProps={{ endAdornment: <ShowButton /> }}
                        type={`${showPassword ? 'text' : 'password'}`}
                        onChange={handleChange}
                    />
                </div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                }}>
                    <Button type="submit" variant="contained" size="medium" color='info' sx={{
                        marginBottom: "2%"
                    }} onClick={handleSubmit}>
                        Sign In
                    </Button>
                    <Button variant="contained" size="medium" color='error' onClick={(e) => {
                        setInfo({
                            email: 'test@gmail.com',
                            password: 'pass123',
                        })
                        handleSubmit(e);
                    }}>
                        Get Guest Credentials
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Login
