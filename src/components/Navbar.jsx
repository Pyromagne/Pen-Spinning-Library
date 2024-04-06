import { React, useState } from "react";
import { Button, Link } from "@mui/material";
import { SlMenu } from "react-icons/sl";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

const navbarStyle = {
    color: 'white',
    borderRadius: 50,
}

const linkStyle = {
    color: 'white',
    textDecoration : 'none',
}

const boxButton = {
    color: 'white',
    borderRadius: 50,
    padding: '5px',
    backgroundColor : 'blue',
}

export const navbarLink = [
    {
        name: "Home",
        navLink: "/home"
    },
    {
        name: "Guide",
        navLink: "/guide"
    },
    {
        name: "Tricks",
        navLink: "/tricks"
    },
    {
        name: "Mods",
        navLink: "/mods"
    },
    {
        name: "About",
        navLink: "/about"
    }
]


const Navbar = ({isHome = false}) => {
    const {isDark, setIsDark} = useStateContext();

    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    
    const handleTheme = () =>{
        setIsDark((prevTheme) => !prevTheme)
    }

    const handleThemeIcon = (isDark) => {
        return isDark ? <FaSun color="white" /> : <FaMoon color="white" />;
      };

    return(
        <div className={`top-0 left-0 w-full flex py-4 justify-between items-center z-10 ${ isHome ? 'bg-transparent absolute' : 'bg-black relative'}`}>
            <span className="md:ml-20 ml-5">
                <Link rel="noopener" href="/home" sx={linkStyle}>PEN SPINNING LIBRARY</Link>
            </span>

            <span className="flex md:mr-20 mr-5 md:hidden text-white justify-center items-center gap-4">
                <span sx={boxButton} onClick={handleTheme}>
                    {handleThemeIcon(isDark)}
                </span>
                <span sx={boxButton} onClick={() => setActive((prevActive) => !prevActive)}>
                    <SlMenu/>
                </span>
            </span>
            <div className={`w-full absolute top-14 left-0 md:hidden ${active ? 'flex' : 'hidden'} bg-black flex-col justify-center items-center gap-4`}>
                {navbarLink.map((link, index) =>(
                    <Button key={index} sx={navbarStyle} variant="text" className="w-full" onClick={() => navigate(link.navLink)}>{link.name}</Button>
                ))}
            </div>

            <div className="mr-20 gap-x-4 md:flex hidden">
                {navbarLink.map((link, index) =>(
                    <Button key={index} sx={navbarStyle} variant="text" onClick={() => navigate(link.navLink)}>{link.name}</Button>
                ))}
                <Button sx={navbarStyle} onClick={handleTheme}>
                    {handleThemeIcon(isDark)}
                </Button>
            </div>
        </div>
    )
}

export default Navbar;