import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets"
import { motion } from "motion/react";


function Navbar() {
    const [showMobileMenu, setshowMobileMenu] = useState(false);
    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        };
    }, [showMobileMenu])

    return (
        <>
            <div
            
             className="absolute top-0 left-0 w-full z-10">
                <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                    <img className="h-17" src={assets.logo} alt="" />


                    <ul className="hidden md:flex gap-7 text-white">
                        <a href="#header" className="cursor-pointer hover:text-gray-400">Home</a>
                        <a href="#about" className="cursor-pointer hover:text-gray-400">About</a>
                        <a href="#projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                        <a href="#testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
                    </ul>
                    <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
                    <img src={assets.menu_icon} onClick={(() => { setshowMobileMenu(true) })} className="md:hidden w-7 cursor-pointer" alt="" />
                </div>

                {/* Mobile---Menu */}

                <div className={` md:hidden ${showMobileMenu ? " fixed w-full" : "h-0 w-0"} transition-all right-0 top-0 bottom-0 overflow-hidden bg-white`}>
                    <div className="flex justify-end p-6 cursor-pointer">
                        <img src={assets.cross_icon} className=" w-6" onClick={(() => { setshowMobileMenu(false) })} alt="" />
                    </div>

                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <a href="#header" onClick={(() => { setshowMobileMenu(false) })} className="px-4 py-2 rounded-full inline-block">Home</a>
                        <a href="#about" onClick={(() => { setshowMobileMenu(false) })} className="px-4 py-2 rounded-full inline-block" >About</a>
                        <a href="#projects" onClick={(() => { setshowMobileMenu(false) })} className="px-4 py-2 rounded-full inline-block">Projects</a>
                        <a href="#testimonials" onClick={(() => { setshowMobileMenu(false) })} className="px-4 py-2 rounded-full inline-block">Testimonials</a>
                    </ul>
                </div>


            </div>
        </>
    );
}

export default Navbar;