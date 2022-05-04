import React, {useState} from "react";

import {Button, Grid, Paper, Avatar, TextField, Typography} from "@mui/material";

import {useRouter} from "next/router";

import PersonIcon from '@mui/icons-material/Person';

import Layout from "../../components/layouts/layout";

import Cookies from "js-cookie";

const UserAccount = () => {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [re_newPassword, setRe_NewPassword] = useState('');

    const handleBackToMainPage = () => {
        //TODO zrobic sprawdzenie czy uzytkownik nie wprowadzil jakis danych i wyswietlic alert
        router.push('/main')
    }

    return (
        <Layout>
            <Grid>
                <Paper elevation={10} style={{
                    padding: 20,
                    minHeight: '40vh',
                    width: '70vw',
                    margin: '20vh auto',
                    borderRadius: '20px'
                }}>
                    <Grid align='center'>
                        <Avatar sx={{bgcolor: '#1bbd7e'}} style={{marginBottom: 20}}>
                            <PersonIcon/>
                        </Avatar>
                        <h2>Update your data</h2>
                    </Grid>
                    <Grid align='center' sx={{marginTop: 8}}>
                        <Typography variant='h6'>Your name: </Typography>
                        <TextField label={Cookies.get('username').toString()} placeholder='New name' variant='filled'
                                   sx={{width: '60%'}} onChange={e => setUsername(e.target.value)} required
                        />
                        <Typography variant='h6'>Your email: </Typography>
                        <TextField label='Email' placeholder='New email' variant='filled' sx={{width: '60%'}} required
                                   type='email' onChange={e => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid align='center' sx={{mt: 5}}>
                        <Typography variant='h6'>
                            Set a new password:
                        </Typography>
                        <TextField label='Old password' placeholder='old password' variant='filled' sx={{width: '60%'}} required
                                   type='password' onChange={e => setOldPassword(e.target.value)}/>
                        <TextField label='New password' placeholder='New password' variant='filled' sx={{width: '60%'}} required
                                   type='password' onChange={e => setNewPassword(e.target.value)}/>
                        <TextField label='New re_password' placeholder='New re_password' variant='filled' sx={{width: '60%'}} required
                                   type='password' onChange={e => setRe_NewPassword(e.target.value)}/>
                    </Grid>
                    <Grid sx={{marginTop: 8}} spacing={4} align='center'>
                        <Button type='submit' sx={{m: 1, '&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}}
                                variant='contained'
                        >Update data</Button>
                        <Button type='submit' sx={{m: 1, '&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}}
                                variant='contained'
                                onClick={handleBackToMainPage}>Go to main page</Button>

                    </Grid>
                </Paper>
            </Grid>
        </Layout>
    );
}

export default UserAccount