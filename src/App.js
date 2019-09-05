import React, { Fragment, Component } from "react";
import "./App.scss";
import "./variable.scss";

//components
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
import Card from "./components/Card/Card";
import { Row, Col } from "./components/Grid/Grid";
import Pamhplet from "./components/Pamphlet/Pamphlet";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import Modal from "./components/Modal/Modal";

//media
import mia2 from "./images/mia2.jpeg";

let toggle = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: "",
      line__top: "",
      line__middle: "",
      line__bottom: "",

      menu__box__display: "",
      menu__box__hide: ""
    };
    this.menuToggle = this.menuToggle.bind(this);
  }
  menuToggle() {
    if (this.state.overlay != "menu__overlay--cover") {
      this.setState({
        overlay: "menu__overlay--cover",
        line__top: "menu__line__top--rotate",
        line__middle: "menu__line__middle--hide",
        line__bottom: "menu__line__bottom--rotate",
        menu__box__hide: "",
        menu__box__display: "menu__box--display"
      });
    } else {
      this.setState({
        overlay: "",
        line__top: "",
        line__middle: "",
        line__bottom: "",
        menu__box__display: "",
        menu__box__hide: "menu__box--hide"
      });
    }
  }

  //used outer dic for menutoggle becasue Menu component would not fire onclick
  render() {
    return (
      <div className="App">
        <div onClick={this.menuToggle}>
          <Menu
            overlay={this.state.overlay}
            line__top={this.state.line__top}
            line__middle={this.state.line__middle}
            line__bottom={this.state.line__bottom}
            menu__box__display={this.state.menu__box__display}
            menu__box__hide={this.state.menu__box__hide}
          />
        </div>
        <Section type="hero">
          <Title size="lg">mia's party</Title>
          <Title size="sm">is where the paty happens</Title>
          <Button
            href="./#offers"
            className="u-margin-top-sm"
            type="primary"
            color="primary--white"
          >
            discover our packages
          </Button>
        </Section>
        <Section
          id="about"
          Header={<Header>EXCITING packages FOR ADVENTUROUS babies</Header>}
          type="about"
        >
          <Paragraph size="lg">YOU'RE GOING TO FALL IN LOVE with mia</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </Paragraph>
          <Paragraph size="lg">
            LIVE parties LIKE YOU NEVER HAVE BEFORE
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </Paragraph>
          <Button type="secondary" mod="button--after">
            Learn more
          </Button>
        </Section>
        <Section id="benefits" type="benefits">
          <Row skew="deg7">
            <Col size="col-1-of-4">
              <Card
                icon="icon-basic-world"
                Header="meet mia"
                Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
              />
            </Col>
            <Col size="col-1-of-4">
              <Card
                icon="icon-basic-compass"
                Header="guided path"
                Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
              />
            </Col>
            <Col size="col-1-of-4">
              <Card
                icon="icon-basic-map"
                Header="start to finish"
                Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
              />
            </Col>
            <Col size="col-1-of-4">
              <Card
                icon="icon-basic-heart"
                Header="love to work"
                Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
              />
            </Col>
          </Row>
        </Section>
        <Section id="offers" type="offers">
          <Row>
            <Col mod="margin-bottom-md">
              <Header>MOST POPULAR packages</Header>
            </Col>
          </Row>
          <Row>
            <Col size="col-1-of-3">
              <Pamhplet
                color="primary"
                img="mia-1"
                header="the sleepy baby"
                li_1="3 naps"
                li_2="Up to 30 people"
                li_3="2 nannies"
                li_4="sleep in cozy hotels"
                li_5="Fun: lots"
                price="$297"
              />
            </Col>
            <Col size="col-1-of-3">
              <Pamhplet
                color="secondary"
                img="mia-2"
                header="the morning glory"
                li_1="3 cupcakes"
                li_2="Up to 70 people"
                li_3="2 tour guides"
                li_4="dance with Elvis"
                li_5="difficulty: easy"
                price="$497"
              />
            </Col>
            <Col size="col-1-of-3">
              <Pamhplet
                color="tertiary"
                img="mia-3"
                header="the peacefull playground"
                li_1="10 tons of sand"
                li_2="Up to 200 people"
                li_3="6 tonka-trucks"
                li_4="build sandcastle"
                li_5="Fun: epic"
                price="$597"
              />
            </Col>
          </Row>
          <Row>
            <Col mod="margin-top-sm">
              <Button type="primary" color="primary--purple">
                discover all tours
              </Button>
            </Col>
          </Row>
        </Section>
        <Section id="reviews" type="reviews">
          <Row>
            <Col>
              <Header mod="u-margin-bottom-lg">
                we make babies genuinely happy
              </Header>
            </Col>
          </Row>
          <Row>
            <Col>
              <Review type="parents">
                <Paragraph size="lg">Our baby loved it!</Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Paragraph>
              </Review>
            </Col>
          </Row>
          <Row>
            <Col>
              <Review type="maura">
                <Paragraph size="lg">
                  I HAD THE BEST WEEK EVER WITH MY FAMILY
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </Paragraph>
              </Review>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="secondary" mod="button--after">
                read all stories
              </Button>
            </Col>
          </Row>
        </Section>
        <Section id="contact" type="contact">
          <Row>
            <Col>
              <Contact />
            </Col>
          </Row>
        </Section>
        <Section type="footer"></Section>
        <Modal />
      </div>
    );
  }
}

export default App;
