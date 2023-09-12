import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ width: 250, height: 320, background: 'rgb(38, 37, 37)', border: '3px solid rgb(55, 54, 54)', color: 'white'}}>
      <CardMedia
        component="img"
        height="200"
        style = {{objectFit: 'fill', padding: 5}} 
        image= {props.Imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontSize: 18, textAlign: 'center' }}>
         {props.Titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'yellow', fontSize: 12, textAlign: 'center' }}>
            {props.Descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{width:'100%', display: 'flex', justifyContent: 'end'}}>
          <img src={props.Git} alt="GitHub" style={{width: 20, height: 20}} />
        </div>
      
      </CardActions>
    </Card>
  );
}
