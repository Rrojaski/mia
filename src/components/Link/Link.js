import React from "react";
import styles from "./Link.module.scss";

const Link = props => {
  return (
    <a
      target={props.external ? "_blank" : ""}
      href={props ? props.href : "#"}
      className={`${styles.Link}`}
    >
      {props.children}
    </a>
  );
};

export default Link;
