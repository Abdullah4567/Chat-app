import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, IconButton, Input, FormGroup, FormControl, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AlertContext } from '../contextProvider/AlertProvider'
import { SignUp as ValidateSignUp } from '../services/Auth'

const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext)
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(Info)
        if (Info.name && Info.email && Info.password && Info.picture) {
            const res = await ValidateSignUp(Info);
            console.log(res);
            if (res.success) {
                showAlert("Sign Up Successfull", "success")
                localStorage.setItem('user', JSON.stringify(res.data));
                setTimeout(() => {
                    navigate('/chats')
                }, 2000);
            }
            else {
                showAlert(res.message, "error")
            }
        }
        else {
            showAlert("Please Fill all Fields", "error")

        }

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
                            <Input type="File" accept="image/jpeg,image/png" name="picture"
                                required disableUnderline
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
