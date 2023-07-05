import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery';


function App() {



  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
        </Routes>
      </Router>

  );
}







export default App;

