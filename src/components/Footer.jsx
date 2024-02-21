import React from "react";
import { SiRender, SiGithubpages } from "react-icons/si";


const Footer = () => {
    return(
        <div className="w-full md:h-40 h-36 flex justify-center items-center">
            <span className="flex justify-center items-center gap-2">
                <p>Powered by Render</p>
                <SiRender />
                {/* <p>Powered by</p>
                <SiGithubpages/> */}
            </span>
        </div>
    )
}

export default Footer;