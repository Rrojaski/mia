import React, { Fragment } from "react";
import styles from "./Section.module.scss";

//components


//media 
import img1 from '../../images/img1.PNG';
import img2 from '../../images/img2.PNG';
import img3 from '../../images/img3.PNG';

const img_1 = document.getElementById('img1');
const img_2 = document.getElementById('img2');
const img_3 = document.getElementById('img3');

const scale = () => {
  console.log(img_1);
}
const Title = props => {
  if (props.type == "hero") {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        <div className={`${styles.hero__logo}`}>mia</div>
        <div className={`${styles.hero__box}`}>{props.children}</div>
      </section>
    );
  } else if (props.type == "about") {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        <div className={`${styles.about__header}`}>{props.Header}</div>
        <div className={`${styles.about__box__left}`}>{props.children}</div>
        <div className={`${styles.about__box__right}`}>
          <div id='img1' onMouseOver={scale} className={`${styles.about__img} ${styles.about__img__1}`}>
            <img src={img1} />
          </div>
          <div id='img2' onMouseOver={scale} className={`${styles.about__img} ${styles.about__img__2}`}>
            <img src={img2} />
          </div>
          <div id='img3' onMouseOver={scale} className={`${styles.about__img} ${styles.about__img__3}`}>
            <img src={img3} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        {props.children}
      </section>
    );
  }
};

export default Title;
