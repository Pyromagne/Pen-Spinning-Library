import {React, useNavigate} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import DiffChip from "../components/DiffChip";

const TrickTutorial = ({trick}) => {    

    return(
        <>
        <Navbar></Navbar>
        <div className="flex w-full h-full mt-10 justify-center items-center flex-col">
            <div className="w-11/12 flex flex-col gap-2">
                <div className="justify-self-start md:w-2/3 w-full">
                    {(!trick.tLink|| trick.tLink.length === 0) ? (
                        <p>no video tutorial</p>
                        ) : (
                        <ResponsiveYoutube videoId={trick.tLink} />
                    )}
                </div>

                <div className="rounded-xl p-4 md:w-2/3">
                    <div className="flex flex-row place-items-center gap-2">
                        <p className="capitalize text-xl">{trick.name} Tutorial</p>
                        <DiffChip diff={trick.diff}/>
                    </div>
                    {(!trick.tAuthor || !Array.isArray(trick.tAuthor) || trick.tAuthor.length < 2) ? (
                        <p>video author information not available</p>
                        ) : (
                        <p className="text-xl mt-5">Video Author: <a href={trick.tAuthor[1]} target="_blank">{trick.tAuthor[0]}</a></p>
                    )}
                    <p className="text-xl mt-5">Alternative Tutorials</p>

                    {(!trick.tAlt || trick.tAlt.length === 0)  ? (
                        <p>no alternative tutorial</p>
                        ) : (
                        <div className="flex flex-col items-start">
                        {trick.tAlt.map((item, index) => (
                            <a className="text-xl" key={index} href={item[0]} target="_blank">{item[1]}</a>
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default TrickTutorial;