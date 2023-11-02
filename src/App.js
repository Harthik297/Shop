import React from 'react';
import NavBar from './Component/NavBar';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Orders from './Pages/Orders';
import Flowers from './Pages/Flowers';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Component/Footer';




const App = () => {
  return (
    <div class="body">
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route element={<Home/>} path="/home"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Orders/>} path="/orders"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<Flowers/> } path='/flowers'/>
        
        </Routes>
        <Footer/>
        
        </BrowserRouter>
        
        
        
    </div>
  );
};

export default App;