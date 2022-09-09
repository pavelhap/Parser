import React from 'react'
// import {Item, Icon, Button, Label} from 'semantic-ui-react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const setText = (s) => s.length >=600 ? s.substr(0,600) : s;



const Post = ({title, text, image, url}) => {
    return (

    <Card sx={{ maxWidth: 845 }}>
    <CardMedia
      component="img"
      height= '300px'
      image={image}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {setText(text)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={url}>Learn More </Button>
      {/* <Button size="small">Share</Button> */}
    </CardActions>
  </Card>


    )
}

export default Post;



