import React, { useContext } from "react";
import { Card, Typography } from "@mui/material";
import * as Data from "../data/tricks";
import {svg, getRandomSvg} from "../assets/svgs/svg";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

const createCardStyle = (isMobile) => {
    const cardStyles = {
        width: isMobile ? '80%' : '330px',
        height: isMobile ? '75px' : '230px',
        margin: '20px',
        border: 'none',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '10px',
        backgroundImage:`url(${svg[getRandomSvg()]})`,
        backgroundColor: randomColor({hue: 'blue', count: 18}),
        '&:hover': {
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.5)',
          backgroundColor: `rgb(0,0,0,0.5)`,
        },
    }

    return cardStyles;
}

const Trick = () => {

    const navigate = useNavigate();
    const { isMobile } = useStateContext();

    const handleCategoryClick = (cat) => {
        navigate(`/tricks/${cat}`);
    }

    return(
        <>
        <div className="flex w-full h-full mt-20 justify-center items-center flex-col">
        <Typography variant="h4" className="capitalize">Category</Typography>
            <div className="md:w-4/5 w-full flex flex-wrap justify-center">
                {Data.trickCategoryL.map((trick, index) => (
                    <Card key={index} variant="outlined" sx={createCardStyle(isMobile)} onClick={() => handleCategoryClick(trick)}                    >
                    <div className="w-full h-20 py-4">
                        <p className="capitalize text-center text-3xl text-white text-border-black-2">{trick}</p>
                    </div>
                    </Card>
                ))}
            </div>
        </div>
        </>
    )
}

export default Trick;