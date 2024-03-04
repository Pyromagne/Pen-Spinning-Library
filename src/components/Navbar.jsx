import { React, useState } from "react";
import { Button, Link } from "@mui/material";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const navbarStyle = {
    color : 'white',
    borderRadius: 50,
}

const linkStyle = {
    color : 'white',
    textDecoration : 'none',
}

const Navbar = ({isHome = false}) => {
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
        <div className={`top-0 left-0 w-full flex py-4 justify-between items-center z-10 ${ isHome ? 'bg-transparent absolute' : 'bg-black relative'}`}>
            <span className="md:ml-20 ml-5">
                <Link href="/home" sx={linkStyle}>PEN SPINNING LIBRARY</Link>
            </span>
            <span className="md:mr-20 mr-5 md:hidden text-white inline">
                <SlMenu onClick={() => setActive((prevActive) => !prevActive)}/>
            </span>
            <div className={`w-full absolute top-14 left-0 md:hidden ${active ? 'flex' : 'hidden'} bg-black flex-col justify-center items-center gap-4`}>
                <Button sx={navbarStyle} variant="text" onClick={handleHomeClick} className="w-full">Home</Button>
                <Button sx={navbarStyle} variant="text" onClick={handleTutorialClick} className="w-full">Guides</Button>
                <Button sx={navbarStyle} variant="text" onClick={handleTrickClick} className="w-full">Tricks</Button>
                <Button sx={navbarStyle} variant="text" className="w-full">Mods</Button>
                <Button sx={navbarStyle} variant="text" className="w-full">About</Button>
            </div>

            <div className="mr-20 gap-x-4 md:flex hidden">
                <Button sx={navbarStyle} variant="text" onClick={handleHomeClick}>Home</Button>
                <Button sx={navbarStyle} variant="text" onClick={handleTutorialClick}>Guides</Button>
                <Button sx={navbarStyle} variant="text" onClick={handleTrickClick} >Tricks</Button>
                <Button sx={navbarStyle} variant="text">Mods</Button>
                <Button sx={navbarStyle} variant="text">About</Button>
            </div>
        </div>
    )
}

export default Navbar;