import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  return (
    <p className={`${styles.Button} ${styles[props.type]} ${styles[props.color]} ${styles[props.mod]}`}>
      {props.children}
    </p>
  );
};

export default Button;
