import React, { Fragment } from "react";
import styles from "./Menu.module.scss";

let menu__line__top = "";
let menu__line__middle = "";
let menu__line__bottom = "";
let menu__overlay = "";

let menu__box__display = "";
let menu__box__hide = "";

const toggleRotate = () => {
  console.log("test");
  if (menu__overlay == "") {
    console.log("adddid style");
    menu__line__top = "nav__line__top--rotate";
    menu__line__middle = "nav__line__middle--hide";
    menu__line__bottom = "nav__line__bottom--rotate";
    menu__overlay = "nav__overlay--cover";

    menu__box__display = "menu__box--display";
  } else {
    console.log("removing style");
    menu__line__top = "";
    menu__line__middle = "";
    menu__line__bottom = "";
    menu__overlay = "";

    let menu__box__hide = "";
    setTimeout(function() {
      menu__box__hide = "menu__box__hide";
    }, 500);
  }
};

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
            <a href="#about">01 about mia</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="#">02 your benefits</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="#">03 popular items</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="#">04 reviews</a>
          </li>
          <li className={`${styles.menu__box__item}`}>
            <a href="#">05 contact us</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
