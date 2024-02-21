import { React, useState } from "react";
import { Button } from "@mui/material";
import Fade from "@mui/material";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";


const Navbar = ({isHome = false}) => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleHomeClick = () =>{
        navigate("/home");
    }
    const handleTutorialClick = () =>{
        navigate("/tutorial");
    }
    const handleTrickClick = () =>{
        navigate("/trick");
    }

    return(
        <div className={`top-0 left-0 w-full flex py-4 justify-between items-center absolute z-10 ${ isHome ? 'bg-transparent' : 'bg-black'}`}>
            <p className="md:ml-20 ml-5 text-white">PEN SPINNING LIBRARY</p>
            <span className="md:mr-20 mr-5 md:hidden text-white inline">
                <SlMenu onClick={() => setActive((prevActive) => !prevActive)}/>
            </span>
            <div className={`w-full absolute top-14 left-0 md:hidden ${active ? 'flex' : 'hidden'} bg-gray-800 flex-col justify-center items-center gap-4`}>
                <Button variant="text" onClick={handleHomeClick} className="w-full">Home</Button>
                <Button variant="text" onClick={handleTutorialClick} className="w-full">Tutorials</Button>
                <Button variant="text" onClick={handleTrickClick} className="w-full">Tricks</Button>
                <Button variant="text" className="w-full">Mods</Button>
                <Button variant="text" className="w-full">About</Button>
            </div>

            <div className="mr-20 gap-x-4 md:flex hidden">
                <Button variant="text" onClick={handleHomeClick}>Home</Button>
                <Button variant="text" onClick={handleTutorialClick}>Tutorials</Button>
                <Button variant="text" onClick={handleTrickClick} >Tricks</Button>
                <Button variant="text">Mods</Button>
                <Button variant="text">About</Button>
            </div>
        </div>
    )
}

export default Navbar;