import React from "react";
import s from './Skills.module.css';
import sContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title='js'
                           discription='Privet 1'/>
                    <Skill title='css'
                           discription='Privet 2'/>
                    <Skill title='react'
                           discription='Privet 3'/>
                </div>
            </div>
        </div>
    );
}

