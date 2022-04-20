import React from "react";
import './Home.css';
import {motion} from 'framer-motion';
function Home()
{
    return(
       
    <div className="container">
      <motion.div
        animate={{
           x:150,
           opacity:1
        }}
        // initial={{
        //     opacity:0.5
        // }}
        transition={{
            type:'spring',
            stiffness:400
            
        }}
        >
       <div className="div1">
      erform a wide range of tasks. A computer system is a "complete" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for "full" operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster.
       </div>
      </motion.div>
      

      <motion.div
        animate={{
           x:-450,
           opacity:1
        }}
        // initial={{
        //     opacity:0.1
        // }}
        transition={{
            type:'spring',
            stiffness:400
        }}
        >
      <div className="div2">
      erform a wide range of tasks. A computer system is a "complete" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for "full" operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster.
       </div>
       </motion.div>

       <motion.div
        animate={{
           x:150,
           opacity:1
        }}
        // initial={{
        //     opacity:0.1
        // }}
        transition={{
            type:'spring',
            stiffness:400
        }}
        >
      <div className="div3">
      erform a wide range of tasks. A computer system is a "complete" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for "full" operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster.
       </div>
       </motion.div>

    </div> 
    
    );
}

export default Home;