import React from "react";
import styles from "./Card.module.scss";
import "../../icon-font.css";

//Components
import Paragraph from '../Paragraph/Paragraph';

const Card = props => {
  return (
    <div className={`${styles.Card}`}>
      <i className={`${styles.card__icon} ${props.icon}`}></i>
      <Paragraph size='lg'>{props.Header}</Paragraph>
      <Paragraph>{props.Paragraph}</Paragraph>
    </div>
  );
};

export default Card;
