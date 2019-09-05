import React from "react";
import styles from "./Contact.module.scss";

//compontent
import Header from '../Header/Header';

const Contact = props => {
  return (
    <div className={`${styles.Contact}`}>
      <form action='#' className={`${styles.contact__form}`}>
        <Header>START BOOKING NOW</Header>
        <div className={`${styles.contact__group}`}>
          <input className={`${styles.contact__name}`} type='text' id='name' placeholder='Full name' required />
          <label className={`${styles.contact__label1}`} for='name'>Full name</label>
        </div>
        <div className={`${styles.contact__group}`}>
          <input className={`${styles.contact__email}`} type='email' id='email' placeholder='Email address' required />
          <label className={`${styles.contact__label2}`} for='email'>Email address</label>
        </div>
        <div className={`${styles.contact__group}`}>
          <div className={`${styles.contact__group__radio}`}>
            <input className={`${styles.contact__radio1}`} type='radio' id='small' name='radio' required />
            <label className={`${styles.contact__label3}`} for='small'>
              <span className={`${styles.contact__button}`} />
              Small tour group
              </label>
          </div>
          <div className={`${styles.contact__group__radio}`}>
            <input className={`${styles.contact__radio2}`} type='radio' id='large' name='radio' required />
            <label className={`${styles.contact__label4}`} for='large'>
              <span className={`${styles.contact__button}`} />
              Large tour group
              </label>
          </div>
        </div>
        <button className={`${styles.submit}`} type='submit'>send</button>
      </form>
    </div>
  );
};

export default Contact;