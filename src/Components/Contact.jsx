import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

function Contact() {
    // const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "df638eeb-dcac-46a1-9f03-cd538f07617b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });


            const data = await response.json();

            if (data.success) {

                toast.success("Thank you for you submission!");
                event.target.reset();

            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-x-hidden" id="contact-us">
            <Toaster position="top-center" reverseOrder={false} /> {/* 👈 Add this */}


            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Contact
                <span className="underline underline-offset-4 font-light decoration-1 under ml-1.5">With Us</span>
            </h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">Ready to Make a Move? Let’s Build Your Future Together</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8" >
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Your Name" required name="name" />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" placeholder="Your Email" required name="email" />
                    </div>
                </div>
                <div className="my-6 text-left overflow-hidden">
                    Message
                    <textarea
                        className="w-full border border-gray-300 overflow-hidden rounded py-3 px-4 mt-2 h-48 resize-none"
                        name="message" placeholder="Message" required ></textarea>

                </div>
                <button className="bg-blue-600 text-white py-2 px-8 sm:px-12 mb-10 rounded">Send Message</button>

            </form>



        </motion.div>
    );
}

export default Contact;