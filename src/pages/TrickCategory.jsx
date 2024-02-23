import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import * as Data from "../data";

const TrickCategory = ({cat}) => {
    let tc;
    if(cat === 'sonics') {
        tc = Data.sonics;
    }
    return(
        <>
            <Navbar></Navbar>
            {tc.map((trick,index) =>(
                <p key={index}>{trick}</p>
            ))}
            <Footer></Footer>
        </>
    )
}

export default TrickCategory;