import Image from "next/image";

import {Container, Grid, Paper, Box, Typography} from "@mui/material";

import MainImg from '../lib/img/MainImage.png'

import Navbar from "../components/navbar";

const Breaker = () => {
    return (
        <Container fullWidth sx={{flexGrow: 1}}>
            <Box sx={{
                height: '5px',
                width: '100%',
                borderRadius: '10px',
                marginTop: 6,
                marginBottom: 6,
                backgroundColor: 'rgb(33, 144, 235)'
            }}>
            </Box>
        </Container>
    );
}

const Page = () => {
    return (
        <Container sx={{minWidth: '100vw', minHeight: '100vh'}}>
            <Box>
                <Navbar/>
            </Box>
            <Box>
                <Box sx={{
                    backgroundImage: `url(${MainImg.src})`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    flexGrow: 1,
                    mt: 12,
                    width: '100%',
                    height: '500px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    opacity: 0.7
                }}>
                </Box>
            </Box>
            <Breaker/>
            <Box sx={{flexGrow: 1, mt: 9, p: 2}}>
                <Grid>
                    <Typography variant='h3' sx={{fontFamily: 'Monaco', color: 'orange'}}>Welcome on our
                        website</Typography>
                </Grid>
                <Grid>
                    <Typography variant='h6' sx={{mt: 2, ml: 5}}>
                        It's out first social media website and not the only one in the world. We're not the best!!! We
                        just want you to spend your time on our page. That's all.
                    </Typography>
                </Grid>
            </Box>
            <Breaker/>
            <Box id='about' sx={{flexGrow: 1, backgroundColor: 'secondary.dark', borderRadius: '10px', p: 2}}>
                <Grid>
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>About</Typography>
                    <Box>
                        <Typography variant='h6' sx={{ml: 2}}>
                            We are leader in black market. For the record you don't have to worry. It's all legal.
                        </Typography>
                    </Box>
                    <Typography variant='h4' sx={{fontWeight: 'bold', mt: 6}}>What can we offer</Typography>
                    <Box>
                        <Typography variant='h6' sx={{ml: 2}}>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis cum eius
                                nobis, quae quod. Cumque eaque enim, esse inventore nesciunt officiis perferendis quidem
                                reiciendis rerum! Laborum molestiae vel veritatis?
                            </div>
                            <div>Ad architecto atque consequuntur dicta dolore doloribus ea eius, enim est expedita
                                facilis fuga fugiat fugit impedit ipsa itaque laudantium, maiores nam neque nesciunt
                                placeat provident quaerat unde. Libero, quam.
                            </div>
                            <div>Aliquid, animi at, commodi culpa cum debitis deleniti dignissimos dolorum error facere
                                fugiat id illo impedit in numquam pariatur perferendis praesentium provident quisquam
                                recusandae saepe sequi vero voluptas voluptatem voluptatibus.
                            </div>
                            <div>Accusamus ducimus earum, eligendi eveniet exercitationem facere facilis in nemo quasi
                                similique, sunt vel. Animi error iusto maxime nostrum, quo repellendus? Aliquam
                                consequuntur deleniti dolor iste nobis omnis repellendus temporibus?
                            </div>
                            <div>Beatae, eum excepturi ipsum natus neque omnis recusandae tenetur veniam. A aliquid
                                aperiam, aut dicta eos eveniet explicabo fugiat ipsa minima praesentium provident quae
                                quaerat quo quod reiciendis, temporibus velit?
                            </div>
                            <div>A ab corporis, debitis earum eius error, est eum fuga ipsum maiores nobis optio,
                                perspiciatis placeat quos recusandae saepe tempora voluptatum! Ipsam laborum sapiente
                                velit. Alias architecto impedit nisi vitae.
                            </div>
                            <div>Amet aspernatur atque blanditiis cupiditate deleniti dolorum eaque, earum excepturi
                                fuga id illo in incidunt ipsum iure iusto labore laudantium minus natus nesciunt odio,
                                optio provident quasi quos reprehenderit voluptate.
                            </div>
                            <div>Distinctio, eius incidunt iste omnis provident qui quidem quo quod unde? Ad cumque,
                                dolore, doloribus fugit illo itaque libero nobis numquam provident quae repellat rerum,
                                saepe sapiente sed vero. Maiores!
                            </div>
                            <div>Est expedita maiores minima omnis. Accusamus consectetur ducimus eius enim
                                exercitationem illum inventore ipsum similique tenetur voluptatum? Beatae, ea magnam
                                natus nemo odit officiis optio repellendus sequi suscipit vero vitae.
                            </div>
                            <div>Autem dicta et eum nihil possimus qui sequi, similique sunt, tempora temporibus unde ut
                                vero. Corporis cupiditate doloremque, expedita fugit iste laudantium libero magnam
                                nulla, provident quidem repellat sapiente, vitae?
                            </div>
                        </Typography>
                    </Box>
                </Grid>
            </Box>
            <Breaker/>
            <Box id='contact' sx={{flexGrow: 1, borderRadius: '10px', p: 2}}>
                <Grid>
                    <Typography variant='h3' sx={{fontWeight: 'bold'}}>Contact</Typography>
                    <Box>
                        <Typography variant='h5'>Email: <i>we_are_with_you@yyyy.com</i></Typography>
                        <Typography variant='h5'>Support: <i>support@yyyy.com</i></Typography>
                        <Typography variant='h5'>Phone: <i>666-666-666</i></Typography>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default Page;