import {useState} from "react";
import {Box, Grid, Paper, Button, Avatar, TextField, Link} from "@mui/material";

import {useRouter} from "next/router";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
        console.log(password)
    }

    const handleUserLogin = () => {
        console.log("sdsadsa");
    }

    return (
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
                    <Button type='submit' sx={{'&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}} variant='outlined' fullWidth onClick={handleUserLogin}>Sign Up</Button>
                    <Box sx={{marginTop: 2}} fullWidth>Don't have an account? <Link href='/register' color='primary.light'
                                                                                    sx={{marginLeft: 1}}>Register!</Link></Box>
                    <Button variant="contained" fullWidth sx={{mt: 5}} onClick={() => router.push('/')}>Go back to main page</Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Login