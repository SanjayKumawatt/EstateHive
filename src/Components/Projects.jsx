import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";


function Projects() {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);

    const nextProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setcurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    useEffect(() => {
        const updateCardToShow = (() => {
            if (window.innerWidth >= 1024) {
                setcardsToShow(projectsData.length)
            } else {
                setcardsToShow(1)
            }
        })();

        return () => window.addEventListener("resize", updateCardToShow)

    }, [])

    return (
        <motion.div
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
         className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden " id="projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Projects
                <span className="underline underline-offset-4 font-light decoration-1 under ml-1.5">Completed</span>
            </h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">Crafting Spaces, Building Legecies-Explore Our Portfolio</p>

            {/* Slider Buttons */}
            <div className="flex justify-end w-full mb-8">
                <button onClick={prevProject}
                    className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject}
                    className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Projects Slider Container */}

            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md" >
                                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    <p className="text-gray-500 text-sm">
                                        {project.price} <span> | </span>{project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    );
}

export default Projects;