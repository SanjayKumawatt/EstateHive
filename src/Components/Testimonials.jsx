import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

function Testimonials() {
    return (

        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{once:true}}
            className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden " id="testimonials">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Customer
                <span className="underline underline-offset-4 font-light decoration-1 under ml-1.5">Testimonials</span>
            </h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">Real Stories from Those Who Found Home with Us</p>

            <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((customer, index) => (
                    <div key={index} className="max-w-[340px] border border-gray-200 shadow-lg rounded px-8 py-12 text-center" >
                        <img className="w-20 h-20 rounded-full max-auto mb-4 m-auto" src={customer.image} alt={customer.alt} />
                        <h2 className="text-xl text-gray-700 font-medium">{customer.name}</h2>
                        <p className="text-gray-500 text-sm mb-4 ">{customer.title}</p>
                        <div className="flex justify-center gap-1 text-red-500 mb-4">
                            {Array.from({ length: customer.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className="text-gray-600">{customer.text}</p>
                    </div>
                ))}
            </div>


        </motion.div>

    );
}

export default Testimonials;