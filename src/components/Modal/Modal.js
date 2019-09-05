import React, { Fragment } from "react";
import styles from "./Modal.module.scss";

//components
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Button from "../../components/Button/Button";

//media
import mia1 from "../../images/mia1.jpeg";
import mia2 from "../../images/mia2.jpeg";

const Modal = props => {
  return (
    <div id="modal" className={`${styles.Modal}`}>
      <div className={`${styles.modal__overlay}`}></div>
      <div className={`${styles.modal__box}`}>
        <div className={`${styles.modal__left}`}>
          <img
            src={mia1}
            alt="modal image of party"
            className={`${styles.modal__img}`}
          />
          <img
            src={mia2}
            alt="modal image of party"
            className={`${styles.modal__img}`}
          />
        </div>
        <div className={`${styles.modal__right}`}>
          <Header>start booking now</Header>
          <Paragraph size="lg">
            IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING
          </Paragraph>
          <p className={`${styles.modal__text}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed
            risus pretium quam. Aliquam sem et tortor consequat id. Volutpat
            odio facilisis mauris sit amet massa vitae. Mi bibendum neque
            egestas congue. Placerat orci nulla pellentesque dignissim enim sit.
            Vitae semper quis lectus nulla at volutpat diam ut venenatis.
            Malesuada pellentesque elit eget gravida cum sociis natoque
            penatibus et. Proin fermentum leo vel orci porta non pulvinar neque
            laoreet. Gravida neque convallis a cras semper. Molestie at
            elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet
            nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet
            sit. Amet massa vitae tortor condimentum lacinia quis vel eros
            donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi
            porta.
          </p>
          <Button type="primary" color="primary--purple">
            book now
          </Button>
        </div>
        <a className={`${styles.modal__close}`} href="./about">
          X
        </a>
      </div>
    </div>
  );
};

export default Modal;
