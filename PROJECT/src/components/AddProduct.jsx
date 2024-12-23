import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    image: "",
    price: "",
    category: "",
  });

  const handleChange = (a) => {
    const { name, value } = a.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log('Product submitted:', formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}
    >
      <TextField 
        fullWidth
        label="Product Name"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
      
        name="file"
        value={formData.image}
        onChange={handleChange}
        margin="normal"
        required
        type="file"
      />
      <TextField
        fullWidth
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
        required
      />
      <center><Button type="submit"variant="contained"color="primary">
        ADD
      </Button></center>
    </Box>
  );
};

export default AddProduct;