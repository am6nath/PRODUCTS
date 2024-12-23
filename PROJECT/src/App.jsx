import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';


const App = () => {
  return (
<div>
<Navbar/>
<Routes>
  <Route path='/H' element={<Home/>}/>
  <Route path='/add' element={<AddProduct/>}/>
 </Routes>
</div>
  
  );
};

export default App;