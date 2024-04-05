import {React, useEffect} from "react"
import { Typography } from "@mui/material";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import * as Desc from "../data/desc";
import fs from "../assets/images/Penspinning_slots.jpg";
import {useStateContext} from "../context/contextProvider";

const videoId = 'voqYX8_VjvQ';
const Home = () => {

    const {setIsHome} = useStateContext(false);

    const terminologiesMap = Desc.terminologies.map((term, index) => (
        <li key={index} className="text-justify text-xl">{term}</li>
    ));

    useEffect(() => {
        setIsHome(true);
        return () => setIsHome(false);
    }, []);

    return(
        <>
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
                        <img src={fs} alt="Penspinning_slots.jpg" className="w-full md:w-96 rounded-md"/>
                    </div>

                    <Typography variant="h5" className="uppercase">Terminologies</Typography>
                    <ul className="list-disc">
                        {terminologiesMap}
                    </ul>
                    <Typography variant="h5" className=" text-center">Check this Epic Pen Spinning video by Kuma Films!</Typography>
                    <div className="yt-div-home-resp-class">
                        <ResponsiveYoutube videoId={videoId}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;