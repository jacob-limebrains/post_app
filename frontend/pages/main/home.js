import {Box, Container, Grid, Typography, Card, CardContent} from '@mui/material'
import Cookies from "js-cookie";

import WrongUserData from "../wrong_data";
import Layout from "../../components/layouts/layout";

import {articles, news} from "../../lib/article_nodb";

const Article = ({title, description, author}) => {
    return (
        <Box sx={{
            maxWidth: '30%',
            minHeight: 350,
            maxHeight: 720,
            flexGrow: 1,
            backgroundColor: 'secondary.dark',
            m: {xl: 2, lg: 3, md: 2, sm: 3, xs: 5},
            width: {xl: '20%', lg: '30%', md: '40%', sm: '60%'},
            borderRadius: '20px', float: 'left'
        }}>

            <Typography variant='h4' sx={{mt: 6}} color="text.secondary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body" component="div">
                {description}
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                Author: {author}
            </Typography>
        </Box>
    );

}

const Home = () => {
    if (Cookies.get('username') && (Cookies.get('token') === Cookies.get('auth'))) {
        return (
            <Layout>
                <Container sx={{mt: 20, width: '100%', flexGrow: 1}} align='center'>
                    <Typography variant='h3'>Articles</Typography>

                    <Grid container spacing={2}>
                        {articles.map(article => <Article key={article.id} title={article.title}
                                                          description={article.description} author={article.author}/>)}
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

export default Home;