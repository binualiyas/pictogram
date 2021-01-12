import React from "react";
import {motion} from 'framer-motion'

const Model = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
        setSelectedImg(null);
    }
  };
  return (
    <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4}}>
      <motion.img src={selectedImg} alt=" "
      initial={{y:'-100vh'}} 
      animate={{y:'0'}}
      transition={{delay:0.5}}/>
    </motion.div>
  );
};

export default Model;
