import {Box, Container, Grid, Typography, Card, CardContent} from '@mui/material'
import Cookies from "js-cookie";

import MainNavbar from "../../components/main_navbar";
import Custom404 from "../404";
import Layout from "../../components/layouts/layout";

import {articles, news} from "../../lib/article_nodb";

const Article = ({title, description, author}) => {
    return (
        <Box>
            <CardContent sx={{flexGrow: 1}}>
                <Typography variant='h2' color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    Author: {author}
                </Typography>
            </CardContent>
        </Box>
    );

}

const Home = () => {
    if (Cookies.get('username')) {
        return (
            <Layout>
                <Container sx={{mt: 20, width: '100%', flexGrow: 1}} align='center'>
                    <MainNavbar/>
                    <Box sx={{
                        display: {xl: 'inline-block', md: 'inline-block', sm: 'block'},
                        backgroundColor: 'secondary.dark',
                        width: {xl: '40%', sm: '60%'}
                    }}>
                        <Typography variant='h3'>Articles</Typography>
                        {articles.map(article => <Article key={article.id} title={article.title}
                                                          description={article.description} author={article.author}/>)}
                    </Box>
                    <Box sx={{
                        display: {xl: 'inline-block', md: 'inline-block', sm: 'block'},
                        backgroundColor: 'secondary.dark',
                        width: {xl: '40%', sm: '60%'},
                        ml: {xl: 10, sm: 0},
                        mt: {xl: 0, sm: 10, xs: 10}
                    }}>
                        <Typography variant='h3'>News</Typography>
                        {news.map(info => <Article key={info.id} title={info.title} description={info.description}
                                                   author={info.author}/>)}
                    </Box>
                </Container>
            </Layout>
        );
    } else {
        return (
            <Custom404/>
        )
    }

}

export default Home;