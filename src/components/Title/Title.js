import React from "react";
import styles from "./Title.module.scss";

const Title = props => {
  return (
    <p className={`${styles.Title} ${styles[props.size]}`}>
      {props.children}
    </p>
  );
};

export default Title;
