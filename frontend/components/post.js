import React from "react";

import {
    Typography,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({post}) => {
    console.log(post.image);
    return (
        <Card sx={{
            maxWidth: 345,
            position: 'relative',
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
                subheader={"Created: " + post.created}
            />
            <CardMedia component='img' height='194' image={"post.image.url"} alt='Some Image'/>
            <Typography variant='h5' sx={{mt: 1}}>
                    {post.title}
                </Typography>
            <Typography variant='body2' sx={{color: 'primary.dark'}}>
                {post.tags.map(tag => `#${tag} `)}
            </Typography>
            <CardContent>
                <Typography variant='body2' sx={{height: 50}}>
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <CommentIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;