import React from "react";

import {useRouter} from "next/router";

import Cookies from "js-cookie";
import {Avatar, Button, Grid, Paper, Link} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Layout from "../components/layouts/layout";
import Typography from "@mui/material/Typography";

const WrongUserData = () => {

    const handleWrongData = () => {
        Cookies.remove('username');
        Cookies.remove('token');
    }

    return (
        <Layout>
            <Grid>
                <Paper elevation={10} style={{padding: 20, height: '40vh', width: 320, margin: '20vh auto'}}>
                    <Grid align='center'>
                        <Avatar sx={{bgcolor: '#1bbd7e'}} style={{marginBottom: 20}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography variant='h4' sx={{color: 'red', mt: 5}}>Wrong User data</Typography>
                    </Grid>
                    <Grid align='center' sx={{marginTop: 4}}>
                        <Typography variant='h6'>
                            Looks like some your data might not be correct. Please click the button below to reset user log
                            settings!
                        </Typography>
                    </Grid>
                    <Grid sx={{marginTop: 3}} align='center'>
                        <Link href='/login'><Button variant="contained" sx={{mt: 10, '&:hover': {boxShadow: "0 0 20px 20px #2196f3"}}} onClick={handleWrongData()} fullWidth>Reset</Button></Link>
                    </Grid>
                </Paper>
            </Grid>
        </Layout>
    );
}

export default WrongUserData;