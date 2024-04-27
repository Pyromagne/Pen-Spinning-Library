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
        href: "/"
    },
    {
        name: "Guide",
        href: "/guide"
    },
    {
        name: "Tricks",
        href: "/tricks"
    },
    {
        name: "Mods",
        href: "/mods"
    },
    {
        name: "About",
        href: "/about"
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
        <div className={`relative bg-black top-0 left-0 w-full flex py-4 justify-between items-center z-10}`}>
        {/* <div className={`top-0 left-0 w-full flex py-4 justify-between items-center z-10  ${ isHome ? 'bg-transparent absolute' : 'bg-black relative'}`}> */}
            <span className="md:ml-20 ml-5">
                <Link rel="noopener" href="/" sx={linkStyle}>PEN SPINNING LIBRARY</Link>
            </span>

            <span className="flex md:mr-20 mr-5 md:hidden text-white justify-center items-center gap-4">
                <span sx={boxButton} onClick={handleTheme}>
                    {handleThemeIcon(isDark)}
                </span>
                <span sx={boxButton} onClick={() => setActive((prevActive) => !prevActive)}>
                    <SlMenu/>
                </span>
            </span>
            <div className={`absolute z-50 top-14 h-64 w-full right-0 md:hidden ${active ? 'visible opacity-100' : 'invisible opacity-0'} bg-black bg-opacity-50 backdrop-blur-sm flex-col justify-around flex duration-300`}>
                {navbarLink.map((link, index) =>(
                    <Button key={index} sx={navbarStyle} variant="text" className="w-full" onClick={() => navigate(link.href)}>{link.name}</Button>
                ))}
            </div>

            <div className="mr-20 gap-x-4 md:flex hidden">
                {navbarLink.map((link, index) =>(
                    <Button key={index} sx={navbarStyle} variant="text" onClick={() => navigate(link.href)}>{link.name}</Button>
                ))}
                <Button sx={navbarStyle} onClick={handleTheme}>
                    {handleThemeIcon(isDark)}
                </Button>
            </div>
        </div>
    )
}

export default Navbar;