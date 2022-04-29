import {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import {useRouter} from "next/router";
import axios from "axios";

import {Box, Grid, Paper, Button, Avatar, TextField, Link} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {SERVER_IP} from "../api/api";

import Layout from "../components/layouts/layout";

const Login = () => {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (Cookies.get('token')) {
            router.push('/main')
            console.log(Cookies.get('token'));
        }
    }, [Cookies.get('token')])

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleUserLogin = () => {
        axios.post(`${SERVER_IP}/api/auth-token/`, {
            username,
            password
        }).then(response => {
            for (const [err, value] of Object.entries(response.data)) {
                Cookies.set('token', value.toString());
                Cookies.set('username', username);
            }
            router.push('/main');
        }).catch(error => {
            const errors = [];
            for (const [err, value] of Object.entries(error.response.data)) {
                errors.push(value.toString());
            }
            alert(errors.join("\n"));
        })
    }

    return (
        <Layout>
            <Grid>
                <Paper elevation={10} style={{padding: 20, height: '40vh', width: 320, margin: '20vh auto'}}>
                    <Grid align='center'>
                        <Avatar sx={{bgcolor: '#1bbd7e'}} style={{marginBottom: 20}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <Grid align='center' sx={{marginTop: 8}}>
                        <TextField label='Username' placeholder='username' variant='filled' fullWidth required
                                   onChange={handleUsernameChange}/>
                        <TextField label='Password' placeholder='password' variant='filled' fullWidth required
                                   onChange={handlePasswordChange} type='password'/>
                    </Grid>
                    <Grid sx={{marginTop: 3}} align='center'>
                        <Button type='submit' sx={{'&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}} variant='outlined'
                                fullWidth onClick={handleUserLogin}>Sign Up</Button>
                        <Box sx={{marginTop: 2}} fullWidth>Don't have an account? <Link href='/register'
                                                                                        color='primary.light'
                                                                                        sx={{marginLeft: 1}}>Register!</Link></Box>
                        <Button variant="contained" fullWidth sx={{mt: 5}} onClick={() => router.push('/')}>Go back to
                            main
                            page</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Layout>
    );
}

export default Login