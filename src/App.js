import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery';
import GalleryPagePrivate from './pages/gallery-private';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/gallery-private' element={<GalleryPagePrivate/>}/>
        </Routes>
      </Router>
  );
}

export default App;

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';
// import Home from './pages';
// import ContactPage from './pages/contact';
// import GalleryPage from './pages/gallery';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LazyLoad><Home /></LazyLoad>} />
//         <Route path="/contact" element={<LazyLoad><ContactPage /></LazyLoad>} />
//         <Route path="/gallery" element={<LazyLoad><GalleryPage /></LazyLoad>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;