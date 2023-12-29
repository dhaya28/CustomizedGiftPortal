import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Navbar from './Navbar'
import Footer from './Footer';
import img1 from '../Asserts/birthday.webp';
import img2 from '../Asserts/personalized.webp';
import img3 from '../Asserts/christmas.webp';
import img4 from '../Asserts/choco.webp'
export default function ActionAreaCard() {
    return (
        <div>
            <Navbar /><br/>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <br></br>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={img1}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Special LED Lamp Speaker
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                ₹999
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                One Personalised Happy Birthday Bluetooth Multi Colour LED Speaker
                                Touch Lamp Portable Speaker
                                Warm-White LED Table Lamp
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={img2}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                3D Crystal Photo Cube
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                ₹1999
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We convert your 2D image to 3D structure and engrave it using precision laser technology inside the high quality imported crystal cubes. Your photo looks like a sculpture of the person inside the crystal cube.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={img3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Phool Jumbo Winter GiftBox
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                ₹2999
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Winter weaves a quiet magic, painting the world in cold dew and soft white and bringing promises of hopeful dreams and new beginnings. It is a time to sit back, relax and introspect on the year gone by
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image={img4}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                A Chocolate Gift Hamper
                            </Typography>
                            <Typography variant="h4" color="text.secondary">
                                ₹1199
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                You can easily find a wide range of chocolate hampers that consist of collection of cookies, green tea bags, gourmet chocolate hamper, fruits and other food items along with the mouth-watering chocolates.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <br></br>
            </div>
            <br/>
            <Footer />
        </div>
    );
}
