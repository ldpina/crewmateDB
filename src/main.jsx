// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Create from './create.jsx'; 
// import Gallery from './gallery.jsx'; 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="create" element={<Create />} />
//           <Route path="gallery" element={<Gallery />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home.jsx'; 
import Create from './create.jsx'; 
import Gallery from './gallery.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
