import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import './Navbar.css';
function Navbar()
{
    
    return(
        
     <div className="div">  
    <ul className="ul">
       <li><Link to="/home" >Home</Link></li>  
       <li><Link to="/services">Services</Link></li>  
       <li><Link to="/blogs">Blogs</Link></li>  
       <li><Link to="/about">About</Link></li>   
       <li><motion.button
         whileHover={{
             scale:1.7,
             textShadow:"0px 0px 8px rgb(255,255,255)",
             boxShadow:"0px 0px 8px rgb(255,255,255)"
         }}
       
       ><Link to="/Sign_in" >Sign in</Link></motion.button></li>
       <li><motion.button
         whileHover={{
             scale:1.7,
             textShadow:"0px 0px 8px rgb(255,255,255)",
             boxShadow:"0px 0px 8px rgb(255,255,255)"
         }}
       
       ><Link to="/Sign_up" >Sign up</Link></motion.button></li>
    </ul> 
    
    </div>   
    );
}

export default Navbar;