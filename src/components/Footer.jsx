import {React} from "react";
import { Link } from "@mui/material";
import { SiRender, SiGithubpages } from "react-icons/si";
import logo from "../assets/images/android-chrome-192x192.png"
import { useStateContext } from "../context/contextProvider";

const Footer = () => {

    const {isDark} = useStateContext();

    const linkStyle = {
        color : isDark ? 'white' : 'black',
        textDecoration : 'none',
        fontWeight : '500',
        textAlign : 'center',  
        transition: '0.3s',
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : '20px',
        paddingRight : '20px',
        
        "&:hover": {
            backgroundColor : 'gray',
        },
    }
    
    const logoStyle = {
        color : isDark ? 'white' : 'black',
        textDecoration : 'none',
        fontWeight : '500',
    }
    return(
        <div className={`w-full p-4 flex flex-col justify-around items-center pt-10 gap-4 ${isDark ? 'dark-mode': 'light-mode'}`}>
            <div className="w-full hidden md:flex md:flex-row flex-col justify-around items-end">
                <div className="md:w-1/4 w-full h-22 flex flex-col md:justify-between justify-center items-center md:items-start gap-4">
                    <img src={logo} width="48px" />
                    <Link rel="noopener" href="/home" sx={logoStyle}>PEN SPINNING LIBRARY</Link>
                </div>
                <div className="w-auto md:flex md:flex-row gap-2 grid grid-cols-2 justify-between">
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

/* <span className="flex justify-center items-center gap-2">
    <p>Powered by Render</p>
    <SiRender />
    <p>Powered by</p>
    <SiGithubpages/>
</span> */