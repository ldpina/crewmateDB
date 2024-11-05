// import { useState } from 'react'
// import './App.css'
// import { Link, Outlet } from 'react-router-dom';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="sidenav">
//         <Link to="/" style={{ color: 'white', margin: '20px' }}>Home</Link>
//         <Link to="/create" style={{ color: 'white', margin: '20px' }}>Create A Crewmate!</Link>
//         <Link to="/gallery" style={{ color: 'white', margin: '20px' }}>Crewmate Gallery</Link>
//       </div>

//       <div className = "whole-page">
//         <div className = "home-page">
//           <h1>Welcome to crewmate creator!</h1>
//           <h3>Here you can make your very own crewmates!</h3>
//           <img src = "https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" className = "welcome-images"/>
//           <img src = "https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png" className = "welcome-images"/>
//         </div>
//         <Outlet />
//       </div>
//     </>
//   )
// }

// export default App

import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="sidenav">
        <Link to="/" style={{ color: 'white', margin: '20px' }}>Home</Link>
        <Link to="/create" style={{ color: 'white', margin: '20px' }}>Create A Crewmate!</Link>
        <Link to="/gallery" style={{ color: 'white', margin: '20px' }}>Crewmate Gallery</Link>
      </div>
      <div className="whole-page">
        <Outlet />
      </div>
    </>
  );
}

export default App;
