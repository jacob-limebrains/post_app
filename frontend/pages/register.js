import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import {Box, Grid, Paper, Button, Avatar, TextField, Link} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {SERVER_IP} from "../api/api";

import Layout from "../components/layouts/layout";


const Register = () => {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_Password] = useState('');

    useEffect(() => {
        if (Cookies.get('token')) {
            router.push('/main')
        }
    }, [Cookies.get('token')])

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleRe_PasswordChange = e => {
        setRe_Password(e.target.value)
    }

    const handleUserRegister = () => {
        if (password !== re_password)
            alert("Password and Re_Password must be the same")
        else {
            axios.post(`${SERVER_IP}/api/users/`, {
                username,
                email,
                password
            }).then(response => {
                alert("Create new account " + response.status);
                router.push('/login')
            }).catch(error => {
                // console.log(error.response.data);
                const errors = [];
                for (const [err, value] of Object.entries(error.response.data)) {
                    errors.push(value.toString());
                }
                alert(errors.join("\n"));
            })
        }
    }

    return (
        <Layout>
            <Grid>
                <Paper elevation={10} style={{padding: 20, height: '45vh', width: 320, margin: '20vh auto'}}>
                    <Grid align='center'>
                        <Avatar sx={{bgcolor: '#1bbd7e'}} style={{marginBottom: 20}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <Grid align='center'>
                        <TextField label='Username' placeholder='username' variant='filled' fullWidth required
                                   onChange={handleUsernameChange}/>
                        <TextField label='Email' placeholder='email' variant='filled' fullWidth required
                                   onChange={handleEmailChange} type='email'/>
                        <TextField label='Password' placeholder='password' variant='filled' fullWidth required
                                   onChange={handlePasswordChange} type='password'/>
                        <TextField label='Re-Password' placeholder='re_password' variant='filled' fullWidth required
                                   onChange={handleRe_PasswordChange} type='password'/>
                    </Grid>
                    <Grid sx={{marginTop: 3}} align='center'>
                        <Button type='submit' variant='outlined' sx={{'&:hover': {boxShadow: `0 0 20px 20px #2196f3`}}}
                                fullWidth onClick={handleUserRegister}>Sign in</Button>
                        <Box sx={{marginTop: 2}} fullWidth>Already have an account? <Link href='/login'
                                                                                          color='primary.light'
                                                                                          sx={{marginLeft: 1}}>Login!</Link></Box>
                        <Button variant="contained" fullWidth sx={{mt: 5}} onClick={() => router.push('/')}>Go back to
                            main
                            page</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Layout>
    );
}

export default Register