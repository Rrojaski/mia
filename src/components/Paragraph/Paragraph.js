import React from "react";
import styles from "./Paragraph.module.scss";

const Paragraph = props => {
  return (
    <p className={`${styles.Paragraph} ${styles[props.size]}`}>
      {props.children}
    </p>
  );
};

export default Paragraph;
