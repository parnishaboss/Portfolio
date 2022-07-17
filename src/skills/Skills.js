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
                           discription='Дорогие друзья, новая модель организационной деятельности влечет за собой '/>
                    <Skill title='css'
                           discription='Дорогие друзья, новая модель организационной деятельности влечет за .'/>
                    <Skill title='react'
                           discription='Дорогие друзья, новая модель организационной деятельности влечет .'/>
                </div>
            </div>
        </div>
    );
}

