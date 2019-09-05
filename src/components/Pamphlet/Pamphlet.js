import React, { Fragment } from "react";
import styles from "./Pamphlet.module.scss";

//components
import Button from "../Button/Button";

const Pamphlet = props => {
  return (
    <div className={`${styles.Pamphlet}`}>
      <div className={`${styles.pamphlet__front}`}>
        <div
          className={`${styles.pamphlet__front__img} ${styles[props.img]}`}
        />
        <h3 className={`${styles.pamphlet__front__header} `}>
          <span className={` ${styles[props.color]} `}>{props.header}</span>
        </h3>
        <ul className={`${styles.pamphlet__front__list}`}>
          <li className={`${styles.pamphlet__front__list__item}`}>
            {props.li_1}
          </li>
          <li className={`${styles.pamphlet__front__list__item}`}>
            {props.li_2}
          </li>
          <li className={`${styles.pamphlet__front__list__item}`}>
            {props.li_3}
          </li>
          <li className={`${styles.pamphlet__front__list__item}`}>
            {props.li_4}
          </li>
          <li className={`${styles.pamphlet__front__list__item}`}>
            {props.li_5}
          </li>
        </ul>
      </div>
      <div className={`${styles.pamphlet__back} ${styles[props.color]}`}>
        <p className={`${styles.pamphlet__back__info}`}>only</p>
        <div className={`${styles.pamphlet__back__price}`}>{props.price}</div>
        <Button href="./#modal" type="primary" color="primary--white">
          buy now!
        </Button>
      </div>
    </div>
  );
};

export default Pamphlet;
