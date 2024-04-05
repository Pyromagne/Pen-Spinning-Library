import {React, useNavigate} from "react";
import ResponsiveYoutube from "../components/ResponsiveYoutube";
import DiffChip from "../components/DifficultyChip";

const TrickTutorial = ({trick}) => {    

    return(
        <>
        <div className="flex w-full h-full mt-10 justify-center items-center flex-col">
            <div className="w-11/12 flex flex-col gap-2">
                <div className="justify-self-start md:w-2/3 w-full">
                    {(!trick.tLink|| trick.tLink.length === 0) ? (
                        <p className=" opacity-50 bg-black text-white capitalize text-center py-20 rounded-xl">no video tutorial available</p>
                        ) : (
                        <ResponsiveYoutube videoId={trick.tLink} />
                    )}
                </div>

                <div className="rounded-xl p-4 md:w-2/3 bg-black bg-opacity-10">
                    <div className="flex flex-row place-items-center gap-2 py-1">
                        <p className="capitalize text-xl">{trick.name} Tutorial</p>
                        <DiffChip diff={trick.diff}/>
                    </div>
                    {(!trick.tAuthor || !Array.isArray(trick.tAuthor) || trick.tAuthor.length < 2) ? (
                        <p className=" opacity-50 bg-black text-white capitalize text-center rounded-md">video author information not available</p>
                        ) : (
                        <p className="text-xl mt-5">Video Author: <a href={trick.tAuthor[1]} target="_blank">{trick.tAuthor[0]}</a></p>
                    )}
                    <p className="text-xl mt-5">Alternative Tutorials</p>

                    {(!trick.tAlt || trick.tAlt.length === 0)  ? (
                        <p className=" opacity-50 bg-black text-white capitalize text-center rounded-md">no alternative tutorials available</p>
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
        </>
    )
}

export default TrickTutorial;