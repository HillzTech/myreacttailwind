import React from 'react';
import { Navbar } from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ServicePage } from './Pages/ServicePage';
import { Home, HomePage } from './Pages/HomePage';
import {BioPage}from './Pages/biopage'
import { Contact } from './Components/Contact';
import Footer from './Components/Footer';






function App() {
  return (
    <div>
      <BrowserRouter >
      <Navbar />
    
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='ServicePage' element={<ServicePage/>}/>
      <Route path='BioPage' element={<BioPage/>}/>
      
      

      </Routes>
      

      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
