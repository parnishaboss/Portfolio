import React from "react";
import s from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectBlock}>
                <img className={s.image} src={''} alt=""/>
                <a href={''} className={s.btn}>
                    Open
                </a>
            </div>
            <div className={s.discription}>
                <h3>{props.title}</h3>
                <span>{props.discriptiom}</span>
            </div>
        </div>
    );
}

