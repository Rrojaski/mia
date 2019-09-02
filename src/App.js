import React, { Fragment, Component } from "react";
import "./App.scss";


//components
import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Header from "./components/Header/Header";
import Link from "./components/Link/Link";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
import Card from './components/Card/Card';
import { Row, Col } from './components/Grid/Grid';
import Pamhplet from './components/Pamphlet/Pamphlet';


//media
import mia2 from './images/mia2.jpeg';

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
          <Button type="primary" color="primary--white">
            discover our packages
          </Button>
        </Section>
        <Section id='about' Header={<Header>EXCITING packages FOR ADVENTUROUS babies</Header>} type='about'>
          <Paragraph size='lg'>YOU'RE GOING TO FALL IN LOVE with mia</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</Paragraph>
          <Paragraph size='lg'>LIVE parties LIKE YOU NEVER HAVE BEFORE</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</Paragraph>
          <Button type='secondary' mod='button--after'>Learn more</Button>
        </Section>
        <Section type="benefits">
          <Row skew='deg7'>
            <Col size='col-1-of-4'>
              <Card icon='icon-basic-world' Header='meet mia' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
            </Col>
            <Col size='col-1-of-4'>
              <Card icon='icon-basic-compass' Header='meet mia' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
            </Col>
            <Col size='col-1-of-4'>
              <Card icon='icon-basic-map' Header='meet mia' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
            </Col>
            <Col size='col-1-of-4'>
              <Card icon='icon-basic-heart' Header='meet mia' Paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
            </Col>
          </Row>
        </Section>
        <Section type='offers'>
          <Row>
            <Col>
              <Header>
                MOST POPULAR packages
                </Header>
            </Col>
          </Row>
          <Row>
            <Col size='col-1-of-3'><Pamhplet img={mia2} header='the sea explorer' li_1='3 day tours' li_2='Up to 30 people' li_3='2 tour guides' li_4='sleep in cozy hotels' li_5='difficulty: easy' price='$297' /></Col>
            <Col size='col-1-of-3'><Pamhplet /></Col>
            <Col size='col-1-of-3'><Pamhplet /></Col>
          </Row>
          <Row>
            <Col><Button type='primary' color='primary--purple'>discover all tours</Button></Col>
          </Row>
        </Section>
      </div>
    );
  }
}

export default App;


