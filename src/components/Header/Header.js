import React from "react";
import styles from "./Header.module.scss";

const Header = props => {
  return (
    <p className={`${styles.Header} ${styles[props.size]}`}>
      {props.children}
    </p>
  );
};

export default Header;
