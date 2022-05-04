import React from "react";

import {Typography, Card, CardHeader, CardMedia, CardContent, Avatar, IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = ({post}) => {
    return (
        <Card sx={{
            maxWidth: "30%",
            flexGrow: 1,
            backgroundColor: 'secondary.dark',
            m: {xl: 2, lg: 3, md: 2, sm: 3, xs: 5},
            width: {xl: '20%', lg: '30%', md: '40%', sm: '60%'},
            borderRadius: '20px', float: 'left'
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'royalblue'}} aria-label="recipe">
                        {post.author.toString().charAt(0).toLocaleUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={"Added by: " + post.author}
                subheader="September 14, 2016"
            />
            <CardMedia component='img' height='194' image={post.image} alt='Some Image'/>
            <CardContent>
                <Typography variant='h6'>
                    {post.title}
                </Typography>
                <Typography variant='body2'>
                    {post.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;