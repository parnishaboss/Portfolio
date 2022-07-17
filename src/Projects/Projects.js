import React from "react";
import s from './Projects.module.css';
import sContainer from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2>My projects</h2>
                <div className={s.projects}>
                    <Project title='Todolist'
                            discriptiom='111 222 333 444 555 666'/>
                    <Project title='Todolist'
                             discriptiom='111 222 333 444 555 666'/>
                    <Project title='Todolist'
                             discriptiom='111 222 333 444 555 666'/>
                </div>
            </div>
        </div>
    );
}

