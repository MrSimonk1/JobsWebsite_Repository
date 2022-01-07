import React from 'react';
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footerDiv">
            <p className="grow1">© 2022 CLASSIC — ALL RIGHTS RESERVED</p>
            <div onClick={() => window.scrollTo(0,0)} className="grow1"> <BsFillArrowUpCircleFill/> </div>
        </div>
    );
};

export default Footer;