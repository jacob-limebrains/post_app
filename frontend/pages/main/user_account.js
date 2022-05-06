import React, {useState, useEffect} from "react";

import {Button, Grid, Paper, Avatar, TextField, Typography, Container} from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';

import Layout from "../../components/layouts/layout";

import Cookies from "js-cookie";
import axios from "axios";
import {SERVER_IP} from "../../api/api";

const UserAccount = () => {

    const [new_email, setNewEmail] = useState('');
    const [current_Password, setCurrentPassword] = useState('');
    const [new_Password, setNewPassword] = useState('');
    const [re_newPassword, setRe_NewPassword] = useState('');

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${SERVER_IP}/api/users/${Cookies.get('username')}`, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Token ${Cookies.get('token')}`
            }
        }).then(response => {
            setData(response.data)
        })
            .catch(error => console.log(error))
    }, [])

    const handleUserChangePassword = () => {
        axios.put(`${SERVER_IP}/api/change_password/`, {
                old_password: current_Password,
                new_password: new_Password,
                new_re_password: re_newPassword,
            },
            {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Token ${Cookies.get('token')}`
                }
            }
        ).then(response => {
            alert("Password has been updated " + response.status);
        }).catch(error => {
            // console.log(error.response.data);
            const errors = [];
            for (const [err, value] of Object.entries(error.response.data)) {
                errors.push(value.toString());
            }
            alert(errors.join("\n"));
        })
    }

    const handleUpdateUserEmail = () => {
        axios.put(`${SERVER_IP}/api/change_email/`, {
                new_email: new_email,
                current_password: current_Password
            },
            {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Token ${Cookies.get('token')}`
                }
            }
        ).then(response => {
            alert("Email has been updated " + response.status);
        }).catch(error => {
            const errors = [];
            for (const [err, value] of Object.entries(error.response.data)) {
                errors.push(value.toString());
            }
            console.log(current_Password)
            console.log(new_email)
            alert(errors.join("\n"));
        })
    }

    return (
        <Layout>
            <Grid>
                <Paper elevation={10} style={{
                    padding: 20,
                    minHeight: '40vh',
                    margin: '20vh auto',
                    borderRadius: '20px'
                }} sx={{width: {xl: '30%', md: '50vw', xs: '70%'}}}>
                    <Grid align='center'>
                        <Avatar sx={{bgcolor: '#1bbd7e'}} style={{marginBottom: 20}}>
                            <PersonIcon/>
                        </Avatar>
                        <h2>Update your data</h2>
                    </Grid>
                    <Grid align='center' sx={{marginTop: 8}}>
                        <Typography variant='h6'>Your ID: {data?.id}</Typography>
                        <Typography variant='h6'>Your name: {data?.username}</Typography>
                        <Typography variant='h6'>Your email: {data?.email}</Typography>
                        <TextField label='New Email' placeholder='enter new email' variant='filled'
                                   sx={{width: '60%', mt: 2}}
                                   required
                                   type='email' onChange={e => setNewEmail(e.target.value)}/>
                        <TextField label='Password' placeholder='password' variant='filled' sx={{width: '60%'}}
                                   required
                                   type='password' onChange={e => setCurrentPassword(e.target.value)}/>
                    </Grid>
                    <Container align='center' sx={{mt: 2}}>
                        <Button type='submit' sx={{m: 1, '&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}}
                                variant='contained' onClick={handleUpdateUserEmail}
                        >Set a new email</Button>
                    </Container>
                    <Grid align='center' sx={{mt: 5}}>
                        <Typography variant='h6'>
                            Set a new password:
                        </Typography>
                        <TextField label='Old password' placeholder='old password' variant='filled' sx={{width: '60%'}}
                                   required
                                   type='password' onChange={e => setCurrentPassword(e.target.value)}/>
                        <TextField label='New password' placeholder='New password' variant='filled' sx={{width: '60%'}}
                                   required
                                   type='password' onChange={e => setNewPassword(e.target.value)}/>
                        <TextField label='Repeat new password' placeholder='Repeat new password' variant='filled'
                                   sx={{width: '60%'}} required
                                   type='password' onChange={e => setRe_NewPassword(e.target.value)}/>
                    </Grid>
                    <Container align='center' sx={{mt: 2}}>
                        <Button type='submit' sx={{m: 1, '&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}}
                                variant='contained' onClick={handleUserChangePassword}
                        >Reset Password</Button>
                    </Container>
                </Paper>
            </Grid>
        </Layout>
    );
}

export default UserAccount