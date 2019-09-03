import React from "react";
import styles from "./Review.module.scss";

const Review = props => {
  return (
    <div className={`${styles.Review}`}>
      <div className={`${styles.review__inner}`}>
        <figure className={`${styles.review__circle}`}>
          <div className={`${styles.img} ${styles[props.type]}`} />
        </figure>
        {props.children}
      </div>
    </div>
  );
};

export default Review;
