import React from "react";
import s from './New.module.css';
import sContainer from '../common/styles/Container.module.css'

export const New = () => {
    return (
        <div className={s.contactBlock}>
            <div className={sContainer.container}>
                <h1 className={s.mainTitle}>Sasha Zhdanovich</h1>
                <p className={s.mainDiscription}>Front-end Developer</p>
            </div>
        </div>
    )
        ;
}



