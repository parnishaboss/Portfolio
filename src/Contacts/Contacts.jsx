import React from "react";
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={sContainer.container}>
                <form >
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Your name.."/>
                    <label htmlFor="Email">Email</label>
                    <input type="text" placeholder="Your Email.."/>
                    <label htmlFor="Message">Message</label>
                    <textarea name="subject" placeholder="Write something.."></textarea>
                    <button className={s.btn}>Send a message</button>
                </form>
            </div>
        </div>
    )
        ;
}

