import React from 'react';
import {useNavigate} from "react-router-dom";

const Toolbar = () => {

    const navigate = useNavigate()

    return (
        <div className="toolbar">
            <img onClick={() => {navigate("/preview")}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeXGTNDTl5MrV9Vzu52qSt0M5CoNme2XJFw&usqp=CAU" alt=""/>
            <div className="toolbarButtons">
                <div>Demos</div>
                <div onClick={() => {navigate("/find-job")}}>Find A Job</div>
                <div onClick={() => {navigate("/post-job")}} >Post A Job</div>
                <div>Pages</div>
                <div>Blog</div>
                <div>Shop</div>
                <div>Sign Up</div>
                <div className="loginBtn">Login</div>
            </div>
            
        </div>
    );
};

export default Toolbar;