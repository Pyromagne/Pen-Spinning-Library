import React from "react"
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import Footer from "../components/Footer";
import * as Desc from "../data/desc";
import fs from "../assets/images/Penspinning_slots.jpg";

const videoId = 'voqYX8_VjvQ';
const Home = () => {
    return(
        <>
            <Navbar isHome={true} />
            <div className="flex flex-col w-full h-full justify-center items-center gap-10">
                <div className="w-full md:h-96 h-80 flex justify-center items-center tictactoe">
                    <p className="text-5xl text-white text-center">PEN SPINNING LIBRARY</p>
                </div>  

                <div className="flex flex-col w-4/5 justify-center items-center gap-10">
                    <Typography variant="h4" className="uppercase">What is Penspinning?</Typography>
                    <p className="text-justify md:text-2xl text-xl">
                        {Desc.what}
                    </p>

                    <Typography variant="h4" className="uppercase">History</Typography>
                    <p className="text-justify md:text-2xl text-xl">                  
                        {Desc.history}
                    </p>

                    <Typography variant="h4" className="uppercase">Get Started</Typography>
                    <Typography variant="h6" className="uppercase text-center">Before you start you should know these terminologies, these will be used a lot in your penspinning journey</Typography>
                    <div className="flex gap-10 md:flex-row flex-col-reverse">
                        <p className="text-justify text-xl">
                            {Desc.fingerSlots}
                        </p>
                        <img src={fs} alt="Penspinning_slots.jpg" className="w-full md:w-1/3 rounded-md"/>
                    </div>

                    <Typography variant="h5" className="uppercase">Terminology</Typography>
                    <ul className="list-disc">
                        <li className="text-justify text-xl">{Desc.t1}</li>
                        <li className="text-justify text-xl">{Desc.t2}</li>
                        <li className="text-justify text-xl">{Desc.t3}</li>
                        <li className="text-justify text-xl">{Desc.t4}</li>
                        <li className="text-justify text-xl">{Desc.t5}</li>
                        <li className="text-justify text-xl">{Desc.t6}</li>
                        <li className="text-justify text-xl">{Desc.t7}</li>
                        <li className="text-justify text-xl">{Desc.t8}</li>
                        <li className="text-justify text-xl">{Desc.t9}</li>
                    </ul>
                    <Typography variant="h5" className=" text-center">Check this Epic Pen Spinning video by Kuma Films!</Typography>
                    <ResponsiveYoutube videoId={videoId}/>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;