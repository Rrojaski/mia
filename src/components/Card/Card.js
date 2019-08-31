import React from "react";
import styles from "./Card.module.scss";

//Components
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';

const Card = props => {
  return (
    <div className={`${styles.Card}`}>
      <Paragraph size='lg'>{props.Header}</Paragraph>
      <Paragraph>{props.Paragraph}</Paragraph>
    </div>
  );
};

export default Card;
