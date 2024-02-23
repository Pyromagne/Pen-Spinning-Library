import React from "react";
import { Card, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as Data from "../data";
import {svg, getRandomSvg} from "../assets/svgs/svg";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";

const createCardStyle = () => {

    const cardStyles = {
        width:'330px',
        height: '230px',
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

    const handleCategoryClick = (cat) => {
        navigate(`/tricks/${cat}`);
    }

    return(
        <>
        <Navbar></Navbar>
        <div className="flex w-full h-full mt-20 justify-center items-center flex-col">
        <Typography variant="h4" className="capitalize">Category</Typography>
            <div className="w-4/5 flex flex-wrap justify-center">
                {Data.trickCategoryL.map((trick, index) => (
                    <Card key={index} variant="outlined" sx={createCardStyle} onClick={() => handleCategoryClick(trick)}                    >
                    <div className="w-full h-20 bg-white py-4">
                        <p className="capitalize text-center text-3xl">{trick}</p>
                    </div>
                    </Card>
                ))}
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Trick;