import React from 'react'
import {motion} from 'framer-motion'

export default function RotateReady() {
    return (
        <div >
            <motion.img src='https://images-platform.99static.com//Gz9su2y6lfEKJDkwAMRJ1oYDa7M=/303x224:2183x2101/fit-in/500x500/projects-files/79/7947/794710/16582d52-f8cd-4484-8f4a-130f3f1137a0.png' alt='logoImage'
            animate={{rotate:360}} transition={{repeat:Infinity,repeatType:"reverse", duration:10}}
            style={{height:100,width:100}}
            ></motion.img>
        </div>
    )
}
