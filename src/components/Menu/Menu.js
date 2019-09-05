import React, { Fragment } from "react";
import styles from "./Menu.module.scss";

const Menu = props => {
  return (
    <Fragment>
      <nav className={`${styles.Menu}`}>
        <div id="menu__menu" className={`${styles.menu__menu}`}>
          <div
            id="menu__line__top"
            className={`${styles.menu__line} ${styles.menu__line__top} ${
              styles[props.line__top]
            }`}
          ></div>
          <div
            id="menu__line__middle"
            className={`${styles.menu__line} ${styles.menu__line__middle} ${
              styles[props.line__middle]
            }`}
          ></div>
          <div
            id="menu__line__bottom"
            className={`${styles.menu__line} ${styles.menu__line__bottom} ${
              styles[props.line__bottom]
            }`}
          ></div>
        </div>
      </nav>
      <div className={`${styles.menu__overlay} ${styles[props.overlay]}`}></div>
      <div
        className={`${styles.menu__box} ${styles[props.menu__box__display]} ${
          styles[props.menu__box__hide]
        }`}
      >
        <ul className={`${styles.menu__box__list}`}>
          <li className={`${styles.menu__box__item}`}>
            <a href="./#about">01 about mia</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="./#benefits">02 your benefits</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="./#offers">03 popular items</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="./#reviews">04 reviews</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="./#contact">05 contact us</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
