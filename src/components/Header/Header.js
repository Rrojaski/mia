import React from "react";
import styles from "./Header.module.scss";

const Header = props => {
  return (
    <p className={`${styles.Header} ${styles[props.size]} ${styles[props.mod]}`}>
      {props.children}
    </p>
  );
};

export default Header;
