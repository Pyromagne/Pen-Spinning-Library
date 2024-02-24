import { React, useEffect } from "react";
import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as Data from "../data/tricks";
import { useNavigate } from "react-router-dom";
import DiffChip from "../components/DiffChip";
import sonic from "../data/sonicsData";
import charge from "../data/chargesData";
import pass from "../data/passesData";

const TrickCategory = ({cat}) => {

    let category;

    if(cat === 'sonics') {
        category = sonic;
    }
    else if(cat === 'charges') {
        category = charge;
    }
    else if(cat === 'passes') {
        category = pass;
    }


    const navigate = useNavigate();

    const handleTrickClick = (trick) => {
        navigate(`/tutorial/${trick}`);
    }
    
    /* useEffect(() => {
        if (cat === undefined) {
            navigate("/home");
        }
    }, [cat, navigate]);

    const tricks = Data[cat] || []; */

    return(
        <>
        <Navbar></Navbar>
        <div className="flex w-full h-full mt-20 justify-center items-center flex-col gap-4">
            <Typography variant="h4" className="capitalize">{category[0]} Tricks</Typography>
            <div className="w-4/5 grid md:grid-cols-2 gap-1 gap-x-8">
                {category.slice(1).map((trick, index) => (
                    <div key={index} onClick={() => handleTrickClick(trick.name)} className="flex gap-2 place-items-center p-1 justify-between hover:bg-gray-500 hover:text-white rounded-md duration-150 ease-in-out">
                        <p className="capitalize">{trick.name}</p>
                        <DiffChip diff={trick.diff} />
                    </div>
                ))}
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}

export default TrickCategory;