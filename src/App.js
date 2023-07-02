import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
// import ImageGallery from 'react-image-gallery';



function App() {

  // const images = [
  //   {
  //     original: 'https://picsum.photos/id/1018/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1015/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1019/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //   },
  // ];

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </Router>

  );
}







export default App;

