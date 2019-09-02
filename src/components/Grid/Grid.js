import React from "react";
import styles from "./Grid.module.scss";

export const Row = props => {
  return (
    <div className={`${styles.Row} ${styles[props.skew]}`}>
      {props.children}
    </div>
  );
};

export const Col = (props) => {
  return (
    <div className={`${styles.Col} ${styles[props.size]}`}>
      {props.children}
    </div>
  );
};
