import React from 'react'
import { motion } from 'framer-motion'

export const Button = ({className, size = "default", children, ...props}) => {

  

    //classes that apply for every button
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) bg-(--color-primary) text-white hover:bg-(--color-primary)/90 shadow-large shadow-(--color-primary)"


    //pre configuration for different button sizings - default = default
    const sizeClasses = {
        sm: "px-5 py-2 text-sm",
        default: "px-6 py-3 text-md", //  <-- default size
        lg: "px-8 py-4 text-lg"
    }

    //collecting the classes before applying the them
    //${className} just in case that I want to add more classes that are not part of the predefined 
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
  return (
    <motion.button className={classes} {...props} whileHover={{scale: 1.02 , transition: {duration: 0.3}}} whileTap={{scale: 0.97}}>
        <span className='relative flex items-center justify-center gap-2'>{children}</span>     
    </motion.button>
  )
}

