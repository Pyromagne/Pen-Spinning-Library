import {React, useState} from "react";
import { Button, Link } from "@mui/material";
import { SiRender, SiGithubpages } from "react-icons/si";
import logo from "../assets/images/android-chrome-192x192.png"
import { useNavigate } from "react-router-dom";

const footerStyle = {
    color : 'black',
}

const linkStyle = {
    color : 'black',
    textDecoration : 'none',
    fontWeight : '500',
    textAlign : 'center',
}

const Footer = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleHomeClick = () =>{
        navigate("/home");
    }
    const handleTutorialClick = () =>{
        navigate("/guide");
    }
    const handleTrickClick = () =>{
        navigate("/tricks");
    }

    return(
        <div className="w-full p-4 flex flex-col justify-around items-center bg-white mt-10 gap-4">
            <div className="w-full flex md:flex-row flex-col justify-around items-center">
                <div className="md:w-1/4 w-full h-44 flex flex-col md:justify-between justify-center items-center md:items-start gap-4">
                    <img src={logo} width="48px" />
                    <Link rel="noopener" href="/home" sx={linkStyle}>PEN SPINNING LIBRARY</Link>
                </div>
                <div className="md:w-1/4 w-full md:flex md:flex-col grid grid-cols-2">
                    <Button sx={footerStyle} variant="text" onClick={handleHomeClick}>Home</Button>
                    <Button sx={footerStyle} variant="text" onClick={handleTutorialClick}>Guides</Button>
                    <Button sx={footerStyle} variant="text" onClick={handleTrickClick} >Tricks</Button>
                    <Button sx={footerStyle} variant="text">Mods</Button>
                    <Button sx={footerStyle} variant="text">About</Button>
                </div>
            </div>

            <p className="text-sm text-gray-600 text-center">© 2024 Pen Spinning Library. All rights reserved.</p>
        </div>
    )
}

export default Footer;

{/* <span className="flex justify-center items-center gap-2">
    <p>Powered by Render</p>
    <SiRender />
    <p>Powered by</p>
    <SiGithubpages/>
</span> */}