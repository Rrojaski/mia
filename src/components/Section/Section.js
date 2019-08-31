import React, { Fragment } from "react";
import styles from "./Section.module.scss";

const Title = props => {
  if (props.type == "hero") {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        <div className={`${styles.hero__logo}`}>mia</div>
        <div className={`${styles.hero__box}`}>{props.children}</div>
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
