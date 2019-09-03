import React from "react";
import styles from "./Contact.module.scss";

//compontent
import Header from '../Header/Header';
import Button from '../Button/Button';


const Contact = props => {
  return (
    <div className={`${styles.Contact}`}>
      <form className={`${styles.contact__form}`}>
      <Header>START BOOKING NOW</Header>
        <input className={`${styles.contact__form__name}`} type='text' placeholder='Name' required/>
        <input className={`${styles.contact__form__email}`} type='email' placeholder='email' required/>
        <input className={`${styles.contact__form__radio1}`} type='radio' required/>
        <label>Small tour group</label>
        <input className={`${styles.contact__form__radio2}`} type='radio' required/>
        <label>Large tour group</label>
        <div className={`${styles.submit}`}>
          <Button type='primary' color='button--purple' mod='arrow'>Send</Button>
        </div>
      </form>
      X    
    </div>
  );
};

export default Contact;