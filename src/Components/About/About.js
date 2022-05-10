import React from "react";
import img1 from "./DSC_0530 copy.jpg";
import './About.css';
import {motion} from 'framer-motion';
function About()
{
    return(
    <div className="outer">
     

     <motion.div
        animate={{
           x:40,
           opacity:1
        }}
        initial={{
            opacity:0.5
        }}
        transition={{
            type:'spring',
            stiffness:500
            
        }}
        >
          <img src={img1}/>
         </motion.div> 


      <motion.div
        animate={{
           y:40,
           opacity:1
        }}
        initial={{
            opacity:0.5
        }}
        transition={{
            type:'spring',
            stiffness:400
            
        }}
        >
        <div className="para">
         It's my pleasure to speak with you. I am (Your Name). Basically, I belong to (City Name). I have been living in (City Name) for (No. of years/months) now. I stay here with my family. Besides my parents, there is a younger brother in my family. Currently, I am exploring job opportunities in the (Domain Name) as I have recently finished (Degree Name) from (University Name).

         I am very interested in the (Domain of your interest). That was the reason I chose to pursue higher studies in (Program Name). Post that, my internship experience and other practical projects in the college further boosted my interest in (Field name) as a full-time career option.

         Not only am I passionate about the field I graduated in (Mention field), I am also inclined towards creative activities such as dancing, painting, acting, etc. I have always been an active student in school and college. I have participated in many cultural events during my school and college days and have won many awards. 
        </div> 
      </motion.div>
      
    </div> 
    );
}

export default About;