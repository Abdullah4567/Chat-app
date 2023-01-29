import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, IconButton, Input, InputLabel, Typography, FormControl, FormGroup } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [Info, setInfo] = useState({
        name: "",
        email: "",
        password: "",
        picture: null
    })
    const handleChange = (e) => {
        setInfo({
            ...Info,
            [e.target.name]: e.target.value,
        })
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
                    <LockOutlinedIcon />
                </Avatar>
            </Box>
            <Box component={"form"} sx={{
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }}>
                <FormGroup onSubmit={handleSubmit} >
                    <FormControl>
                        <TextField
                            name="name"
                            value={Info.name}
                            required
                            id="name"
                            label="Name"
                            autoComplete='off'
                            size='small'
                            onChange={handleChange}
                        />
                        <TextField
                            name="email"
                            value={Info.email}
                            required
                            id="email"
                            label="Email Address"
                            autoComplete='off'
                            size='small'
                            onChange={handleChange}
                        />
                        <TextField
                            name="password"
                            value={Info.password}
                            required
                            id="outlined-password-input"
                            label="Password"
                            autoComplete="current-password"
                            size='small'
                            InputProps={{ endAdornment: <ShowButton /> }}
                            type={`${showPassword ? 'text' : 'password'}`}
                            onChange={handleChange}
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
                            <Input type="File" name="picture" required disableUnderline
                                onChange={(e) => {
                                    setInfo({
                                        ...Info,
                                        ...{ picture: e.target.files[0] }
                                    })
                                }} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '10px',
                        }}>
                            <Button type="submit" variant="contained" size="medium" color='info' sx={{
                                marginBottom: "2%"
                            }} onClick={handleSubmit}>
                                Sign Up
                            </Button>
                        </Box>
                    </FormControl>
                </FormGroup>
            </Box>
        </>
    )
}

export default SignUp
