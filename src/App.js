import React from 'react';
import { Navbar } from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ServicePage } from './Pages/ServicePage';
import { AboutPage } from './Pages/AboutPage';
import { Home, HomePage } from './Pages/HomePage';
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
      <Route path='AboutPage' element={<AboutPage/>}/>
      
      

      </Routes>
      <Contact />
      <Footer />

      </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;
