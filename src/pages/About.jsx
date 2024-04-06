import React from "react";
import { SiGithub } from "react-icons/si";
import { about } from "../data/penspinningData";
import { Button, Typography } from "@mui/material";

const About = () => {
    return(
        <>
            <div className="flex w-full h-full mt-20 justify-center items-center flex-col">
                <div className="flex flex-col w-4/5 justify-center items-center gap-10">
                    <Typography variant="h4" className="uppercase">About</Typography>
                        <p className="text-justify md:text-2xl text-xl">
                            {about}
                        </p>
                        <Button className="flex justify-center items-center gap-4 bg-gray-700 rounded-md p-2" 
                            onClick={() => window.open('https://github.com/Pyromagne/Pen-Spinning-Library', '_blank'
                        )}>
                            <SiGithub size={24} color="black"/>
                            <p className="text-black font-semibold">Source Code</p>
                        </Button>
                </div>
            </div>
        </>
    )
}

export default About