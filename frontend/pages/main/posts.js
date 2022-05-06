import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import Layout from "../../components/layouts/layout";
import {Container, Typography, Grid, Box} from "@mui/material";
import WrongUserData from "../wrong_data";

import {news} from "../../lib/article_nodb";

import Post from "../../components/post";
import axios from "axios";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/posts/', {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Token ${Cookies.get('token')}`
            }
        }).then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
            .catch(err => console.log(err))
    }, [])

    if (Cookies.get('username') && (Cookies.get('token') === Cookies.get('auth'))) {
        return (
            <Layout>
                <Container sx={{mt: 20, width: '100%', flexGrow: 1}} align='center'>
                    <Typography variant='h3'>Posts</Typography>

                    <Grid container spacing={1}>
                        {posts.map(post => <Post key={post.id} post={post}/>)}
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