import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid2 from '@mui/material/Grid2';



export async function getStaticProps() {
  const res = await fetch('https://api.github.com/search/users?q=YOUR_NAME');
  const { items } = await res.json();

  return {
    props: { items },
  };
}

export default function Page({ items }) {
  return (
    <Grid2 container xs={12} spacing={2} justifyContent="center"  >
      {items.map((user) => (
        <Grid2 key={user.id} item xs={4}>
          <Card  sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                src={user.avatar_url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.login}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>



      ))}
    </Grid2>
  );
}
