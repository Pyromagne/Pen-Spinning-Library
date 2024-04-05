import { React, useEffect } from "react";
import { Typography } from "@mui/material";
import * as Data from "../data/tricks";
import { useNavigate } from "react-router-dom";
import DiffChip from "../components/DifficultyChip";
import sonic from "../data/tricks/sonicsData";
import charge from "../data/tricks/chargesData";
import pass from "../data/tricks/passesData";
import around from "../data/tricks/aroundsData";
import spin from "../data/tricks/spinsData";
import wiper from "../data/tricks/wipersData";
import aerial from "../data/tricks/aerialsData";
import otherAdvance from "../data/tricks/otherAdvance";

const TrickCategory = ({cat}) => {

    let category;

    const categoryMap = {
        sonics: sonic,
        charges: charge,
        passes: pass,
        arounds: around,
        spins: spin,
        wipers: wiper,
        aerials: aerial,
        'other & advance': otherAdvance
      };
    
    for (const categoryItem of Data.trickCategoryList) {
        if (cat === categoryItem) {
          category = categoryMap[categoryItem];
          break;
        }
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
    </>
    )
}

export default TrickCategory;