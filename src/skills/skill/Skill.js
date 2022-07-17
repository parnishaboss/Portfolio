import React from "react";
import s from './Skill.module.css';


export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillIcon}></div>
            <h3>{props.title}</h3>
            <span className={s.discription}>
                {props.discription}
            </span>

        </div>
    );
}

