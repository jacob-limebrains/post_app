import React from "react";
import Cookies from "js-cookie";
import Layout from "../../components/layouts/layout";
import {Container, Typography, Grid} from "@mui/material";
import WrongUserData from "../wrong_data";

import {news} from "../../lib/article_nodb";

import Post from "../../components/post";

const Posts = () => {
    if (Cookies.get('username') && (Cookies.get('token') === Cookies.get('auth'))) {
        return (
            <Layout>
                <Container sx={{mt: 20, width: '100%', flexGrow: 1}} align='center'>
                    <Typography variant='h3'>Articles</Typography>

                    <Grid container spacing={1}>
                        {news.map(nw => <Post key={nw.id} post={nw}/>)}
                    </Grid>
                </Container>
            </Layout>
        );
    } else {
        return (
            <WrongUserData/>
        )
    }
}

export default Posts;