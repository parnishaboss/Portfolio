import React from "react";
import s from './Project.module.css';
import projectImage from './img/Projectfoto.jpg'

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.projectBlock}>
                <img className={s.image} src={projectImage} alt=""/>
                <button className={s.btn}>
                    Open
                </button>
            </div>
            <div>
                <h3>{props.title}</h3>
                <span>{props.discriptiom}</span>
            </div>
        </div>
    );
}

