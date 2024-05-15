import React from "react";
import { SiGithub } from "react-icons/si";
import { about } from "../data/penspinningData";

const About = () => {
    return (
        <>
            <div className="flex w-full h-full mt-20 md:items-start items-center justify-around md:flex-row flex-col">
                <div className="flex flex-col md:w-2/5 w-4/5 gap-4">
                    <p className="text-3xl uppercase tracking-wide">About</p>
                    <p className="text-justify leading-normal">
                        {about}
                    </p>
                </div>
                <div className="flex flex-col md:w-2/5 mt-4">
                    <div className="flex gap-4 bg-white p-5 w-48 rounded-md shadow-md outline-2 outline outline-gray-600 hover:cursor-pointer hover:shadow-lg hover:scale-105"
                        onClick={() => window.open('https://github.com/Pyromagne/Pen-Spinning-Library', '_blank'
                        )}>
                        <SiGithub size={24} color="black" />
                        <p className="text-black font-semibold">Source Code</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About