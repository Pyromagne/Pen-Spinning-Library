import { React, useEffect } from "react"
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import * as Desc from "../data/penspinningData";
import fs from "../assets/images/Penspinning_slots.jpg";
import { useStateContext } from "../context/contextProvider";

const videoId = 'voqYX8_VjvQ';
const Home = () => {

    const { setIsHome } = useStateContext(false);

    const terminologiesMap = Desc.terminologies.map((term, index) => (
        <li key={index} className="text-justify leading-normal hover:shadow-lg hover:bg-gray-100 p-1 rounded">{term}</li>
    ));

    useEffect(() => {
        setIsHome(true);
        return () => setIsHome(false);
    }, []);

    return (
        <>
            <div className="flex flex-col w-full h-full justify-center items-center gap-10">
                <div className="w-full md:h-96 h-80 flex justify-center items-center tictactoe">
                    <p className="text-5xl text-white text-center">PEN SPINNING LIBRARY</p>
                </div>

                <div className="flex flex-col w-4/5 justify-center items-center gap-4 pb-4">
                    <p className="text-2xl uppercase">What is Penspinning?</p>
                    <p className="text-justify leading-normal">
                        {Desc.what}
                    </p>

                    <p className="text-2xl uppercase">History</p>
                    <p className="text-justify leading-normal">
                        {Desc.history}
                    </p>

                    <p className="text-3xl uppercase">Get Started</p>
                    <p className="italic text-gray-700">Before you start you should know these terminologies, these will be used a lot in your penspinning journey</p>
                    <div className="flex justify-between md:flex-row flex-col">
                        <div className="flex gap-10 flex-col md:w-2/5 w-4/8 items-center">
                            <p className="text-justify leading-normal">
                                {Desc.fingerSlots}
                            </p>
                            <img src={fs} alt="Penspinning_slots.jpg" className="w-full md:w-96 rounded-md" />
                        </div>
                        <div className="flex gap-2 flex-col md:w-3/6 w-4/8 ">
                            <p className="text-xl md:mt-0 mt-4">Terminologies</p>
                            <ul className="flex gap-1 flex-col">
                                {terminologiesMap}
                            </ul>
                        </div>
                    </div>

                    <p className="text-2xl text-center">Check this Epic Pen Spinning video by Kuma Films!</p>
                    <div className="yt-div-home-resp-class">
                        <ResponsiveYoutube videoId={videoId} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;