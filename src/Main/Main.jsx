import React from "react";
import s from './Main.module.css';
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.contactBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <div className={s.mainTitle}>
                        <span >Hello!</span>
                        <p>I am</p>
                    </div>
                    <h1 className={s.mainTitle}>Sasha</h1>
                    <h1 className={s.mainTitle}>Zhdanovich</h1>
                    <p className={s.mainDiscription}>Front-end Developer</p>
                </div>
                <div className={s.mainFoto}>
                </div>
            </div>
        </div>
    )
        ;
}



