import React from "react";
import { motion } from "motion/react";

function Footer() {
    

    return (
        <motion.div
             initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true}}
         className="bg-gray-900 pt-7  pb-7 px-4 md:px-20 w-full overflow-hidden ">
            <div className="container mx-auto flex justify-center text-gray-400">
                Copyright 2025 © Sanjay Kumawat - All Right Reserved.
            </div>
        </motion.div>
    );
}

export default Footer;