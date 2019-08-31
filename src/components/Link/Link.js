import React from "react";
import styles from "./Link.module.scss";

const Link = props => {
  return (
    <a href="#" className={`${styles.Link}`}>
      {props.children}
    </a>
  );
};

export default Link;
