import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={`${s.nav} ${s.active}`}>
            <a >Home</a>
            <a href="">Skills</a>
            <a href="">Proects</a>
            <a href="">Contact</a>
        </div>
    );
}

