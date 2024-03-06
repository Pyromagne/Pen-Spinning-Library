import {React} from "react";
import { Link } from "@mui/material";
import { SiRender, SiGithubpages } from "react-icons/si";
import logo from "../assets/images/android-chrome-192x192.png"

const linkStyle = {
    color : 'black',
    textDecoration : 'none',
    fontWeight : '500',
    textAlign : 'center',  
    transition: '0.3s',
    display: 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    "&:hover": {
        backgroundColor : 'gray',
      },
}

const logoStyle = {
    color : 'black',
    textDecoration : 'none',
    fontWeight : '500',
}

const Footer = () => {

    return(
        <div className="w-full p-4 flex flex-col justify-around items-center bg-white mt-10 gap-4">
            <div className="w-full hidden md:flex md:flex-row flex-col justify-around items-center">
                <div className="md:w-1/4 w-full h-44 flex flex-col md:justify-between justify-center items-center md:items-start gap-4">
                    <img src={logo} width="48px" />
                    <Link rel="noopener" href="/home" sx={logoStyle}>PEN SPINNING LIBRARY</Link>
                </div>
                <div className="md:w-1/4 h-44 w-full md:flex md:flex-col grid grid-cols-2 justify-between">
                    <Link rel="noopener" href="/home" sx={linkStyle}>Home</Link>
                    <Link rel="noopener" href="/guide" sx={linkStyle}>Guides</Link>
                    <Link rel="noopener" href="/tricks" sx={linkStyle}>Tricks</Link>
                    <Link rel="noopener" href="/home" sx={linkStyle}>Mods</Link>
                    <Link rel="noopener" href="/home" sx={linkStyle}>About</Link>
                </div>
            </div>
            <hr className="w-full border-gray-400"/>
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