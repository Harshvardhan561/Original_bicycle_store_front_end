
import Home from './Components/Home/Home.js';
import Sign_in  from './Components/Sign-in/Sign_in.js';
import Sign_up  from './Components/Sign-up/Sign_up.js';
import Services from './Components/Services/Services.js';
import Blogs from './Components/Blogs/Blogs.js';
import About from './Components/About/About.js';
import {BrowserRouter,Route, Link  , Switch, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path ='/home' element={<Home/>} />
      <Route exact path ='/services' element={<Services/>}  />
      <Route exact path ='/blogs' element={<Blogs/>}  />
      <Route exact path ='/about' element={<About/>}  />
      <Route exact path ='/Sign_in' element={<Sign_in/>}  />
      <Route exact path ='/Sign_up' element={<Sign_up/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;