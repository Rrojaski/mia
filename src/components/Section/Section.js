import React from "react";
import styles from "./Section.module.scss";

//components
import { Row, Col } from "../Grid/Grid";
import Link from "../Link/Link";
import Paragraph from "../Paragraph/Paragraph";

//media
import img1 from "../../images/img1.PNG";
import img2 from "../../images/img2.PNG";
import img3 from "../../images/img3.PNG";

const img_1 = document.getElementById("img1");

const scale = () => {
  console.log(img_1);
};
const Title = props => {
  if (props.type === "hero") {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        <div className={`${styles.hero__logo}`}>mia</div>
        <div className={`${styles.hero__box}`}>{props.children}</div>
      </section>
    );
  } else if (props.type === "about") {
    return (
      <section
        id={props.id}
        className={`${styles.Section} ${styles[props.type]}`}
      >
        <Row>
          <Col>
            <div className={`${styles.about__header}`}>{props.Header}</div>
          </Col>
        </Row>
        <Row>
          <Col size="col-1-of-2">
            <div className={`${styles.about__box__left}`}>{props.children}</div>
          </Col>
          <Col size="col-1-of-2">
            <div className={`${styles.about__composition}`}>
              <img
                alt='baby'
                src={img1}
                onMouseOver={scale}
                className={`${styles.about__img} ${styles.about__img__1}`}
              />
              <img
                alt='baby'
                src={img3}
                onMouseOver={scale}
                className={`${styles.about__img} ${styles.about__img__2}`}
              />
              <img
                alt='baby'
                src={img2}
                onMouseOver={scale}
                className={`${styles.about__img} ${styles.about__img__3}`}
              />
            </div>
          </Col>
        </Row>
      </section>
    );
  } else if (props.type === "footer") {
    return (
      <section className={`${styles.Section} ${styles[props.type]}`}>
        <div className={`${styles.footer__logo}`}>
          <span>mia</span>
        </div>
        <Row>
          <div className={`${styles.footer__box}`}>
            <Link>company</Link>
            <Link>contact us</Link>
            <Link>carrers</Link>
            <Link>privacy policy</Link>
            <Link>terms</Link>
          </div>
          <div className={`${styles.footer__box}`}>
            <Paragraph siz="sm">
              Built by{" "}
              <Link
                external
                href="https://www.linkedin.com/in/roman-rojas-14a23a86"
              >
                Roman Rojas
              </Link>{" "}
              for to showcase his work with{" "}
              <Link
                external
                href="https://www.udemy.com/advanced-css-and-sass/"
              >
                ADVANCED CSS AND SASS
              </Link>
              . A credit to the original author of the design, Jonas Schmedtman.
            </Paragraph>
          </div>
        </Row>
      </section>
    );
  } else {
    return (
      <section
        id={props.id}
        className={`${styles.Section} ${styles[props.type]}`}
      >
        {props.children}
      </section>
    );
  }
};

export default Title;
