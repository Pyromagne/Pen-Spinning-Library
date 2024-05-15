import {React} from "react";
import { Link } from "@mui/material";
import logo from "../assets/images/android-chrome-192x192.png"
import { useStateContext } from "../context/contextProvider";
import { navbarLink } from "./Navbar";

const Footer = () => {

    const {isDark} = useStateContext();

    const linkStyle = {
        color : isDark ? 'white' : 'black',
        textDecoration : 'none',
        fontWeight : '500',
        textAlign : 'center',
        display: 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : '20px',
        paddingRight : '20px',
        borderRadius : 50,
        
        "&:hover": {
            outline: '2px solid black',
        },
    }
    
    const logoStyle = {
        color : isDark ? 'white' : 'black',
        textDecoration : 'none',
        fontWeight : '500',
    }
    
    return(
        <div className={`w-full p-4 flex flex-col justify-around items-center pt-10 gap-4 ${isDark ? 'bg-nero': 'bg-white'} t-5ms`}>
            <div className="w-full hidden md:flex md:flex-row flex-col justify-around items-end">
                <div className="md:w-1/4 w-full h-22 flex flex-col md:justify-between justify-center items-center md:items-start gap-4">
                    <img src={logo} width="48px" />
                    <Link rel="noopener" href="/" sx={logoStyle}>PEN SPINNING LIBRARY</Link>
                </div>
                <div className="w-auto md:flex md:flex-row gap-2 grid grid-cols-2 justify-between">
                    {navbarLink.map((link, index) =>(
                        <Link key={index} rel="noopener" className="duration-0" href={link.href} sx={linkStyle}>{link.name}</Link>
                    ))}
                </div>
            </div>
            <hr className="w-full border-gray-400"/>
            <p className="text-sm text-gray-600 text-center">© 2024 Pen Spinning Library. All rights reserved.</p>
        </div>
    )
}

export default Footer;