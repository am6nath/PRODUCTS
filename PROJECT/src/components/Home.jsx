import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [a, seta] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        seta(false);
      } catch (error) {
        console.error('Error',+ error);
        seta(false);
      }
    };
    fetchProducts();
  }, []);

  if (a) {
    return <CircularProgress />;
  }

  return (
    
    <Grid container spacing={5}>
      {
      products.map((product) => (
        <Grid item xs={14} sm={6} md={6} key={product.id}>
          <Card><br /><br /><br />
            <CardMedia
              component="img"
              height="200"
              width="600"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">{product.price}</Typography>
              <Typography variant="body2" color="textSecondary">{product.category}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;